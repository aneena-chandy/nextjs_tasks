
function LazyLoadedPanel() {
    console.log("Lazy component loaded!");

    return (
        <div className="perf-lazy-panel">
            <div className="perf-lazy-icon">📊</div>

            <h3>Analytics Module Loaded!</h3>

            <p>
                This component was dynamically imported
                only when you clicked the load button.
            </p>

            <div className="perf-lazy-details">
                <span>✓ Dynamic Import</span>
                <span>✓ Code Splitting</span>
                <span>✓ On-demand Loading</span>
            </div>
        </div>
    );
}

export default LazyLoadedPanel;
