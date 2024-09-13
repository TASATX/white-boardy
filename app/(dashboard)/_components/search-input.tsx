'use client';


import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";


    
const useDebouncedValue = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
       
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
  
    return debouncedValue;
  };
  
  const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState('');
    const debouncedValue = useDebouncedValue(value, 500); 
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
    };
  
    useEffect(() => {
      if (debouncedValue) {
        const params = new URLSearchParams();
  
        if (debouncedValue.trim()) {
          params.set('search', debouncedValue);
        }
  
        const url = `/?${params.toString()}`; 
        router.push(url);
      }
    }, [debouncedValue, router]);
    

    return (
        <div className="w-full relative ">
            < Search 
            className="absolute top-1/2 left-3 transform -translate-y-1/2
            text-muted-foreground h-4 w-4"
            />
            <Input 
            className="w-full max-w-[516] pl-9"
            placeholder="Search boards"
            onChange={handleChange}
            value={value}
            />
        </div>
    )
}


export default SearchInput;