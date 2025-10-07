'use server';

import {auth} from "@/lib/better-auth/auth";
import {inngest} from "@/lib/inngest/client";
import {headers} from "next/headers";

export const signUpWithEmail = async ({ email, password, fullName, country, investmentGoals, riskTolerance, preferredIndustry }: SignUpFormData) => {
    try {
        console.log('=== SIGNUP DEBUG ===');
        console.log('Input data:', { email, fullName, password: password ? '[HIDDEN]' : 'MISSING' });
        console.log('Auth object type:', typeof auth);
        console.log('Auth.api type:', typeof auth?.api);
        console.log('signUpEmail function type:', typeof auth?.api?.signUpEmail);
        
        if (!auth || !auth.api || !auth.api.signUpEmail) {
            throw new Error('Auth instance not properly initialized');
        }

        console.log('Calling auth.api.signUpEmail...');
        const response = await auth.api.signUpEmail({ 
            body: { email, password, name: fullName },
            headers: await headers()
        });
        
        console.log('Sign up response received:', response);

        if(response) {
            console.log('Sending Inngest event...');
            try {
                await inngest.send({
                    name: 'app/user.created',
                    data: { email, name: fullName, country, investmentGoals, riskTolerance, preferredIndustry }
                });
                console.log('Inngest event sent successfully');
            } catch (inngestError) {
                console.error('Inngest error (non-blocking):', inngestError);
                // Don't fail the signup if Inngest fails
            }
        }

        console.log('=== SIGNUP SUCCESS ===');
        return { success: true, data: response };
    } catch (e: any) {
        console.error('=== SIGNUP FAILED ===');
        console.error('Error:', e);
        console.error('Error message:', e?.message);
        console.error('Error status:', e?.status);
        console.error('Error cause:', e?.cause);
        
        // Provide more specific error messages
        let errorMessage = 'Sign up failed';
        if (e?.message) {
            if (e.message.includes('email')) {
                errorMessage = 'Email is already in use or invalid';
            } else if (e.message.includes('password')) {
                errorMessage = 'Password does not meet requirements';
            } else if (e.message.includes('duplicate')) {
                errorMessage = 'An account with this email already exists';
            } else if (e.message.includes('fetch')) {
                errorMessage = 'Network error - please check your connection';
            } else if (e.message.includes('Auth instance')) {
                errorMessage = 'Authentication system not ready - please try again';
            } else {
                errorMessage = e.message;
            }
        }
        
        return { success: false, error: errorMessage };
    }
}

export const signInWithEmail = async ({ email, password }: SignInFormData) => {
    try {
        const response = await auth.api.signInEmail({ body: { email, password } })

        return { success: true, data: response }
    } catch (e) {
        console.log('Sign in failed', e)
        return { success: false, error: 'Sign in failed' }
    }
}

export const signOut = async () => {
    try {
        await auth.api.signOut({ headers: await headers() });
    } catch (e) {
        console.log('Sign out failed', e)
        return { success: false, error: 'Sign out failed' }
    }
}
