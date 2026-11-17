function ErrorMessage({ message, onRetry }) {

    return (
        <div className="error-container">

            <h3>Something went wrong</h3>

            <p>{message}</p>

            <button onClick={onRetry}>
                Try Again
            </button>

        </div>
    );
}

export default ErrorMessage;