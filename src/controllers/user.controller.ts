import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { WalletModel } from "../models/wallet.model";

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

// export const getUserByUnique