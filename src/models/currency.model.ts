import { Model } from 'sequelize'
import { DataType } from 'sequelize-typescript'
import { sequelize } from "../utils/database"

export class Currency extends Model {
    currency_id!: string // PK
    symbol!: string
    name!: string
    currency_type!: string
    decimal_places!: number
    created_at!: Date
    updated_at!: Date
}

export const CurrencyModel = sequelize.define<Currency>(
    "Currency",
    {
        currency_id: {
            type: DataType.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataType.UUIDV4,
        },
        symbol: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "symbol is required",
                },
            },
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "name is required",
                },
            },
        },
        currency_type: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "currency type is required",
                },
            },
        },
        decimal_places: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "decimal places type is required",
                },
            },
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
        tableName: "Currency",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true,
    }
)

Currency.sync({ alter: true }).then(() => console.log("Currency table created!"))