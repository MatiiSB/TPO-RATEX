module.exports = (sequelize, DataTypes) => {
    const TipoListas = sequelize.define("TipoListas",{
        idTipo:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        tipo:{
            type: DataTypes.STRING,
            allowNull:false,
        },
    });
    return TipoListas
}
