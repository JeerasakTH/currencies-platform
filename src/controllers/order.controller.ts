import { Request, Response } from "express";
import { OrderModel } from "../models";

export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders = await OrderModel.findAll()
        res.status(200).json({ status: "success", message: "Get all orders", data: orders });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ status: "error", message: error, data: null });
    }
}