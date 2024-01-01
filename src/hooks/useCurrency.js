const { default: axios } = require("axios");
const { useState, useEffect } = require("react");

function useCurrency(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const getCurrency = async () => {
      try {
        const res = await axios.get(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        setData(res.data[currency]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCurrency();
  }, [currency]);

  return data;
}

export default useCurrency;
