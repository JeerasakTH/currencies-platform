import { Request, Response } from "express";
import { WalletModel } from "../models";

export const getAllWallets = async (req: Request, res: Response): Promise<void> => {
    try {
        const wallets = await WalletModel.findAll()
        res.status(200).json({ status: "success", message: "Get all wallets", data: wallets });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ status: "error", message: error, data: null });
    }
}

export const getWalletByUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const walletUser = await WalletModel.findAll({
            where: { user_id: req.params.user_id }
        })
        res.status(200).json({ status: "success", message: "Get wallet by user", data: walletUser });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ status: "error", message: error, data: null });
    }
}