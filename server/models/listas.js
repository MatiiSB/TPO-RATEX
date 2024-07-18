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
      idPeliculas: {
        type: DataTypes.STRING, // Almacena el array como una cadena JSON
        allowNull: false,
      },
      posterpath: {
        type: DataTypes.STRING, // Almacena el array como una cadena JSON
        allowNull: false,
      },
      titulo: {
        type: DataTypes.STRING, // Almacena el array como una cadena JSON
        allowNull: false,
      }
  });
  return Listas
}