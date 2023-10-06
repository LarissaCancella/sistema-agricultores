import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Agricultor = db.define('Agricultor', {
    razaoSocial: {
        type: DataTypes.STRING
    },
    nomeFantasia: {
        type: DataTypes.STRING
    },
    cpfCnpj: {
        type: DataTypes.STRING
    },
    celular: {
        type: DataTypes.STRING
    },
    cidade: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'agricultor'
})

export default Agricultor;