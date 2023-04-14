import React, { useState } from 'react';
import Comment from './Comment';

const CommentThread = ({ threads }) => {
    const [currentThreadIndex, setCurrentThreadIndex] = useState(0);

    const shuffleThread = () => {
        const randomIndex = Math.floor(Math.random() * threads.length);
        setCurrentThreadIndex(randomIndex);
    };

    return (
        <div className="comment-thread">
            <Comment comment={threads[currentThreadIndex]} />
            <button onClick={shuffleThread}>Shuffle Thread</button>
        </div>
    );
};

export default CommentThread;