import { Model } from 'sequelize'
import { DataType } from 'sequelize-typescript'
import { sequelize } from "../utils/database"
import { WalletModel } from './wallet.model'

export class User extends Model {
    user_id!: string    // PK
    first_name!: string
    last_name!: string
    email!: string      // Unique
    phone!: string
    password!: string
    kyc_status!: string
    created_at!: Date
    updated_at!: Date
}

export const UserModel = sequelize.define<User>(
    "User",
    {
        user_id: {
            type: DataType.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataType.UUIDV4,
        },
        first_name: {
            type: DataType.STRING,
            allowNull: true,
        },
        last_name: {
            type: DataType.STRING,
            allowNull: true,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                    msg: "email is required",
                },
            },
        },
        phone: {
            type: DataType.STRING,
            allowNull: true,
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "password is required",
                },
            },
        },
        kyc_status: {
            type: DataType.STRING,
            allowNull: true,
            defaultValue: "UNVERIFIED",
        },
        created_at: {
            type: DataType.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataType.DATE,
            allowNull: false,
        }
    },
    {
        tableName: "User",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true,
    }
)

// UserModel.hasMany(WalletModel, {
//     foreignKey: 'user_id', // Foreign Key ที่ใช้ใน WalletModel
//     as: 'wallets',         // Alias สำหรับความสัมพันธ์นี้
// });

// UserModel.sync({ alter: true }).then(() => console.log("User table created!"))