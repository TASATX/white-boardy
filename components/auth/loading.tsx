import Image from "next/image";

export const Loading =() => {
    return (
        <div className="flex flex-col h-full w-full 
        justify-center items-center">
            <Image  
            src='/logo.png'
            alt="Logo"
            width={120}
            height={120}
            className="animate-pulse duration-1200 filter invert"
            />
        </div>
    )
}