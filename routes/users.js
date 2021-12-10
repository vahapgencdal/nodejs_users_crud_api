import express from 'express';
import {getUsers, getUser, createUser, updateUser, deleteUser} from '../controllers/users';

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.post('/', createUser);

router.patch('/:id', updateUser);

export default router;