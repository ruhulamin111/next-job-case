import Image from "next/image"

function Home() {
    return (
        <div>
            <header>
                <div className="relative w-36 h-10">
                    <Image src="https://cdn-icons-png.flaticon.com/512/174/174857.png" layout="fill" objectFit="contain" alt="" />
                </div>

            </header>
        </div>
    )
}

export default Home