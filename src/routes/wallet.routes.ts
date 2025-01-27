import express from 'express';
import { getAllWallets } from '../controllers/wallet.controller';

const router = express.Router();

router.get('/', getAllWallets)

export default router;