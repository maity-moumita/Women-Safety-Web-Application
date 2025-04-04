import mongoose from "mongoose";

const connectToDB = async () => {
    if (mongoose.connection.readyState === 1) {
        console.log("✅ Already connected to MongoDB");
        return;
    }

    try {
        await mongoose.connect('mongodb+srv://MoumitaMaity:moumitamaity156982155@cluster0.w27bf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            dbName: "AlertAngel",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, // 10 seconds
        });

        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        throw new Error("Failed to connect to MongoDB");
    }
};

export default connectToDB;
