import Image from "next/image";
import Link from "next/link";

export default function Project() {
    return (
        <section id="project" className="h-[1150px] lg:h-[630px] pt-10">
            <h1 className="text-4xl font-bold text-center py-6">Latest Projects</h1>
            <div className="flex flex-col lg:flex-row justify-around my-12 lg:my-20 space-y-8 lg:space-y-0 lg:space-x-4">
                
                {/* First Project */}
                <div className="mx-auto lg:m-0 p-4 lg:p-0 text-center">
                    <Link href="">
                        <Image
                            className="rounded-xl overflow-hidden"
                            src="/resume-builder.avif"
                            alt="Resume Builder"
                            width={300}
                            height={300}
                        />
                    </Link>
                    <h4 className="pt-6 text-[20px] hover hover:text-customPurple">Resume Builder</h4>
                </div>

                {/* Second Project */}
                <div className="mx-auto lg:m-0 p-4 lg:p-0 text-center">
                    <Link href="">
                        <Image
                            className="rounded-xl overflow-hidden"
                            src="/cafe.avif"
                            alt="Coffee Cafe Website"
                            width={300}
                            height={300}
                        />
                    </Link>
                    <h4 className="pt-6 text-[20px] hover hover:text-customPurple">Coffee Cafe Website</h4>
                </div>

                {/* Third Project */}
                <div className="mx-auto lg:m-0 p-4 lg:p-0 text-center">
                    <Link href="">
                        <Image
                            className="rounded-xl overflow-hidden"
                            src="/npm5.PNG"
                            alt="Npm & Node.Js Projects"
                            width={350}
                            height={350}
                        />
                    </Link>
                    <h4 className="pt-6 text-[20px] hover hover:text-customPurple">Npm & Node.Js Projects</h4>
                </div>

            </div>
        </section>
    );
}
