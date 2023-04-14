import React from 'react';
import CommentThread from './CommentThread';

const QuoteCard = ({ quote, commentThreads }) => {
    return (
        <div className="quote-card">
            <div className="quote">{quote.text}</div>
            <div className="author">- {quote.author}</div>
            <CommentThread threads={commentThreads} />
        </div>
    );
};

export default QuoteCard;