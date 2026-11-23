
import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

function DebounceExample() {
    const [search, setSearch] = useState("");

    const [searchCount, setSearchCount] = useState(0);

    const debouncedSearch = useDebounce(search, 600);

    useEffect(() => {
        if (debouncedSearch.trim()) {
            console.log("Search executed:", debouncedSearch);

            setSearchCount(prev => prev + 1);
        }
    }, [debouncedSearch]);

    return (
        <div className="perf-demo">

            <div className="perf-demo-header">
                <span className="perf-icon purple">🔍</span>

                <div>
                    <h3>Debounced Search</h3>
                    <p>Search after the user stops typing.</p>
                </div>
            </div>

            <input
                type="text"
                className="perf-search-input"
                placeholder="Type something to search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <div className="perf-search-stats">
                <div>
                    <span>Characters Typed</span>
                    <h2>{search.length}</h2>
                </div>

                <div>
                    <span>Search Executions</span>
                    <h2>{searchCount}</h2>
                </div>
            </div>

            <div className="perf-search-result">
                <span>Debounced Search Value</span>

                <h3>
                    {debouncedSearch || "Waiting for input..."}
                </h3>
            </div>

            <div className="perf-info">
                <strong>Try this:</strong>
                <p>
                    Type continuously. The search value updates
                    only after 600 milliseconds without typing.
                </p>
                <p>
                    In a real application, you can use this value
                    to trigger an API request.
                </p>
            </div>

        </div>
    );
}

export default DebounceExample;
