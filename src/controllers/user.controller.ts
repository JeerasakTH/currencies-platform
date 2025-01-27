import { Request, Response } from "express";
import { UserModel, WalletModel } from "../models";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await UserModel.findAll({
            include: [{ model: WalletModel, as: "wallets" }],
        })
        res.status(200).json({ status: "success", message: "Get all users", data: users });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ status: "error", message: error, data: null });
    }
}

export const getUserByUnique = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserModel.findOne({
            where: { unique: req.params.user_id },
            include: [{ model: WalletModel, as: "wallets" }],
        })
        if (!user) {
            res.status(404).json({ status: "error", message: "User not found", data: null });
            return;
        }
        res.status(200).json({ status: "success", message: "Get user by unique", data: user });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ status: "error", message: error, data: null });
    }
}