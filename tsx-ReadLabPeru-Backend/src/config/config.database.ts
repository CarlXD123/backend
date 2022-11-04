import { Sequelize } from "sequelize"

const db = new Sequelize('ddhnm85ruottti', 'postgres', '4ef21c6489cdd1967fb79683dc6c5008acd60779a8c908f3dda79426a2f3e1ef', {
    host: 'ec2-44-209-57-4.compute-1.amazonaws.com',//localhost
    dialect: 'postgres',
    logging: false,
    port:5432,
    protocol: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_ENABLE_SSL && {
        require: true
      }
    }
});
export default db;