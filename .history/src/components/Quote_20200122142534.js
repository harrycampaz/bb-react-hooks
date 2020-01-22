import React from 'react';

function Quote({quoteItem}) {


    const {quote, author} = quoteItem;

    return (
        <div className="frase">
<h1>{quote}</h1>
    <p>- {author}</p>
        </div>
    );
}

export default Quote;