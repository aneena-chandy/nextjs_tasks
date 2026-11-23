//Example 01 – React.memo()
import { useState, memo } from "react";

const UserProfile = memo(function UserProfile({ name, role }) {
    console.log("UserProfile rendered");

    return (
        <div className="perf-user-card">
            <div className="perf-avatar">👩‍💻</div>

            <div>
                <h3>{name}</h3>
                <p>{role}</p>
                <span className="perf-status">Active Developer</span>
            </div>
        </div>
    );
});

function MemoExample() {
    const [count, setCount] = useState(0);

    console.log("Parent component rendered");

    return (
        <div className="perf-demo">
            <div className="perf-demo-header">
                <span className="perf-icon purple">🔄</span>
                <div>
                    <h3>Component Rendering Demo</h3>
                    <p>Observe the child component rendering behavior.</p>
                </div>
            </div>

            <div className="perf-counter-box">
                <span>Parent Counter</span>
                <h2>{count}</h2>

                <button
                    className="perf-primary-btn"
                    onClick={() => setCount(prev => prev + 1)}
                >
                    + Increase Counter
                </button>
            </div>

            <div className="perf-result-box">
                <div className="perf-result-heading">
                    <span>👤</span>
                    <strong>Memoized Child Component</strong>
                    <span className="perf-optimized">Optimized</span>
                </div>

                <UserProfile
                    name="Aneena"
                    role="Senior Software Engineer"
                />
            </div>

            <div className="perf-info">
                <strong>Try this:</strong>
                <p>
                    Increase the counter and check the browser console.
                    The parent renders again, but UserProfile does not
                    render again because its props remain unchanged.
                </p>
            </div>
        </div>
    );
}

export default MemoExample;
