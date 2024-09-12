'use client';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from 'convex/react';
import { Loading } from "@/components/auth/loading";

const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
   } 
   

interface ConvexClientProviderProps {
    children: React.ReactNode;
};

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl)

export const ConvexClientProvider = ({
    children,
}: ConvexClientProviderProps) => {

        return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
                <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                        <AuthLoading>
                            <Loading />
                        </AuthLoading>
                        <Authenticated>
                            {children}    
                        </Authenticated>
                </ConvexProviderWithClerk>
            </ClerkProvider> 
      

    
    /*        ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
          <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
          </ClerkProvider>
        </React.StrictMode>,
      ) */
    ); 
};
    
