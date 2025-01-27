import express from 'express';
import { getAllCurrencies } from '../controllers/currency.controller';

const router = express.Router();

router.get('/', getAllCurrencies)

export default router;