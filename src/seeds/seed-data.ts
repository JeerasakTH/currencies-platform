import { symbol } from "joi";
import { CurrencyModel } from "../models/currency.model";
import { UserModel } from "../models/user.model";
import { WalletModel } from "../models/wallet.model";

export const seedDatabase = async () => {
    try {
        const [user1] = await UserModel.findOrCreate({
            where: { email: 'test@example.com', password: 'qwerty1234' },
            defaults: {
                first_name: 'exam',
                last_name: 'ple',
                email: 'test@example.com',
                phone: '0812345678',
                password: 'qwerty1234',
                kyc_status: 'VERIFIED',
            }
        })

        const [currency1] = await CurrencyModel.findOrCreate({
            where: { symbol: "BTC", name: "Bitcoin" },
            defaults: {
                symbol: "BTC",
                name: "Bitcoin",
                currency_type: "CRYPTO",
                decimal_places: 8,
            }
        })

        await WalletModel.findOrCreate({
            where: { user_id: user1.user_id, currency_id: currency1.currency_id },
            defaults: {
                user_id: user1.user_id,
                currency_id: currency1.currency_id,
                wallet_address: '0x1234abcd',
                balance: 1000.0
            }
        })

        console.log('Database seeded successfully');
    } catch (error) {
        console.log('Failed to seed database', error);
    }
}