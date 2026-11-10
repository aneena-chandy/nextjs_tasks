import React, { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleUnlike = () => {
        if (likes > 0) {
            setLikes(likes - 1);
        }
    };

    return (
        <div>
            <h2>Like Button Application</h2>

            <h3>{likes} Likes</h3>

            <button onClick={handleLike}>
                Like 👍
            </button>

            <button onClick={handleUnlike}>
                Unlike 👎
            </button>
        </div>
    );
}

export default LikeButton;