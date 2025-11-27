// Mock data for the Social Media Dashboard
// 'all' represents combined metrics
// 'trend' data is for the simple bar chart (7 days)

const mockData = {
    // Combined Metrics
    all: {
        totalReach: 125500,
        engagementRate: 4.25,
        sentimentScore: 78,
        totalPosts: 45,
        // Mock change from previous period
        change: { reach: 12.5, engagement: -0.5, sentiment: 2, posts: 5 }, 
        trend: [10000, 12500, 11000, 15000, 13000, 18000, 20000], // Last 7 days reach
    },
    // Platform-Specific Metrics
    twitter: {
        totalReach: 50000,
        engagementRate: 3.5,
        sentimentScore: 65,
        totalPosts: 30,
        change: { reach: 8.0, engagement: 0.2, sentiment: -5, posts: 2 },
        trend: [4000, 5500, 4500, 7000, 6500, 8000, 9500],
    },
    instagram: {
        totalReach: 60000,
        engagementRate: 5.5,
        sentimentScore: 85,
        totalPosts: 10,
        change: { reach: 20.0, engagement: 1.0, sentiment: 8, posts: 1 },
        trend: [5000, 6000, 5500, 8000, 7500, 9000, 10500],
    },
    facebook: {
        totalReach: 15500,
        engagementRate: 2.8,
        sentimentScore: 82,
        totalPosts: 5,
        change: { reach: -3.0, engagement: -0.1, sentiment: 1, posts: 0 },
        trend: [1000, 1000, 1000, 1500, 1000, 1000, 1000],
    }
};

// Function to format numbers for better readability (e.g., 125500 -> 125.5K)
function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}
