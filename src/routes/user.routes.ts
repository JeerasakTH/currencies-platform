import express from 'express';
import { getAllUsers, getUserByUnique } from '../controllers/user.controller';

const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id', getUserByUnique)

export default router;