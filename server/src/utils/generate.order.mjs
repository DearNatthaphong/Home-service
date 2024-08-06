function generateOrderNumber() {
    const prefix = 'HS';
    const now = new Date();
  
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // เดือนเริ่มจาก 0 จึงต้อง +1
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const orderNumber = `${prefix}${year}${month}${day}${hours}${minutes}${seconds}`;
    return orderNumber;
  }
  
export default generateOrderNumber;