import express from 'express';
import { getAllTrade } from '../controllers/trade.controller';

const router = express.Router();

router.get('/', getAllTrade)

export default router;