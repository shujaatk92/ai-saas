"use client"
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
// const monsterrat = Montserrat({weight: "600", subsets: ["latin"]})

    return ( 
        <div className="flex flex-col bg-[#111827] text-white space-y-4 py-4 h-full">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14" >
                    <div className="relative h-8 w-8 mr-4">
                        <Image 
                        fill
                        src="/logo.png"
                        alt="logo"
                        />
                    </div>
                </Link>
            </div>
        </div>
     );
}
 
export default Sidebar;
