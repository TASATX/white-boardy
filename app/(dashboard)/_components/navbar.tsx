'use client';

import { Button } from "@/components/ui/button";

export const Navbar  = () => {
    return (
       <div className='flex items-center gap-x-4 p-5 bg-green-500'>
        <div className="hidden lg:flex lg:flex-1 bg-yellow-500">
            { /* TODO : Add Search */ }
            Search
        </div>
           <Button />
       </div>
    );
};
