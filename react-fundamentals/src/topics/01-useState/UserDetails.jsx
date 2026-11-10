import { useState } from 'react';

function UserDetails() {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <button onClick={() => setShowDetails(prev => !prev)}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>

            {showDetails && (
                <div>
                    <h3>User Details</h3>
                    <p>Name: Aneena</p>
                    <p>Role: Software Engineer</p>
                </div>
            )}
        </div>
    );
}

export default UserDetails;