import React from 'react';

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div className="comment-author">{comment.author}</div>
            <div className="comment-content">{comment.content}</div>
            {comment.replies && comment.replies.map(reply => (
                <Comment key={reply.id} comment={reply} />
            ))}
        </div>
    );
};

export default Comment;