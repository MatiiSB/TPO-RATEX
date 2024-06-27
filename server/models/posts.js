module.exports = (sequelize, DataTypes) => {
    //definimos la variable que va a tener nuestra tabla.
    //En este caso tiene el nombre Posts.
    //dentro vamos a definir los campos
    const Posts = sequelize.define("Posts", {
        title:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        username:{
            type: DataTypes.STRING,
            allowNull:false,
        }
    });
    return Posts
};