import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App(props) {

  const [quote, setQuote] = useState({})

  console.log(quote);

  useEffect( async () => {

    const result = await axios('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    console.log(result);
    

  })
  

  return (
    <div>
      
    </div>
  );
}

export default App;