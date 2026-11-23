
import { useState, lazy, Suspense } from "react";

const LazyLoadedPanel = lazy(
    () => import("./LazyLoadedPanel")
);

function LazyLoadingExample() {
    const [showPanel, setShowPanel] = useState(false);

    return (
        <div className="perf-demo">

            <div className="perf-demo-header">
                <span className="perf-icon blue">📦</span>

                <div>
                    <h3>Dynamic Component Loading</h3>
                    <p>Load a component only when requested.</p>
                </div>
            </div>

            <div className="perf-lazy-placeholder">

                {!showPanel ? (
                    <>
                        <div className="perf-lazy-icon">📊</div>

                        <h3>Analytics Module</h3>

                        <p>
                            This component has not been rendered yet.
                        </p>
                    </>
                ) : (
                    <Suspense
                        fallback={
                            <div className="perf-loading">
                                <span className="perf-spinner"></span>
                                Loading analytics module...
                            </div>
                        }
                    >
                        <LazyLoadedPanel />
                    </Suspense>
                )}

            </div>

            <button
                className="perf-primary-btn"
                onClick={() => setShowPanel(prev => !prev)}
            >
                {showPanel ? "Hide Module" : "Load Module"}
            </button>

            <div className="perf-info">
                <strong>What happens?</strong>
                <p>
                    React.lazy dynamically imports the component.
                    Suspense displays fallback content while the
                    JavaScript module is loading.
                </p>
                <p>
                    Check the browser Network tab to observe the
                    dynamically loaded JavaScript chunk.
                </p>
            </div>

        </div>
    );
}

export default LazyLoadingExample;
