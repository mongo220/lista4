module.exports = (sequelize, Sequelize) => {
    const Agencia = sequelize.define("Agencia", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        numeroAgencia: Sequelize.INTEGER,
        descricao: Sequelize.STRING,
        idBanco: Sequelize.INTEGER,
    });

    Agencia.associate = models => {
        Agencia.hasMany(models.Bancos);
    }

    return Agencia;
}