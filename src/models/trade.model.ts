import { Model } from 'sequelize';
import { DataType } from 'sequelize-typescript';
import { sequelize } from '../utils/database';
import { OrderModel } from './order.model';

export class Trade extends Model {
    trade_id!: string;         // PK
    buy_order_id!: string;     // FK -> Order.order_id
    sell_order_id!: string;    // FK -> Order.order_id
    trade_price!: number;
    trade_quantity!: number;
    trade_timestamp!: Date;
}

export const TradeModel = sequelize.define<Trade>(
    "Trade",
    {
        trade_id: {
            type: DataType.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataType.UUIDV4,
        },
        buy_order_id: {
            type: DataType.UUID,
            allowNull: false,
            references: {
                model: 'Order',
                key: 'order_id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
        },
        sell_order_id: {
            type: DataType.UUID,
            allowNull: false,
            references: {
                model: 'Order',
                key: 'order_id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
        },
        trade_price: {
            type: DataType.DECIMAL(18, 8),
            allowNull: false,
        },
        trade_quantity: {
            type: DataType.DECIMAL(18, 8),
            allowNull: false,
        },
        trade_timestamp: {
            type: DataType.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "Trade",
        timestamps: true,
        freezeTableName: true,
    }
)

// TradeModel.belongsTo(OrderModel, {
//     foreignKey: "BuyOrder",
//     as: "buy_order_id"
// })

// TradeModel.belongsTo(OrderModel, {
//     foreignKey: "SellOrder",
//     as: "sell_order_id"
// })

// TradeModel.sync({ alter: true }).then(() => console.log("TradeModel table created!"))