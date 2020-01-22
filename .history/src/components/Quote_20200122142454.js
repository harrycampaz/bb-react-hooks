import React from 'react';

function Quote({quote}) {


    const {quote, author} = quote;

    return (
        <div className="frase">
<h1>{quote}</h1>
    <p>{author}</p>
        </div>
    );
}

export default Quote;