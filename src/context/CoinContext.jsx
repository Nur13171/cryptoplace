import { createContext, useEffect, useState } from "react";

// Step 1: Create Context
// eslint-disable-next-line react-refresh/only-export-components
export  const CoinContext = createContext();



// Step 2: Create Provider Component
const CoinContextProvider = (props) => {
    
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] =  useState({
        name: "usd",
        symbol : "$"
    })  

const fetchAllCoin = async () => {
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-Jkrn5iBFgsosDBTbqaMT1HT1 '
  }
};

fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
  .then(res => res.json())
  .then(res => {
    console.log("API result:", res); // ✅ Console log here
    setAllCoin(res);
  })
  .catch(err => console.error(err));
}

useEffect(() => {
  fetchAllCoin();
}, []);

useEffect(() => {
  console.log("current currency : ",currency.name);
  fetchAllCoin();
}, [currency]);

    
    const contextValue = {
       allCoin,currency,setCurrency
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;
