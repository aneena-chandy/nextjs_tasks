function ExampleCard({ title, description, children }) {
    return (
        <div className="example-card">

            <div className="example-card-heading">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="example-demo">
                {children}
            </div>

        </div>
    );
}

export default ExampleCard;