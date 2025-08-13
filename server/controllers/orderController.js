import Order from "../models/Order.js";
import Product from "../models/Product.js";


// Place Order COD : /api/order/cod
export const placeOrderCOD = async (req, res)=>{
    try {
       const { userId, items, address } = req.body;
       if(!address || item.length === 0){
        return res.json({success: false, message: "Invalid data"})
       }
       // Calculate Amount Using Items
       let amount = await items.reduce(async (acc, item)=>{
            const product = await Product.findById(item.Product);
            return (await acc) + product.offerPrice * item.quantity
       }, 0)

       // Add Tax Charge (2%)
       amount += Math.floor(amount * 0.02);

       await Order.create({
        userId,
        items,
        amount,
        address,
        paymentType: "COD",
       });

       return res.json({ success: true, message: "Order Placed Successfully" })
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}