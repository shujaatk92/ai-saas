"use client"

import Image from "next/image"
import { EmptyObject } from "react-hook-form";
interface EmptyProps {
    label: string;
}
export const Empty = ({label} : EmptyProps) =>{
    return(
        <div className="h-full p-10 flex flex-col items-center justify-center">
            <div className="relative h-64 w-64">
                <Image 
                src="/empty.png"
                alt="empty"
                width={256}
                height={256}
                />
            </div>
            <p className="text-muted-foreground text-sm text-center">
                {label}
            </p>
        </div>
    )
}