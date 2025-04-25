// /pages/api/app-info.js
export async function GET(req, res) {
    try {
        // Mocked app info, can be extended to fetch from DB or environment variables
        const appInfo = {
            lastUpdated: new Date(),
        };
        return res.status(200).json(appInfo);
    } catch (err) {
        return res.status(500).json({ error: "Failed to fetch app info" });
    }
}
