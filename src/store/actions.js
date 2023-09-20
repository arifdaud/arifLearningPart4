import Vue from 'vue';
export const retrieveData = ({commit}) => {
    // initiates an HTTP GET request 
    Vue.http.get('data.json')
    //converts the HTTP response to JSON format
        .then(response => response.json())
        //executed when the JSON data is successfully received from the server.
        .then(data => {
            if (data) {              
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                };              
                //used to update the list of available stocks in the store's state.
                commit('SET_STOCKS', stocks);
                //used to update the user's portfolio and funds in the store's state.
                commit('SET_PORTFOLIO', portfolio);
            }
        });
};