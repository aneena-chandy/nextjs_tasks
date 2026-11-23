
import { useState, useMemo } from "react";

const users = Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`
}));

function LargeListExample() {
    const [mode, setMode] = useState("window");
    const [start, setStart] = useState(0);

    const visibleUsers = useMemo(() => {
        return users.slice(start, start + 20);
    }, [start]);

    const displayedUsers =
        mode === "all" ? users : visibleUsers;

    return (
        <div className="perf-demo">

            <div className="perf-demo-header">
                <span className="perf-icon blue">📋</span>

                <div>
                    <h3>Large User List</h3>
                    <p>Compare the number of rendered records.</p>
                </div>
            </div>

            <div className="perf-list-controls">

                <button
                    className={mode === "all" ? "perf-primary-btn" : "perf-secondary-btn"}
                    onClick={() => setMode("all")}
                >
                    Render All 1000
                </button>

                <button
                    className={mode === "window" ? "perf-primary-btn" : "perf-secondary-btn"}
                    onClick={() => setMode("window")}
                >
                    Render 20 Only
                </button>

            </div>

            <div className="perf-list-stats">
                <div>
                    <span>Total Records</span>
                    <h2>1000</h2>
                </div>

                <div>
                    <span>Rendered Records</span>
                    <h2>{displayedUsers.length}</h2>
                </div>
            </div>

            {mode === "window" && (
                <div className="perf-pagination">
                    <button
                        className="perf-secondary-btn"
                        disabled={start === 0}
                        onClick={() => setStart(prev => Math.max(0, prev - 20))}
                    >
                        ← Previous
                    </button>

                    <span>
                        Showing {start + 1} - {Math.min(start + 20, 1000)}
                    </span>

                    <button
                        className="perf-secondary-btn"
                        disabled={start >= 980}
                        onClick={() => setStart(prev => Math.min(980, prev + 20))}
                    >
                        Next →
                    </button>
                </div>
            )}

            <div className="perf-large-list">
                {displayedUsers.map(user => (
                    <div className="perf-large-list-item" key={user.id}>
                        <div className="perf-directory-avatar">
                            {user.id}
                        </div>

                        <div>
                            <strong>{user.name}</strong>
                            <span>{user.email}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="perf-info">
                <strong>What did you learn?</strong>
                <p>
                    Rendering 20 records instead of 1000 reduces the
                    number of DOM elements created.
                </p>
                <p>
                    This is a simple windowed rendering demonstration,
                    not full scroll-based virtualization. For production
                    applications, explore react-window or another
                    virtualization library.
                </p>
            </div>

        </div>
    );
}

export default LargeListExample;
