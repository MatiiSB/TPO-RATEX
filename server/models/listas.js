module.exports = (sequelize, DataTypes) => {
    const Listas = sequelize.define("Listas",{
        idUsuario:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        idTipoLista:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        Peliculas:{
            type: DataTypes.JSON,
            allowNull:false,
            defaultValue: [] 
        },
    });
    return Listas
}
