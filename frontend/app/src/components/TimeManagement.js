import React, { useState } from 'react';

const TimeManagement = () => {
    const [timeLimit, setTimeLimit] = useState(60); // Default time limit in minutes

    const handleChange = (event) => {
        setTimeLimit(event.target.value);
    };

    return (
        <div className="time-management">
            <h2>Time Management</h2>
            <label>
                Set daily usage limit (minutes):
                <input type="number" value={timeLimit} onChange={handleChange} />
            </label>
        </div>
    );
};

export default TimeManagement;
