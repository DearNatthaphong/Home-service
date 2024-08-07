import express from "express";
import cors from "cors";
import connectionPool from "./src/utils/db.mjs";
import authRouter from "./src/routes/auth.route.mjs";
import { protect } from "./src/middlewares/protect.middleware.mjs";
import dotenv from "dotenv";
import paymentRouter from "./src/routes/payment.route.mjs";
import serviceRouter from "./src/routes/service.route.mjs";
import orderRouter from "./src/routes/order.route.mjs";
import promotionRouter from "./src/routes/promotion.route.mjs";
import ViewServiceRouter from "./src/routes/view-service.route.mjs";
import updateServiceRouter from "./src/routes/fix-service.route.mjs";
import deleteServiceRoute from "./src/routes/delete-route.mjs";
import path from "path";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use("/auth", authRouter);
// app.use("/service", serviceRouter);
app.use(protect);
app.use("/promotions", promotionRouter);
app.use("/payment", paymentRouter);
app.use("/service", serviceRouter);
app.use("/service", createService);
app.use("/service", ViewServiceRouter);
app.use("/service", updateServiceRouter);
app.use("/service", deleteServiceRoute);
app.use("/orders", orderRouter);

app.get("/", (req, res) => {
  console.log("Sawaddee");
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
