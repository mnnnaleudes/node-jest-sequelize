module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define("Log",{
        status: DataTypes.STRING,
        message: DataTypes.STRING,
        type: DataTypes.STRING,
        status: DataTypes.STRING,
        data_hora: DataTypes.DATE
    });

    return Log;
};