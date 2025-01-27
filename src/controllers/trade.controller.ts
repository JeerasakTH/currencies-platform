import { Request, Response } from "express";
import { TradeModel } from "../models";

export const getAllTrade = async (req: Request, res: Response): Promise<void> => {
    try {
        const trades = await TradeModel.findAll()
        res.status(200).json({ status: "success", message: "Get all trades", data: trades });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ status: "error", message: error, data: null });
    }
}