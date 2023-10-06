"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Agricultor = connection_1.default.define('Agricultor', {
    razaoSocial: {
        type: sequelize_1.DataTypes.STRING
    },
    nomeFantasia: {
        type: sequelize_1.DataTypes.STRING
    },
    cpfCnpj: {
        type: sequelize_1.DataTypes.STRING
    },
    celular: {
        type: sequelize_1.DataTypes.STRING
    },
    cidade: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'agricultor'
});
exports.default = Agricultor;
