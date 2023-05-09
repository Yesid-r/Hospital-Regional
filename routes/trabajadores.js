import express  from "express";
import {createTrabajador, deleteTrabajador, findAllTrabajador,getTrabajador, updateTrabajador} from '../controllers/trabajadorController.js'
import { verifAdmin } from "../utils/verifyToken.js";

const router = express.Router()

router.post('/', verifAdmin, createTrabajador)
// router.post('/',  createTrabajador)
router.put('/:id', verifAdmin, updateTrabajador)
router.delete('/:id', verifAdmin, deleteTrabajador)
router.get('/:id', getTrabajador)
router.get('/', findAllTrabajador)


export default router;