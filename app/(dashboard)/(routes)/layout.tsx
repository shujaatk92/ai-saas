import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

export default function DashboardLayout ({children}: {children: React.ReactNode}){
    return(
        <div className="relative h-full">
            <div className="hidden h-full md:flex md:flex-col z-[80] md:fixed bg-gray-900 md:inset-y-0 md:w-72">
                <Sidebar />
            </div>
            <main className="md:pl-72" >
                <Navbar />
                {children}
            </main>
        </div>
    )
}
