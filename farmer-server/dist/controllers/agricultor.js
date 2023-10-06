"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAgricultor = exports.updateAgricultor = exports.postAgricultor = exports.getAgricultor = exports.getAgricultores = void 0;
const agricultor_1 = __importDefault(require("../models/agricultor"));
const getAgricultores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listAgricultores = yield agricultor_1.default.findAll();
        res.json(listAgricultores);
    }
    catch (error) {
        res.status(400).json({
            msg: `Erro ao buscar agricultores`
        });
    }
});
exports.getAgricultores = getAgricultores;
const getAgricultor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const agricultor = yield agricultor_1.default.findByPk(id);
        if (agricultor) {
            res.json(agricultor);
        }
        else {
            res.status(404).json({
                msg: `Não existe nenhum agricultor com o id ${id} cadastrado na base de dados `
            });
        }
    }
    catch (error) {
        res.status(400).json({
            msg: `Erro ao buscar agricultor de id ${id}`
        });
    }
});
exports.getAgricultor = getAgricultor;
const postAgricultor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield agricultor_1.default.create(body);
        res.json({
            msg: 'Agricultor cadastrado com sucesso!',
            body
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Ocorreu um erro ao cadastrar o agricultor',
        });
    }
});
exports.postAgricultor = postAgricultor;
const updateAgricultor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const agricultor = yield agricultor_1.default.findByPk(id);
        if (agricultor) {
            yield agricultor.update(body);
            res.json({
                msg: 'Agricultor atualizado com sucesso!',
                body
            });
        }
        else {
            res.status(404).json({
                msg: `Não existe nenhum agricultor com o id ${id} cadastrado na base de dados `
            });
        }
    }
    catch (error) {
        res.status(400).json({
            msg: 'Ocorreu um erro ao atualizar o agricultor',
        });
    }
});
exports.updateAgricultor = updateAgricultor;
const deleteAgricultor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const agricultor = yield agricultor_1.default.findByPk(id);
    if (agricultor) {
        yield agricultor.destroy();
        res.json({
            msg: "O agricultor foi excluído com sucesso!"
        });
    }
    else {
        res.status(404).json({
            msg: `Não existe nenhum agricultor com o id ${id} cadastrado na base de dados `
        });
    }
});
exports.deleteAgricultor = deleteAgricultor;
