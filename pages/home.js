import Image from "next/image"
import HeaderLink from "../components/HeaderLink"
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import search from '../images/search.jpg';

function Home() {

    return (
        <div className="space-y-10">
            <header className=" flex justify-between w-11/12 mx-auto items-center py-4 h-20">
                <div className="relative w-36 h-10">
                    <Image src="https://cdn-icons-png.flaticon.com/512/174/174857.png" layout="fill" objectFit="contain" alt="" />
                </div>
                <div className="flex items-center sm:divide-x divide-gray-300">
                    <div className="hidden sm:flex space-x-8 pr-4">
                        <HeaderLink Icon={ExploreIcon} text="Discover" />
                        <HeaderLink Icon={GroupIcon} text="People" />
                        <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
                        <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
                    </div>
                    <div className="pl-4">
                        <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2">Sign in</button>
                    </div>
                </div>
            </header>

            <main className="flex flex-col xl:flex-row max-w-screen-lg  mx-auto h-screen">
                <div className="space-y-6 xl:space-y-10">
                    <h1 className="text-3xl md:text-5xl max-w-xl !leading-snug text-amber-800/80 pl-4 xl:pl-0">Welcome to our professional community</h1>
                    <div className="space-y-4">
                        <div className="intent">
                            <h2 className="text-xl">Search for a job</h2>
                            <ArrowForwardIosRoundedIcon className="text-gray-700" />
                        </div>
                        <div className="intent">
                            <h2 className="text-xl">Find a person you know</h2>
                            <ArrowForwardIosRoundedIcon className="text-gray-700" />
                        </div>
                        <div className="intent">
                            <h2 className="text-xl">Learn a new skill</h2>
                            <ArrowForwardIosRoundedIcon className="text-gray-700" />
                        </div>
                    </div>
                </div>
                <div className="relative xl:absolute w-80 mx-auto h-full object-cover xl:w-[600px] xl:h-[600px] top-20 right-5">
                    <Image src={search} layout="fill" priority alt="" />
                </div>




            </main>
        </div>
    )
}

export default Home