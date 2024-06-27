module.exports = (sequelize, DataTypes) => {
    const Listas = sequelize.define("Listas",{
        idUsuario:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        idTipoLista:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        Peliculas:{
            type: DataTypes.JSON,
            allowNull:false,
        },
    });
    return Listas
}
