
import { useState, memo } from "react";

const initialUsers = [
    { id: 1, name: "Akhil Thomas", department: "Development", role: "Frontend Developer" },
    { id: 2, name: "Anjali Joseph", department: "Design", role: "UI Designer" },
    { id: 3, name: "Rahul Nair", department: "Development", role: "Backend Developer" },
    { id: 4, name: "Meera Mathew", department: "Testing", role: "QA Engineer" },
    { id: 5, name: "Arun Kumar", department: "Development", role: "React Developer" },
    { id: 6, name: "Sneha George", department: "Design", role: "UX Designer" }
];

const UserCard = memo(function UserCard({ user }) {
    console.log("User card rendered:", user.name);

    return (
        <div className="perf-directory-card">
            <div className="perf-directory-avatar">
                {user.name.charAt(0)}
            </div>

            <div className="perf-directory-details">
                <h3>{user.name}</h3>
                <p>{user.role}</p>
                <span>{user.department}</span>
            </div>
        </div>
    );
});

function UserDirectoryTask() {
    const [users] = useState(initialUsers);
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All");
    const [count, setCount] = useState(0);

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesDepartment =
            department === "All" || user.department === department;

        return matchesSearch && matchesDepartment;
    });

    return (
        <div className="perf-demo">

            <div className="perf-task-heading">
                <div>
                    <h3>👥 User Directory</h3>
                    <p>Manage and search your team members.</p>
                </div>

                <span className="perf-task-count">
                    {filteredUsers.length} Users
                </span>
            </div>

            <div className="perf-filter-row">

                <input
                    type="text"
                    className="perf-search-input"
                    placeholder="Search by name..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                <select
                    className="perf-select"
                    value={department}
                    onChange={e => setDepartment(e.target.value)}
                >
                    <option value="All">All Departments</option>
                    <option value="Development">Development</option>
                    <option value="Design">Design</option>
                    <option value="Testing">Testing</option>
                </select>

            </div>

            <div className="perf-directory-grid">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))
                ) : (
                    <div className="perf-empty">
                        No users found.
                    </div>
                )}
            </div>

            <div className="perf-actions">
                <button
                    className="perf-secondary-btn"
                    onClick={() => setCount(prev => prev + 1)}
                >
                    Unrelated Counter: {count}
                </button>
            </div>

            <div className="perf-info">
                <strong>Optimization Challenge:</strong>
                <p>
                    UserCard uses React.memo. Change the unrelated counter
                    and check the console. Existing user cards should not
                    re-render because their props have not changed.
                </p>
                <p>
                    Search and filtering still cause the matching list
                    to update. Consider useMemo if profiling shows that
                    filtering a much larger dataset is expensive.
                </p>
            </div>

        </div>
    );
}

export default UserDirectoryTask;
