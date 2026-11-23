
import TopicPageLayout from "./TopicPageLayout";
import ExampleCard from "./ExampleCard";

import MemoExample from "../topics/performance-optimization/MemoExample";
import UseMemoExample from "../topics/performance-optimization/UseMemoExample";
import UseCallbackExample from "../topics/performance-optimization/UseCallbackExample";
import LazyLoadingExample from "../topics/performance-optimization/LazyLoadingExample";
import DebounceExample from "../topics/performance-optimization/DebounceExample";

import UserDirectoryTask from "../topics/performance-optimization/UserDirectoryTask";
import ExpenseAnalyticsTask from "../topics/performance-optimization/ExpenseAnalyticsTask";
import ProductSearchTask from "../topics/performance-optimization/ProductSearchTask";
import LargeListExample from "../topics/performance-optimization/LargeListExample";

import "../styles/performance-optimization/performance-optimization.css";

function PerformanceOptimizationPage() {
    return (
        <TopicPageLayout
            number="12"
            title="React Performance Optimization"
            description="Learn to improve React application performance through memoization, optimized rendering, lazy loading and efficient search."
        >

            <div className="performance-intro">
                <div className="performance-intro-icon">🚀</div>

                <div>
                    <h2>Why Performance Optimization?</h2>

                    <p>
                        Performance optimization helps React applications
                        render efficiently, reduce unnecessary calculations,
                        improve loading time and provide a smoother user experience.
                    </p>

                    <div className="performance-tags">
                        <span>React.memo()</span>
                        <span>useMemo()</span>
                        <span>useCallback()</span>
                        <span>Lazy Loading</span>
                        <span>Debouncing</span>
                    </div>
                </div>
            </div>

            <div className="performance-section-heading">
                <span>01 — CORE CONCEPTS</span>
                <h2>Learn Performance Optimization</h2>
                <p>Understand each concept with practical examples.</p>
            </div>

            <ExampleCard
                title="Example 01 - React.memo()"
                description="Prevent unnecessary child component re-renders when props remain unchanged."
            >
                <MemoExample />
            </ExampleCard>

            <ExampleCard
                title="Example 02 - useMemo()"
                description="Memoize expensive calculations and reuse previously calculated values."
            >
                <UseMemoExample />
            </ExampleCard>

            <ExampleCard
                title="Example 03 - useCallback()"
                description="Preserve function references and optimize memoized child components."
            >
                <UseCallbackExample />
            </ExampleCard>

            <ExampleCard
                title="Example 04 - Lazy Loading"
                description="Load components only when they are required using React.lazy() and Suspense."
            >
                <LazyLoadingExample />
            </ExampleCard>

            <ExampleCard
                title="Example 05 - Debouncing"
                description="Reduce unnecessary search operations by waiting until the user stops typing."
            >
                <DebounceExample />
            </ExampleCard>

            <div className="performance-section-heading">
                <span>02 — PRACTICAL EXERCISES</span>
                <h2>Apply What You Learned</h2>
                <p>Practice performance optimization through real-world applications.</p>
            </div>

            <ExampleCard
                title="Task 01 - Optimized User Directory"
                description="Create a searchable user directory and prevent unnecessary user card rendering."
            >
                <UserDirectoryTask />
            </ExampleCard>

            <ExampleCard
                title="Task 02 - Expense Analytics Dashboard"
                description="Calculate category-wise expenses, filter transactions and optimize calculations."
            >
                <ExpenseAnalyticsTask />
            </ExampleCard>

            <ExampleCard
                title="Task 03 - Product Search Application"
                description="Implement debounced product searching with optimized components."
            >
                <ProductSearchTask />
            </ExampleCard>

            <ExampleCard
                title="Task 04 - Large List Rendering"
                description="Explore the performance difference between rendering all records and rendering a smaller visible list."
            >
                <LargeListExample />
            </ExampleCard>

            <div className="performance-completion">
                <span>🎯</span>
                <div>
                    <h3>Performance Optimization Complete!</h3>
                    <p>
                        You have practiced memoization, rendering optimization,
                        lazy loading, debouncing and large list handling.
                    </p>
                </div>
            </div>

        </TopicPageLayout>
    );
}

export default PerformanceOptimizationPage;
