document.addEventListener('DOMContentLoaded', () => {
    let currentPlatform = 'all';
    let currentTimeFrame = '7days';

    // --- Persistence: Theme Initialization ---
    const themeToggle = document.getElementById('theme-toggle');
    const isDarkPreferred = localStorage.getItem('theme') === 'dark';

    const setTheme = (isDark) => {
        document.body.classList.toggle('dark-mode', isDark);
        themeToggle.textContent = isDark ? '🌙 Dark Mode' : '☀️ Light Mode';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    // Apply saved theme on load
    setTheme(isDarkPreferred);

    // --- Core Render Orchestrator ---
    const renderAll = (platform, timeFrame) => {
        // Accesses the deeply nested data structure: mockData[7days/30days][all/twitter]
        const data = mockData[timeFrame][platform];
        if (!data) return;

        KPI_RENDERER.render(data);
        // Only use the last 7 points of the trend data for the 7-day chart view
        CHART_MODULE.renderBarChart(data.trend.slice(-7), 'reach-chart');
        CHART_MODULE.renderDonutChart(data.sentiment, 'sentiment-chart-container');
    };

    // --- Event Listeners ---
    
    // A. Platform Filtering (remains the same as previous)
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // ... (Button logic to set currentPlatform) ...
            renderAll(currentPlatform, currentTimeFrame);
        });
    });

    // B. Date Range Filtering (NEW)
    document.getElementById('date-range-filter').addEventListener('change', function() {
        currentTimeFrame = this.value;
        renderAll(currentPlatform, currentTimeFrame);
    });

    // C. Theme Toggle (UPDATED)
    themeToggle.addEventListener('click', () => {
        const isCurrentlyDark = document.body.classList.contains('dark-mode');
        setTheme(!isCurrentlyDark);
    });

    // --- Initial Load ---
    renderAll(currentPlatform, currentTimeFrame); 
});
