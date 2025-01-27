import express from 'express';
import { getAllOrders } from '../controllers/order.controller';

const router = express.Router();

router.get('/', getAllOrders)

export default router;