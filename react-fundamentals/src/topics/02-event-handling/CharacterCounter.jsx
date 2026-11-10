import React, { useState } from "react";

function CharacterCounter() {

    const [text, setText] = useState("");

    const maxCharacters = 100;

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const characterCount = text.length;

    const remainingCharacters = maxCharacters - characterCount;

    return (
        <div className="character-counter">

            <h2>Character Counter</h2>

            <p>Enter your text below:</p>

            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Start typing..."
                maxLength={maxCharacters}
                rows="5"
            />

            <div className="character-info">

                <span>
                    Characters: {characterCount} / {maxCharacters}
                </span>

                <span>
                    Remaining: {remainingCharacters}
                </span>

            </div>

            {characterCount >= 80 && characterCount < 100 && (
                <p className="character-warning">
                    ⚠️ Warning! You are approaching the character limit.
                </p>
            )}

            {characterCount === 100 && (
                <p className="character-limit">
                    Maximum character limit reached!
                </p>
            )}

        </div>
    );
}

export default CharacterCounter;