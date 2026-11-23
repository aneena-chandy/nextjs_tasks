
import { useState, useCallback, memo } from "react";

const ActionButton = memo(function ActionButton({ onAction }) {
    console.log("ActionButton rendered");

    return (
        <button
            className="perf-primary-btn"
            onClick={onAction}
        >
            Click Child Button
        </button>
    );
});

function UseCallbackExample() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState(0);

    const handleAction = useCallback(() => {
        alert("Child button clicked!");
    }, []);

    return (
        <div className="perf-demo">

            <div className="perf-demo-header">
                <span className="perf-icon orange">⚡</span>

                <div>
                    <h3>Function Reference Optimization</h3>
                    <p>Prevent unnecessary child rendering.</p>
                </div>
            </div>

            <div className="perf-counter-grid">

                <div className="perf-counter-box">
                    <span>Parent Counter</span>
                    <h2>{count}</h2>

                    <button
                        className="perf-primary-btn"
                        onClick={() => setCount(prev => prev + 1)}
                    >
                        Increase
                    </button>
                </div>

                <div className="perf-counter-box">
                    <span>Another State</span>
                    <h2>{message}</h2>

                    <button
                        className="perf-secondary-btn"
                        onClick={() => setMessage(prev => prev + 1)}
                    >
                        Update State
                    </button>
                </div>

            </div>

            <div className="perf-result-box">
                <h3>Memoized Child</h3>

                <ActionButton onAction={handleAction} />
            </div>

            <div className="perf-info">
                <strong>Try this:</strong>
                <p>
                    Update either parent counter. The ActionButton
                    does not render again because useCallback preserves
                    its function reference.
                </p>
                <p>Check the browser console.</p>
            </div>

        </div>
    );
}

export default UseCallbackExample;
