module.exports = (sequelize, DataTypes) => {
    //definimos la variable que va a tener nuestra tabla.
    //En este caso tiene el nombre Posts.
    //dentro vamos a definir los campos
    const Users = sequelize.define("Users", {
        mail:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        pass:{
            type: DataTypes.STRING,
            allowNull:false,
        },
    });
    return Users
}