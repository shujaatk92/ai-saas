"use client"

import { Divide, Menu } from "lucide-react";
import { Button } from "./ui/button";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

const MobileMenu = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[]);
    if(!isMounted){
        return null;
    }
    return ( 
        <Sheet>
            <SheetTrigger>
            <div className="md:hidden hover:bg-accent hover:text-accent-foreground h-10 w-10 transition inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                <Menu />
            </div>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
        
     );
}
 
export default MobileMenu;
