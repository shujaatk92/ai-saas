"use client"
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const monsterrat = Montserrat({
    weight: "600", 
    subsets: ["latin"]
});

const routes = [
    {
        label: "Dashbaord",
        href: "/dashboard",
        icon: LayoutDashboard,
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        href: "/conversation",
        icon: MessageSquare,
        color: "text-violet-500"
    },
    {
        label: "Image Generator",
        href: "/image",
        icon: ImageIcon,
        color: "text-pink-700"
    },
    {
        label: "Video Generator",
        href: "/video",
        icon: VideoIcon,
        color: "text-orange-700"
    },
    {
        label: "Music Generator",
        href: "/music",
        icon: Music,
        color: "text-emerald-500"
    },
    {
        label: "Code Generator",
        href: "/code",
        icon: Code,
        color: "text-green-700"
    },
    {
        label: "Settings",
        href: "/settings",
        icon: Settings
    },
]

const Sidebar = () => {
    const pathname = usePathname();


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
                    <h1 className={cn("text-2xl font-bold", monsterrat.className)}>
                        Genius
                    </h1>
                </Link>
                <div className="space-y-1">
                {
                    routes.map((route) => (
                        <Link href={route.href} 
                        key={route.href} 
                        className={cn("flex p-3 text-sm transition group hover:text-white hover:bg-white/10 rounded-lg justify-start cursor-pointer font-medium", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("w-5 h-5 mr-3", route.color)}/>
                                {route.label}
                            </div>
                            
                        </Link>
                    ))
                }
                </div>
                
            </div>
        </div>
     );
}
 
export default Sidebar;
