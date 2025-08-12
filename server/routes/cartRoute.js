// cartRoute.js

import express from "express";
import authUser from "../middlewares/authUser.js";
import { updateCart } from "../controllers/cartController.js";

// Use express.Router(), not mongoose.Router()
const cartRouter = express.Router();

// Update cart route
cartRouter.post('/update', authUser, updateCart);

export default cartRouter;
