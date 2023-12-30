"use client"

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNT } from "@/constants";

interface FreeCountProps {
    apiLimitCount: number;
}

export const FreeCounter = ({apiLimitCount = 0}: FreeCountProps ) => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[]);

    if(!mounted){
        return null;
    }

    return(
        <div className="px-3">
            <Card className="bg-white/10 border-0">
                <CardContent className="py-6">
                    <div className="text-sm text-white text-center mb-4 space-y-2">
                        <p>
                            {apiLimitCount} / {MAX_FREE_COUNT} Free Generations
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}