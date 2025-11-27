// Data organized by time period (7days or 30days)
const mockData = {
    // ------------------- LAST 7 DAYS DATA SET -------------------
    "7days": {
        all: {
            totalReach: 125500,
            engagementRate: 4.25,
            sentimentScore: 78,
            totalPosts: 45,
            change: { reach: 12.5, engagement: -0.5, sentiment: 2, posts: 5 }, 
            trend: [10000, 12500, 11000, 15000, 13000, 18000, 20000], // 7 points
            sentiment: { positive: 65, neutral: 25, negative: 10 }
        },
        // ... (Include twitter, instagram, facebook objects here)
    },
    // ------------------- LAST 30 DAYS DATA SET -------------------
    "30days": {
        all: {
            totalReach: 480000,
            engagementRate: 3.90,
            sentimentScore: 75,
            totalPosts: 180,
            change: { reach: 5.2, engagement: 0.1, sentiment: -1, posts: 20 }, 
            trend: [40000, 50000, 45000, 60000, 55000, 65000, 70000], // Only using last 7 points for the 7-day chart visualization
            sentiment: { positive: 62, neutral: 30, negative: 8 }
        },
        // ... (Include twitter, instagram, facebook objects here)
    }
};

// ... (formatNumber function remains the same) ...
