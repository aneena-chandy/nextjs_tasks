import React, { useEffect, useMemo, useState } from "react";
import TopicPageLayout from "./TopicPageLayout";
import { Link } from "react-router-dom";


import interviewQuestions from "../data/interviewQuestions";
import InterviewQuestionCard from "../components/interview/InterviewQuestionCard";

const STORAGE_KEY = "react-interview-questions";

const defaultTopics = [
    "React Fundamentals",
    "Components & Props",
    "useState",
    "Event Handling",
    "Conditional Rendering",
    "Mini Todo Application",
    "Dynamic UI Lists & Unique Keys"
];

const emptyForm = {
    topic: "React Fundamentals",
    difficulty: "Beginner",
    source: "Manual",
    question: "",
    answer: "",
    code: "",
};

function getInitialQuestions() {
    try {
        const savedQuestions = localStorage.getItem(STORAGE_KEY);

        if (savedQuestions) {
            return JSON.parse(savedQuestions);
        }
    } catch (error) {
        console.error("Unable to load interview questions:", error);
    }

    return interviewQuestions;
}

function createQuestionId() {
    return globalThis.crypto?.randomUUID?.()
        ?? `question-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function InterviewQuestionsPage() {

    const [questions, setQuestions] = useState(getInitialQuestions);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTopic, setSelectedTopic] = useState("All Topics");
    const [selectedDifficulty, setSelectedDifficulty] = useState("All Levels");

    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState(emptyForm);
    const [formError, setFormError] = useState("");

    const [importText, setImportText] = useState("");
    const [importError, setImportError] = useState("");
    const [showImport, setShowImport] = useState(false);

    // Save questions whenever the list changes.
    useEffect(() => {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(questions)
            );
        } catch (error) {
            console.error("Unable to save interview questions:", error);
        }
    }, [questions]);

    // Get all available topics dynamically.
    const topics = useMemo(() => {
        return [
            ...new Set([
                ...defaultTopics,
                ...questions.map((item) => item.topic),
            ]),
        ];
    }, [questions]);

    // Search and filter questions.
    const filteredQuestions = useMemo(() => {

        return questions.filter((item) => {

            const search = searchTerm.toLowerCase();

            const matchesSearch =
                item.question.toLowerCase().includes(search) ||
                item.answer.toLowerCase().includes(search) ||
                item.topic.toLowerCase().includes(search) ||
                (item.code || "").toLowerCase().includes(search);

            const matchesTopic =
                selectedTopic === "All Topics" ||
                item.topic === selectedTopic;

            const matchesDifficulty =
                selectedDifficulty === "All Levels" ||
                item.difficulty === selectedDifficulty;

            return (
                matchesSearch &&
                matchesTopic &&
                matchesDifficulty
            );
        });

    }, [questions, searchTerm, selectedTopic, selectedDifficulty]);

    const reviewedCount = questions.filter(
        (item) => item.reviewed
    ).length;

    const openAddForm = () => {
        setEditingId(null);
        setFormData(emptyForm);
        setFormError("");
        setShowForm(true);
    };

    const openEditForm = (question) => {
        setEditingId(question.id);

        setFormData({
            topic: question.topic,
            difficulty: question.difficulty,
            source: question.source,
            question: question.question,
            answer: question.answer,
            code: question.code || "",
        });

        setFormError("");
        setShowForm(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSaveQuestion = (event) => {
        event.preventDefault();

        if (
            !formData.topic.trim() ||
            !formData.question.trim() ||
            !formData.answer.trim()
        ) {
            setFormError(
                "Please enter the topic, question and answer."
            );
            return;
        }

        if (editingId) {

            setQuestions((previousQuestions) =>
                previousQuestions.map((item) =>
                    item.id === editingId
                        ? {
                            ...item,
                            ...formData,
                            topic: formData.topic.trim(),
                            question: formData.question.trim(),
                            answer: formData.answer.trim(),
                        }
                        : item
                )
            );

        } else {

            const newQuestion = {
                id: createQuestionId(),
                ...formData,
                topic: formData.topic.trim(),
                question: formData.question.trim(),
                answer: formData.answer.trim(),
                reviewed: false,
            };

            setQuestions((previousQuestions) => [
                newQuestion,
                ...previousQuestions,
            ]);
        }

        setShowForm(false);
        setEditingId(null);
        setFormData(emptyForm);
        setFormError("");
    };

    const handleDeleteQuestion = (id) => {

        const confirmed = window.confirm(
            "Are you sure you want to delete this question?"
        );

        if (!confirmed) {
            return;
        }

        setQuestions((previousQuestions) =>
            previousQuestions.filter((item) => item.id !== id)
        );
    };

    const handleToggleReviewed = (id) => {

        setQuestions((previousQuestions) =>
            previousQuestions.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        reviewed: !item.reviewed,
                    }
                    : item
            )
        );
    };

    const handleResetFilters = () => {
        setSearchTerm("");
        setSelectedTopic("All Topics");
        setSelectedDifficulty("All Levels");
    };

    const handleCopyAIPrompt = async () => {

        const topic = selectedTopic === "All Topics"
            ? "React concepts currently being studied"
            : selectedTopic;

        const prompt = `Generate exactly 10 React interview questions and answers
                        for the topic: ${topic}.

                        Requirements:

                        1. Include Beginner, Intermediate and Advanced questions.
                        2. Include questions suitable for Senior React Developer interviews.
                        3. Cover theoretical concepts and practical implementation.
                        4. Include real-world development scenarios.
                        5. Provide detailed, interview-ready answers.
                        6. Include practical React or JavaScript code examples wherever relevant.
                        7. Explain best practices and common mistakes.
                        8. Avoid duplicate or repetitive questions.
                        9.Create instaed of paragraph answers in points

                        Return ONLY valid JSON.
                        Do not include Markdown code fences or additional explanations.

                        Use this exact JSON structure:

                        [
                            {
                                "topic": "${topic}",
                                "difficulty": "Beginner",
                                "source": "ChatGPT Generated",
                                "question": "Question here",
                                "answer": "Detailed answer here",
                                "code": "Code example here"
                            }
                        ]

                        Ensure all 10 questions follow this structure.
                        Ensure the JSON is valid and can be parsed using JSON.parse().`;

        try {
            await navigator.clipboard.writeText(prompt);
            alert("AI prompt copied! Paste it into ChatGPT to generate questions.");
        } catch (error) {
            console.error("Unable to copy prompt:", error);
            alert("Unable to copy the prompt. Please try again.");
        }
    };

    const handleImportQuestions = () => {
        try {
            const parsedQuestions = JSON.parse(importText);

            if (!Array.isArray(parsedQuestions) || parsedQuestions.length === 0) {
                setImportError("Please provide a valid JSON array.");
                return;
            }

            const validQuestions = parsedQuestions.filter((item) => {
                return (
                    typeof item.topic === "string" &&
                    typeof item.question === "string" &&
                    typeof item.answer === "string" &&
                    item.topic.trim() &&
                    item.question.trim() &&
                    item.answer.trim() &&
                    ["Beginner", "Intermediate", "Advanced"].includes(item.difficulty)
                );
            });

            if (validQuestions.length !== parsedQuestions.length) {
                setImportError(
                    "Some questions are invalid. Check topic, difficulty, question and answer fields."
                );
                return;
            }

            const newQuestions = validQuestions.map((item) => ({
                id: createQuestionId(),
                topic: item.topic.trim(),
                difficulty: item.difficulty,
                source: item.source || "ChatGPT Generated",
                question: item.question.trim(),
                answer: item.answer.trim(),
                code: item.code || "",
                reviewed: false,
            }));

            setQuestions((previousQuestions) => [
                ...newQuestions,
                ...previousQuestions,
            ]);

            setImportText("");
            setImportError("");
            setShowImport(false);

            alert(`${newQuestions.length} questions imported successfully!`);

        } catch (error) {
            setImportError("Invalid JSON format. Please check the generated response.");
        }
    };

    return (
        
        <div className="interview-page">

            {/* Page Header */}
            <div className="interview-page-header">

                <div className="interview-header-content">

                    <Link to="/" className="back-dashboard-btn">
                        <i className="bi bi-arrow-left"></i>
                        Back to Dashboard
                    </Link>

                    <span className="interview-eyebrow">
                        REACT LEARNING PATH
                    </span>

                    <h1>Interview Questions & Answers</h1>

                    <p>
                        Build your personal React interview preparation library.
                        Save questions from every topic you study.
                    </p>

                </div>

                <div className="interview-header-actions">

                    <button
                        type="button"
                        className="ai-prompt-btn"
                        onClick={handleCopyAIPrompt}
                    >
                        <i className="bi bi-stars"></i>
                        Generate AI Questions
                    </button>

                    <button
                        type="button"
                        className="add-question-btn"
                        onClick={openAddForm}
                    >
                        <i className="bi bi-plus-lg"></i>
                        Add Question
                    </button>
                    <button
                        type="button"
                        className="add-question-btn"
                        onClick={() => {
                            setShowImport(!showImport);
                            setImportError("");
                        }}
                    >
                        <i className="bi bi-file-earmark-arrow-up"></i>
                        Import JSON
                    </button>

                </div>

            </div>

            {/* Statistics */}
            <div className="interview-stats">

                <div className="interview-stat-card">
                    <div className="stat-icon purple">
                        <i className="bi bi-journal-text"></i>
                    </div>
                    <div>
                        <h2>{questions.length}</h2>
                        <p>Total Questions</p>
                    </div>
                </div>

                <div className="interview-stat-card">
                    <div className="stat-icon green">
                        <i className="bi bi-check-circle"></i>
                    </div>
                    <div>
                        <h2>{reviewedCount}</h2>
                        <p>Reviewed</p>
                    </div>
                </div>

                <div className="interview-stat-card">
                    <div className="stat-icon orange">
                        <i className="bi bi-clock-history"></i>
                    </div>
                    <div>
                        <h2>{questions.length - reviewedCount}</h2>
                        <p>Pending Review</p>
                    </div>
                </div>

                <div className="interview-stat-card">
                    <div className="stat-icon blue">
                        <i className="bi bi-collection"></i>
                    </div>
                    <div>
                        <h2>{topics.length}</h2>
                        <p>Available Topics</p>
                    </div>
                </div>

            </div>

            {/* Add / Edit Form */}
            {showForm && (
                <div className="interview-form-card">

                    <div className="interview-form-heading">

                        <div>
                            <h2>
                                {editingId
                                    ? "Edit Interview Question"
                                    : "Add New Interview Question"}
                            </h2>

                            <p>
                                Save questions and answers from your learning topics.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="close-form-btn"
                            onClick={() => setShowForm(false)}
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>

                    </div>

                    <form onSubmit={handleSaveQuestion}>

                        <div className="interview-form-grid">

                            <div className="interview-field">
                                <label htmlFor="topic">Topic *</label>

                                <input
                                    list="interview-topics"
                                    id="topic"
                                    name="topic"
                                    value={formData.topic}
                                    onChange={handleInputChange}
                                    placeholder="Enter or select a topic"
                                    required
                                />

                                <datalist id="interview-topics">
                                    {topics.map((topic) => (
                                        <option key={topic} value={topic} />
                                    ))}
                                </datalist>
                            </div>

                            <div className="interview-field">
                                <label htmlFor="difficulty">Difficulty *</label>

                                <select
                                    id="difficulty"
                                    name="difficulty"
                                    value={formData.difficulty}
                                    onChange={handleInputChange}
                                >
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                            </div>

                            <div className="interview-field">
                                <label htmlFor="source">Question Source *</label>

                                <select
                                    id="source"
                                    name="source"
                                    value={formData.source}
                                    onChange={handleInputChange}
                                >
                                    <option value="Manual">Manual</option>
                                    <option value="ChatGPT Generated">
                                        ChatGPT Generated
                                    </option>
                                </select>
                            </div>

                        </div>

                        <div className="interview-field">
                            <label htmlFor="question">Interview Question *</label>

                            <textarea
                                id="question"
                                name="question"
                                value={formData.question}
                                onChange={handleInputChange}
                                placeholder="Enter the interview question..."
                                rows="2"
                                required
                            />
                        </div>

                        <div className="interview-field">
                            <label htmlFor="answer">Answer *</label>

                            <textarea
                                id="answer"
                                name="answer"
                                value={formData.answer}
                                onChange={handleInputChange}
                                placeholder="Write a detailed answer..."
                                rows="5"
                                required
                            />
                        </div>

                        <div className="interview-field">
                            <label htmlFor="code">
                                Code Example (Optional)
                            </label>

                            <textarea
                                id="code"
                                name="code"
                                value={formData.code}
                                onChange={handleInputChange}
                                placeholder="Add a React or JavaScript code example..."
                                rows="6"
                                className="code-input"
                            />
                        </div>

                        {formError && (
                            <p className="interview-form-error">
                                {formError}
                            </p>
                        )}

                        <div className="interview-form-actions">

                            <button
                                type="button"
                                className="cancel-form-btn"
                                onClick={() => setShowForm(false)}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="save-question-btn"
                            >
                                <i className="bi bi-check-lg"></i>

                                {editingId
                                    ? "Update Question"
                                    : "Save Question"}
                            </button>

                        </div>

                    </form>

                </div>
            )}

            {showImport && (
                <div className="interview-form-card">

                    <div className="interview-form-heading">
                        <div>
                            <h2>Import Interview Questions</h2>
                            <p>
                                Paste the JSON generated by ChatGPT to
                                import multiple questions at once.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="close-form-btn"
                            onClick={() => setShowImport(false)}
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>

                    <div className="interview-field">

                        <label htmlFor="import-json">
                            Generated JSON *
                        </label>

                        <textarea
                            id="import-json"
                            value={importText}
                            onChange={(event) =>
                                setImportText(event.target.value)
                            }
                            placeholder='Paste your JSON array here...'
                            rows="12"
                            className="code-input"
                        />

                    </div>

                    {importError && (
                        <p className="interview-form-error">
                            {importError}
                        </p>
                    )}

                    <div className="interview-form-actions">

                        <button
                            type="button"
                            className="cancel-form-btn"
                            onClick={() => {
                                setShowImport(false);
                                setImportText("");
                                setImportError("");
                            }}
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            className="save-question-btn"
                            onClick={handleImportQuestions}
                            disabled={!importText.trim()}
                        >
                            <i className="bi bi-upload"></i>
                            Import Questions
                        </button>

                    </div>

                </div>
            )}

            {/* Filters */}
            <div className="interview-filter-section">

                <div className="interview-search">
                    <i className="bi bi-search"></i>

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                        placeholder="Search questions, answers or code..."
                    />

                    {searchTerm && (
                        <button
                            type="button"
                            onClick={() => setSearchTerm("")}
                        >
                            <i className="bi bi-x-circle"></i>
                        </button>
                    )}
                </div>

                <div className="interview-filter-controls">

                    <select
                        value={selectedTopic}
                        onChange={(event) =>
                            setSelectedTopic(event.target.value)
                        }
                    >
                        <option>All Topics</option>

                        {topics.map((topic) => (
                            <option key={topic} value={topic}>
                                {topic}
                            </option>
                        ))}
                    </select>

                    <select
                        value={selectedDifficulty}
                        onChange={(event) =>
                            setSelectedDifficulty(event.target.value)
                        }
                    >
                        <option>All Levels</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>

                    <button
                        type="button"
                        className="reset-filter-btn"
                        onClick={handleResetFilters}
                    >
                        Reset
                    </button>

                </div>

            </div>

            {/* Question List */}
            <div className="interview-list-heading">

                <div>
                    <h2>My Question Library</h2>
                    <p>
                        Showing {filteredQuestions.length} of {questions.length} questions
                    </p>
                </div>

            </div>

            <div className="interview-question-list">

                {filteredQuestions.length > 0 ? (

                    filteredQuestions.map((question) => (

                        <InterviewQuestionCard
                            key={question.id}
                            question={question}
                            onEdit={openEditForm}
                            onDelete={handleDeleteQuestion}
                            onToggleReviewed={handleToggleReviewed}
                        />

                    ))

                ) : (

                    <div className="interview-empty-state">

                        <i className="bi bi-journal-x"></i>

                        <h3>No questions found</h3>

                        <p>
                            Try changing your search or filters,
                            or add a new interview question.
                        </p>

                        <button
                            type="button"
                            onClick={openAddForm}
                        >
                            Add Your First Question
                        </button>

                    </div>

                )}

            </div>

        </div>

        
    );
}

export default InterviewQuestionsPage;