const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Destructure sequelize instance

const Contact = sequelize.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('new', 'read', 'replied'),
        defaultValue: 'new'
    }
}, {
    timestamps: true
});

module.exports = Contact;
