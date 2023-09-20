import stocks from '../../data/stocks';
const state = {
    //to store the list of available stocks
    stocks: []
};
const mutations = {
    //to set the state.stocks array to a new array of stocks
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS'(state) {
        //updates the price of each stock by applying a random factor.
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
};
const actions = {
    //handling the submission of a buy order for a stock  
    submitBuyStock: ({ commit }, order) => {
        commit('BUY_STOCKS', order);
    },
    //initially set the list of available stocks in the state. 
    setStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks)
    },
    //triggering the randomization of stock prices. 
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};
const getters = {
    stocks: state => {        
        //allows components to access the list of available stocks from the store's state.
        return state.stocks;
    }
};
//allows it to be registered as a Vuex module in the root store of the Vue.js application.
export default {
    state, mutations, actions, getters
};