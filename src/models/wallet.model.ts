import { Model } from 'sequelize'
import { DataType } from 'sequelize-typescript'
import { sequelize } from "../utils/database"
import { CurrencyModel } from './currency.model'
import { UserModel } from './user.model'

export class Wallet extends Model {
    wallet_id!: string      // PK
    user_id!: string        // FK -> User
    currency_id!: string    // FK -> Currency
    wallet_address!: string | null
    balance!: number
    created_at!: Date
    updated_at!: Date
}

export const WalletModel = sequelize.define<Wallet>(
    "Wallet",
    {
        wallet_id: {
            type: DataType.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataType.UUIDV4,
        },
        user_id: {
            type: DataType.UUID,
            allowNull: false,
            references: {
                model: 'User',
                key: 'user_id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
        },
        currency_id: {
            type: DataType.UUID,
            allowNull: false,
            references: {
                model: 'Currency',
                key: 'currency_id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
        },
        wallet_address: {
            type: DataType.STRING,
            allowNull: true,
        },
        balance: {
            type: DataType.DECIMAL(18, 8),
            allowNull: false,
            defaultValue: 0,
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
        tableName: "Wallet",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true,
    }
)

// WalletModel.belongsTo(UserModel, {
//     foreignKey: 'user_id',
//     as: 'user'
// })

// WalletModel.belongsTo(CurrencyModel, {
//     foreignKey: 'currency_id',
//     as: 'currency'
// })

// WalletModel.sync({ alter: true }).then(() => console.log("Wallet table created!"))