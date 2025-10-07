import { auth } from "@/lib/better-auth/auth";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        console.log('Testing auth instance...');
        console.log('Auth object:', typeof auth);
        console.log('Auth api:', typeof auth.api);
        console.log('Auth handler:', typeof auth.handler);
        
        return NextResponse.json({ 
            success: true, 
            message: 'Auth instance loaded successfully',
            hasApi: !!auth.api,
            hasHandler: !!auth.handler
        });
    } catch (error) {
        console.error('Auth test failed:', error);
        return NextResponse.json({ 
            success: false, 
            error: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}