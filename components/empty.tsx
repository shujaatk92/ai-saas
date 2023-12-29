"use client"

import Image from "next/image"

export const Empty = () =>{
    return(
        <div className="h-full p-20 flex felx-col items-center justify-center">
            <div className="relative h-72 w-72">
                <Image 
                src=""
                alt="empty"
                width={100}
                height={100}
                />
            </div>
        </div>
    )
}