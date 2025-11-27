// Dedicated module for handling KPI card updates
const KPI_RENDERER = (() => {
    // Helper function to update the change indicator style
    const updateChangeIndicator = (key, changeValue, text) => {
        const element = document.getElementById(`${key}-change`);
        element.textContent = (changeValue > 0 ? '+' : (changeValue < 0 ? '−' : '')) + text;
        
        element.classList.remove('positive', 'negative');
        if (changeValue > 0) {
            element.classList.add('positive');
        } else if (changeValue < 0) {
            element.classList.add('negative');
        }
    };

    const render = (data) => {
        // A. Update KPI Cards
        document.getElementById('total-reach').textContent = formatNumber(data.totalReach);
        document.getElementById('engagement-rate').textContent = `${data.engagementRate.toFixed(2)}%`;
        document.getElementById('sentiment-score').textContent = data.sentimentScore;
        document.getElementById('total-posts').textContent = data.totalPosts;

        // B. Update Change Indicators
        updateChangeIndicator('reach', data.change.reach, formatNumber(Math.abs(data.change.reach)) + '%');
        updateChangeIndicator('engagement', data.change.engagement, `${Math.abs(data.change.engagement).toFixed(2)}%`);
        updateChangeIndicator('sentiment', data.change.sentiment, Math.abs(data.change.sentiment));
        updateChangeIndicator('posts', data.change.posts, Math.abs(data.change.posts));
    };

    return { render };
})();
