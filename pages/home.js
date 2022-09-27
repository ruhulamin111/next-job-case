import Image from "next/image"
import HeaderLink from "../components/HeaderLink"
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

function Home() {

    return (
        <div className="">
            <header className=" flex justify-between w-11/12 mx-auto items-center py-4">
                <div className="relative w-36 h-16">
                    <Image src="https://i.ibb.co/ZGBBNkp/New-Project-1.jpg" layout="fill" objectFit="contain" alt="" />
                </div>
                <div className="flex items-center sm:divide-x divide-gray-300">
                    <div className="hidden sm:flex space-x-8 pr-4">
                        <HeaderLink Icon={ExploreIcon} text="Discover" />
                        <HeaderLink Icon={GroupIcon} text="People" />
                        <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
                        <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Home