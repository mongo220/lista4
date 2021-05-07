module.exports = (sequelize, Sequelize) => {
    const Bancos = sequelize.define("Bancos", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        CNPJ: Sequelize.STRING,
        razao_social: Sequelize.STRING,
        contato: Sequelize.STRING,
    });

    Bancos.associate = models => {
        Bancos.belongsTo(models.Agencia);
    }
    return Bancos;
}