import { Request, Response } from "express";
import { TransactionModel } from "../models";

export const getAllTransactions = async (req: Request, res: Response): Promise<void> => {
    try {
        const transactions = await TransactionModel.findAll()
        res.status(200).json({ status: "success", message: "Get all transactions", data: transactions });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ status: "error", message: error, data: null });
    }
}