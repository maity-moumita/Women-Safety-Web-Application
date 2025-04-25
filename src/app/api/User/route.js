// /pages/api/user/[id].js
import connectToDB from "@/lib/dbConnect";
import User from "@/models/User";
export async function GET(req, res) {
    const { id } = req.query;

    await connectToDB();

    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ error: "User not found" });
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ error: "Failed to fetch user data" });
    }
}
