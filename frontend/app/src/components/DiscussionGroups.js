import React from 'react';

const DiscussionGroups = () => {
    // Sample discussion groups data
    const groups = [
        { id: 1, name: 'Philosophy Enthusiasts', topic: 'Philosophy' },
        { id: 2, name: 'Science Lovers', topic: 'Science' },
        // More groups...
    ];

    return (
        <div className="discussion-groups">
            <h2>Discussion Groups</h2>
            <ul>
                {groups.map(group => (
                    <li key={group.id}>{group.name} - Topic: {group.topic}</li>
                ))}
            </ul>
        </div>
    );
};

export default DiscussionGroups;
