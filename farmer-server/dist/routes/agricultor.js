"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agricultor_1 = require("../controllers/agricultor");
const router = (0, express_1.Router)();
router.get('/', agricultor_1.getAgricultores);
router.get('/:id', agricultor_1.getAgricultor);
router.post('/', agricultor_1.postAgricultor);
router.put('/:id', agricultor_1.updateAgricultor);
router.delete('/:id', agricultor_1.deleteAgricultor);
exports.default = router;
