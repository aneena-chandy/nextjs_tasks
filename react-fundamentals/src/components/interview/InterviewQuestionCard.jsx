import React, { useState } from "react";

function InterviewQuestionCard({
    question,
    onEdit,
    onDelete,
    onToggleReviewed,
}) {
    const [expanded, setExpanded] = useState(false);

    const difficultyClass = question.difficulty.toLowerCase();

    return (
        <div className="interview-question-card">

            <div className="question-card-header">

                <div className="question-number">
                    Q
                </div>

                <div className="question-content">

                    <div className="question-tags">

                        <span className={`difficulty-tag ${difficultyClass}`}>
                            {question.difficulty}
                        </span>

                        <span className="source-tag">
                            {question.source}
                        </span>

                        {question.reviewed && (
                            <span className="reviewed-tag">
                                ✓ Reviewed
                            </span>
                        )}

                    </div>

                    <h3>{question.question}</h3>

                    <p className="question-topic">
                        {question.topic}
                    </p>

                </div>

            </div>

            <div className="question-card-actions">

                <button
                    type="button"
                    className="view-answer-btn"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "Hide Answer" : "View Answer"}
                    <span>{expanded ? "▲" : "▼"}</span>
                </button>

                <button
                    type="button"
                    className="edit-question-btn"
                    onClick={() => onEdit(question)}
                >
                    <span>✏️</span>
                    Edit
                </button>

                <button
                    type="button"
                    className="delete-question-btn"
                    onClick={() => onDelete(question.id)}
                >
                    <span>🗑️</span>
                    Delete
                </button>

            </div>

            {expanded && (

                <div className="question-answer-section">

                    <h4>💡 Answer</h4>

                    <p className="question-answer">
                        {question.answer}
                    </p>

                    {question.code && (
                        <>
                            <h4>💻 Code Example</h4>

                            <pre className="interview-code">
                                <code>{question.code}</code>
                            </pre>
                        </>
                    )}

                    <button
                        type="button"
                        className={`review-btn ${question.reviewed ? "completed" : ""}`}
                        onClick={() => onToggleReviewed(question.id)}
                    >
                        {question.reviewed
                            ? "✓ Mark as Not Reviewed"
                            : "✓ Mark as Reviewed"}
                    </button>

                </div>

            )}

        </div>
    );
}

export default InterviewQuestionCard;