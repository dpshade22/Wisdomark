import React from 'react';
import QuoteCard from './QuoteCard';

const QuoteFeed = () => {
    // Sample quotes data
    const quotes = [
        { id: 1, text: 'The only true wisdom is in knowing you know nothing.', author: 'Socrates' },
        { id: 2, text: 'The unexamined life is not worth living.', author: 'Socrates' },
        // More quotes...
    ];

    return (
        <div className="quote-feed">
            {quotes.map(quote => (
                <QuoteCard key={quote.id} quote={quote} />
            ))}
        </div>
    );
};

export default QuoteFeed;
