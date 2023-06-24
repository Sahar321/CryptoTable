function cryptoTokens() {
 
  const sam = async (dispatch) => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/list'
      );
      const data = await response.json();

      dispatch({ type: FETCH_cryptoTokens, payload: data });
    } catch (error) {
      console.log(error);
    }
   
    const me = await sam;
    console.log(me);
  };
}
module.exports = cryptoTokens;
