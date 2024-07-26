import connectionPool from "../utils/db.mjs";

export const getOrderByQuerry = async (req, res) => {
  const { firstActionStatus, secondActionStatus } = req.query;

  let results;

  try {
    if (
      firstActionStatus === "รอดำเนินการ" &&
      secondActionStatus === "กำลังดำเนินการ"
    ) {
      results = await connectionPool.query(
        `SELECT
        orders.order_number,
        orders.total_price,
        orders.action_status,
        order_items.order_item_id,
        order_items.quantity,
        service_items.service_name
        FROM orders
        INNER JOIN order_items ON orders.order_id = order_items.order_id
        INNER JOIN service_items ON order_items.service_item_id = service_items.service_item_id
        WHERE orders.action_status = $1 OR orders.action_status = $2`,
        ["รอดำเนินการ", "กำลังดำเนินการ"]
      );
    }
    if (firstActionStatus === "ดำเนินการสำเร็จ") {
      results = await connectionPool.query(
        `SELECT
        orders.order_number,
        orders.total_price,
        orders.action_status,
        order_items.order_item_id,
        order_items.quantity,
        service_items.service_name
        FROM orders
        INNER JOIN order_items ON orders.order_id = order_items.order_id
        INNER JOIN service_items ON order_items.service_item_id = service_items.service_item_id
        WHERE orders.action_status = $1 `,
        ["ดำเนินการสำเร็จ"]
      );
    }
    console.log("results", results);
    if (results.rows.length === 0) {
      return res.status(404).json({
        message: "ไม่พบคำสั่งซ่อมในคำขอ",
      });
    }
    // const resultsData = {
    //   order_number: results.rows[0].order_number,
    //   items: results.rows.map((row) => ({
    //     order_item_id: row.order_item_id,
    //     service_name: row.service_name,
    //     quantity: row.quantity,
    //     status_title: row.status_title,
    //   })),
    //   total_price: results.rows[0].total_price,
    // };

    return res.status(200).json({
      message: "ดึงข้อมูลคำสั่งซื้อสำเร็จ",
      data: results.rows,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "พบข้อผิดพลาดภายในเซิร์ฟเวอร์",
    });
  }
};
