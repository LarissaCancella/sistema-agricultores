import { Router } from "express";
import { deleteAgricultor, getAgricultor, getAgricultores, postAgricultor, updateAgricultor } from '../controllers/agricultor';

const router = Router();

router.get('/', getAgricultores)
router.get('/:id', getAgricultor)
router.post('/', postAgricultor)
router.put('/:id', updateAgricultor)
router.delete('/:id', deleteAgricultor)

export default router;