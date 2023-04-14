import React from 'react';
import CommentThread from './CommentThread';

const QuoteCard = ({ quote }) => {
    // Sample comment threads data for each quote
    const commentThreads = [
        { id: 1, author: 'John', content: 'Great quote!', replies: [] },
        { id: 2, author: 'Emma', content: 'Thought-provoking.', replies: [] },
        // More comment threads...
    ];

    return (
        <div className="quote-card">
            <div className="quote">{quote.text}</div>
            <div className="author">- {quote.author}</div>
            <CommentThread threads={commentThreads} />
        </div>
    );
};

export default QuoteCard;
