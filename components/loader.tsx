"use client"

import Image from "next/image"

export const Loader = () => {
    return(
        <div className="flex flex-col items-center justify-center gap-y-4 h-full">
            <div className="w-10 h-10 ralative animate-spin">
                <Image
                src="/logo.png"
                alt="logo"
                width={100} 
                height={100} 
                />
            </div>
            <p className="text-sm text-muted-foreground">
                Genius is thinking...
            </p>
        </div>
    )
}