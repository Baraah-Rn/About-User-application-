import express from 'express';
const router = express.Router();
import { createUser, readUsers, readUsersById,updateUserById, deleteUserById } from '../controller/users.js';


router.get('/',readUsers);

router.post('/', createUser);

router.get('/:id',readUsersById );

router.patch('/:id',updateUserById );

router.delete('/:id',deleteUserById )


export default router;