import { Request, Response } from "express";
import { CurrencyModel } from "../models";

export const getAllCurrencies = async (req: Request, res: Response): Promise<void> => {
    try {
        const currencies = await CurrencyModel.findAll()
        res.status(200).json({ status: "success", message: "Get all currencies", data: currencies });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ status: "error", message: error, data: null });
    }
}