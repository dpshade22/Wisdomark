import React from 'react';

const OfflineActivities = () => {
    // Sample offline activities data
    const activities = [
        { id: 1, description: 'Take a walk in nature.' },
        { id: 2, description: 'Volunteer at a local charity.' },
        // More activities...
    ];

    return (
        <div className="offline-activities">
            <h2>Offline Activities</h2>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>{activity.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default OfflineActivities;
