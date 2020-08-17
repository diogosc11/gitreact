module.exports = (sequelize, DataTypes) => {
    const account = sequelize.define('account', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    account.prototype.toJSON = function() {
        const values = {...this.get()};
        delete values.password;
        return values;
    };

    return account;
};