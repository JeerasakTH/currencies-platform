import { UserModel } from './user.model';
import { WalletModel } from './wallet.model';
import { CurrencyModel } from './currency.model';
import { OrderModel } from './order.model';
import { TradeModel } from './trade.model';
import { TransactionModel } from './transaction.model';

UserModel.hasMany(WalletModel, { foreignKey: 'user_id', as: 'wallets' });
WalletModel.belongsTo(UserModel, { foreignKey: 'user_id', as: 'user' });

CurrencyModel.hasMany(WalletModel, { foreignKey: 'currency_id', as: 'wallets' });
WalletModel.belongsTo(CurrencyModel, { foreignKey: 'currency_id', as: 'currency' });

UserModel.hasMany(OrderModel, { foreignKey: 'user_id', as: 'orders' });
OrderModel.belongsTo(UserModel, { foreignKey: 'user_id', as: 'user' });

OrderModel.belongsTo(CurrencyModel, { foreignKey: 'currency_id', as: 'currency' });

TradeModel.belongsTo(OrderModel, { foreignKey: 'buy_order_id', as: 'BuyOrder' });
TradeModel.belongsTo(OrderModel, { foreignKey: 'sell_order_id', as: 'SellOrder' });

TransactionModel.belongsTo(WalletModel, { foreignKey: 'from_wallet_id', as: 'FromWallet' });
TransactionModel.belongsTo(WalletModel, { foreignKey: 'to_wallet_id', as: 'ToWallet' });

export {
    UserModel,
    WalletModel,
    CurrencyModel,
    OrderModel,
    TradeModel,
    TransactionModel,
};
