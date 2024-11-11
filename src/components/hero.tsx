"use client"
import Image from "next/image"
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Link from "next/link";


export default function Hero(){
    const typedElement = useRef(null); // Reference for the typing effect

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: ["Frontend Developer", "Web Designer", "Creative Coder"], // Add more titles as needed
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return(
        <section className="h-[600px] lg:h-[600px]">
                <main className="flex flex-col-reverse justify-between lg:flex-row lg:justify-around items-center">
                    {/* left-side */}
                <div className="text-[24px] lg:text-[34px] pt-10 lg:pt-24">
                    <h3>Hello, It&apos;s me <span className="text-customPurple">Areeba Aijaz</span></h3>
                    <h3>and I&apos;m a passionate<br /><span ref={typedElement} className="element text-customPurple"></span></h3>
                    <Link href="https://github.com/AreebaAijaz">
                    <button className="btn text-[15px] bg-customPurple px-6 py-4  rounded-full mt-6 hover:bg-purple-950">See My Github</button>
                    </Link>
                </div>
                {/* right-side */}
                <div className="right-side pt-6 lg:pt-12 lg:pr-20">
                    <Image src="/girl.png" alt="" width={300} height={300} className="img-main"/>
                </div>
            </main>
        </section>
    )
}