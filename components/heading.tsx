"use client"

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
    title: string;
    descrption: string;
    icon: LucideIcon;
    iconColor?: string;
    bgColor?: string
}

export const Heading = ({
    title,
    descrption,
    icon: Icon,
    iconColor,
    bgColor
}: HeadingProps) => {
    return(
            <div className="flex items-center px-4 lg:px-8 gap-x-3 mb-8">
                <div className={cn("p-2 w-fit rounded-md", bgColor)}>
                    <Icon className={cn("w-8 h-8" , iconColor)} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">
                        {title}
                    </h2>
                    <p className="text-sm text-muted-foreground">{descrption}</p>
                </div>
            </div>
    )
}