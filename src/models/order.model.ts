import { Model } from 'sequelize'
import { DataType } from 'sequelize-typescript'
import { sequelize } from "../utils/database"
import { UserModel } from './user.model'
import { CurrencyModel } from './currency.model'

export class Order extends Model {
    order_id!: string       // PK
    user_id!: string        // FK -> User
    currency_id!: string    // FK -> Currency
    side!: string
    price!: number
    quantity!: number
    status!: string
    created_at!: Date
    updated_at!: Date
}

export const OrderModel = sequelize.define<Order>(
    "Order",
    {
        order_id: {
            type: DataType.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataType.UUIDV4,
        },
        user_id: {
            type: DataType.UUID,
            allowNull: false,
        },
        currency_id: {
            type: DataType.UUID,
            allowNull: false,
        },
        side: {
            type: DataType.STRING,
            allowNull: false,
        },
        price: {
            type: DataType.DECIMAL(18, 8),
            allowNull: false,
        },
        quantity: {
            type: DataType.DECIMAL(18, 8),
            allowNull: false,
        },
        status: {
            type: DataType.STRING,
            allowNull: false,
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
        tableName: "Order",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true,
    }
)

OrderModel.belongsTo(UserModel, {
    foreignKey: "user_id",
    as: "user"
})

OrderModel.belongsTo(CurrencyModel, {
    foreignKey: "currency_id",
    as: "currency"
})

OrderModel.sync({ alter: true }).then(() => console.log("Order table created!"))