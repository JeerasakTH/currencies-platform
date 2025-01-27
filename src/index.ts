import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes'
// import cookieParser from 'cookie-parser';
import { seedDatabase } from './seeds/seed-data';
import { UserModel } from './models/user.model';
import { CurrencyModel } from './models/currency.model';
import { WalletModel } from './models/wallet.model';
import { OrderModel } from './models/order.model';
import { TradeModel } from './models/trade.model';
import { TransactionModel } from './models/transaction.model';

dotenv.config();

const app = express();
const port = process.env.PORT || 3002

app.use(express.json());
// app.use(cookieParser()) // ไม่ได้ทำ middleware

const initializeDatabase = async () => {
    try {
        await UserModel.sync({ alter: true });
        await CurrencyModel.sync({ alter: true });
        await WalletModel.sync({ alter: true });
        await OrderModel.sync({ alter: true });
        await TradeModel.sync({ alter: true });
        await TransactionModel.sync({ alter: true });

        console.log('Tables created successfully!');
    } catch (error) {
        console.error('Error creating tables:', error);
    }
};

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, Typescript!");
})

const startServer = async () => {
    try {
        await initializeDatabase();
        app.use('/api/v1', routes);

        setTimeout(async () => {
            await seedDatabase()
        }, 5000)

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
};

startServer();