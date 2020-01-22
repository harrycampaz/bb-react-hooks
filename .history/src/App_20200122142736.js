import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './components/Quote';

function App(props) {

  const [quote, setQuote] = useState({})

  useEffect(() => {
    getQuote()
  }, [])

  const getQuote =  async () => {
    const result = await axios('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // console.log(result.data);

    setQuote(result.data[0])
    
  } 
  

  console.log(quote);
  

  return (
    <div className="contenedor">
      <Quote quoteItem={quote}/>

<button onClick={getQuote}>NewQ QUote</button>

    </div>
  );
}

export default App;
