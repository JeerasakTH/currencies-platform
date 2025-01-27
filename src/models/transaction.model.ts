import { Model } from 'sequelize';
import { DataType } from 'sequelize-typescript';
import { sequelize } from '../utils/database';
import { WalletModel } from './wallet.model';

export class Transaction extends Model {
    transaction_id!: string;        // PK
    from_wallet_id!: string;        // FK -> Wallet.wallet_id
    to_wallet_id!: string | null;   // FK -> Wallet.wallet_id (nullable)
    external_address!: string | null;
    tx_type!: string;               // deposit, withdraw, internal
    amount!: number;                // จำนวนเงินที่โอน
    tx_fee!: number;                // ค่าธรรมเนียม
    created_at!: Date;
    updated_at!: Date;
}

export const TransactionModel = sequelize.define<Transaction>(
    "Transaction",
    {
        transaction_id: {
            type: DataType.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataType.UUIDV4,
        },
        from_wallet_id: {
            type: DataType.UUID,
            allowNull: false,
            references: {
                model: 'Wallet',
                key: 'wallet_id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
        },
        to_wallet_id: {
            type: DataType.UUID,
            allowNull: true,
            references: {
                model: 'Wallet',
                key: 'wallet_id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },
        external_address: {
            type: DataType.STRING,
            allowNull: true,
        },
        tx_type: {
            type: DataType.STRING,
            allowNull: false,
        },
        amount: {
            type: DataType.DECIMAL(18, 8),
            allowNull: false,
        },
        created_at: {
            type: DataType.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataType.DATE,
            allowNull: false,
        },
    },
    {
        tableName: 'Transaction',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true,
    }
)

TransactionModel.belongsTo(WalletModel, {
    foreignKey: 'from_wallet_id',
    as: 'FromWallet'
})

TransactionModel.belongsTo(WalletModel, {
    foreignKey: 'to_wallet_id',
    as: 'ToWallet'
})

Transaction.sync({ alter: true }).then(() => console.log("Transaction table created!"))