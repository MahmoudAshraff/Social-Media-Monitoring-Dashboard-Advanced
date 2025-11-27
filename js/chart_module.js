// Dedicated module for handling all chart visualizations (Trend Chart and Donut Chart)
const CHART_MODULE = (() => {
    // Renders the weekly reach bar chart
    const renderBarChart = (trendData, containerId) => {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; 
        const maxVal = Math.max(...trendData); 

        trendData.forEach(value => {
            const bar = document.createElement('div');
            bar.classList.add('bar');
            const heightPercent = (value / maxVal) * 100;
            bar.style.height = `${heightPercent}%`;
            bar.setAttribute('title', `Reach: ${formatNumber(value)}`); 
            container.appendChild(bar);
        });
    };

    // Renders the sentiment donut chart using CSS conic-gradient
    const renderDonutChart = (sentimentData, containerId) => {
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        const pos = sentimentData.positive;
        const neu = sentimentData.neutral;
        const neg = sentimentData.negative;

        // Calculate gradient stops
        const neutralStart = pos;
        const negativeStart = pos + neu;

        // Create the CSS string for the conic gradient
        const gradient = `conic-gradient(
            var(--positive) 0% ${pos}%,
            var(--neutral) ${neutralStart}% ${negativeStart}%,
            var(--negative) ${negativeStart}% 100%
        )`;

        const chartHTML = `
            <div class="donut-chart" style="background: ${gradient};"></div>
            <ul class="donut-legend">
                <li class="legend-item"><span class="legend-color" style="background-color: var(--positive)"></span> Positive: ${pos}%</li>
                <li class="legend-item"><span class="legend-color" style="background-color: var(--neutral)"></span> Neutral: ${neu}%</li>
                <li class="legend-item"><span class="legend-color" style="background-color: var(--negative)"></span> Negative: ${neg}%</li>
            </ul>
        `;
        container.innerHTML = chartHTML;
    };

    return { 
        renderBarChart, 
        renderDonutChart 
    };
})();
