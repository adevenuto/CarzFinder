import Image from "next/image";
import Link from "next/link";
import CustomButton from "./ui/CustomButton";


export default function Header() {
    return (
        <header className="absolute z-10 w-full">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
                <Link href="/" className="flex items-center justify-center">
                    <Image src="/logo.svg" alt="brand logo" width={155} height={45} className="object-contain"/>
                </Link>
                <CustomButton
                    title="Sign In"
                    btnType={"button"}
                    btnStyles="text-blue-500 font-bold shadow-md rounded-full bg-white min-w-[130px] border-2 border-blue-500"
                ></CustomButton>
            </nav>
        </header>
    )
}
