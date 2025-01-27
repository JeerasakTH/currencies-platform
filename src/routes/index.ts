import express from 'express';
import userRoutes from './user.routes';
import walletRoutes from './wallet.routes';
import currencyRoutes from './currency.routes';
import orderRoutes from './order.routes';
import tradeRoutes from './trade.routes';
import transactionRoutes from './transaction.routes';

const router = express.Router();

router.use('/user', userRoutes)
router.use('/currency', currencyRoutes)
router.use('/wallet', walletRoutes)
router.use('/order', orderRoutes)
router.use('/trade', tradeRoutes)
router.use('/transaction', transactionRoutes)

export default router;