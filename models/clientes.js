module.exports = (sequelize, Sequelize) => {
    const Clientes = sequelize.define("Clientes", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nome: Sequelize.STRING,
        CPF: Sequelize.STRING,
        sexo: Sequelize.STRING,
        salario: Sequelize.FLOAT,
        Contato: Sequelize.STRING,
    });
    return Clientes;
}