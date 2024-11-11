import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <section className="flex justify-between pt-6">
      {/* logo */}
      <div className="ml-10 lg:ml-20 uppercase text-2xl lg:text-3xl font-bold">Portfolio</div>
      {/* sm-navbars */}
      <Sheet>
  <SheetTrigger className="ml-44 self-center text-gray-800 ">
    <FiMenu className="text-2xl lg:hidden" />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
        <div className="flex flex-col space-y-10 mt-20 text-[20px] font-bold hover:text-customPurple">
          <Link href="/">Home</Link>      
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#project">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      {/* lg-navbars */}
      <div className="mr-20">
        <ul className="hidden lg:flex gap-x-10 text-xl hover hover:text-gray-500">
            <Link href="/">Home</Link>      
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#project">Projects</Link>
            <Link href="#contact">Contact</Link>
        </ul>
      </div>
    </section>
  );
}
