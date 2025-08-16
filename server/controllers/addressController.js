import Address from "../models/Address.js";

// Add Address : /api/address/add
export const addAddress = async (req, res) => {
  try {
    const userId = req.userId; // ✅ comes from authUser middleware
    const { address } = req.body;

    if (!userId) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    if (!address) {
      return res.status(400).json({ success: false, message: "Address is required" });
    }

    const newAddress = await Address.create({ ...address, userId });
    res.json({ success: true, message: "Address added successfully", address: newAddress });
  } catch (error) {
    console.log("Add Address Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Address : /api/address/get
export const getAddress = async (req, res) => {
  try {
    const userId = req.userId; // ✅ comes from authUser middleware

    if (!userId) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    const addresses = await Address.find({ userId });
    res.json({ success: true, addresses });
  } catch (error) {
    console.log("Get Address Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
