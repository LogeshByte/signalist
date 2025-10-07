import { betterAuth } from "better-auth";
import { mongodbAdapter} from "better-auth/adapters/mongodb";
import { connectToDatabase} from "@/database/mongoose";
import { nextCookies} from "better-auth/next-js";

// Initialize auth synchronously with a promise that resolves to the auth instance
const initAuth = async () => {
    console.log('Initializing better-auth...');
    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;

    if(!db) throw new Error('MongoDB connection not found');

    console.log('Creating better-auth instance with config:', {
        secret: process.env.BETTER_AUTH_SECRET ? 'SET' : 'NOT SET',
        baseURL: process.env.BETTER_AUTH_URL,
        dbConnected: !!db
    });

    const authInstance = betterAuth({
        database: mongodbAdapter(db as any),
        secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_URL,
        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 8,
            maxPasswordLength: 128,
            autoSignIn: true,
        },
        plugins: [nextCookies()],
    });

    console.log('Better-auth instance created successfully');
    return authInstance;
};

export const auth = await initAuth();
