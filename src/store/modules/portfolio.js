const state = {
    funds: 50000,
    stocks: []
};
const mutations = {
    //mutation handles the purchase of stocks, updating both the stocks array and the funds based on the transaction.
    'BUY_STOCKS'(state, { stockId, quantity, stockPrice }) {
        //return true if id in the cur element is match with stock that want to buy
        const record = state.stocks.find(element => element.id == stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity,
            });
        }
        state.funds -= stockPrice * quantity;
    },
    //mutation handles the sale of stocks, similarly updating the stocks array and funds.
    'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    //mutation is used to set the entire state of the portfolio module based on a provided portfolio object.
    'SET_PORTFOLIO'(state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};
const actions = {
    sellingStock({ commit }, order) {
        commit('SELL_STOCK', order);
    }
};
const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price,                
            }
        });
    },
    funds(state) {
        return state.funds;
    }
};
export default {
    state, mutations, getters, actions
}