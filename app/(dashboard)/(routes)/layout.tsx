import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getAliLimitCount } from "@/lib/api-limit";

export default async function DashboardLayout ({children}: {children: React.ReactNode}){

    const apiLimitCount = await getAliLimitCount();
    return(
        <div className="relative h-full">
            <div className="hidden h-full md:flex md:flex-col z-[80] md:fixed bg-gray-900 md:inset-y-0 md:w-72">
                <Sidebar  apiLimitCount={apiLimitCount} />
            </div>
            <main className="md:pl-72" >
                <Navbar />
                {children}
            </main>
        </div>
    )
}
