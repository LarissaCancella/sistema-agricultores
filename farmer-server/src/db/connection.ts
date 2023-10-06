import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sistemaagricultores', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize;