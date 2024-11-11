import Image from "next/image"
export default function About(){
    return(
        <section id="about" className="flex flex-col lg:flex-row justify-around h-[600px] lg:h-[700px] lg:pt-28">
            {/* left-side */}
            <div className="hidden lg:block w-[200px] mt-6px lg:mt-20">
            <Image src="/girl.png" alt="" height={200} width={200} />
            </div>
            {/* right-side */}
            <div className="flex flex-col w-[full] text-center">
            <h1 className="text-4xl font-bold">About  <span className="text-customPurple">Me</span></h1>
                <p className="w-[300px] md:w-[500px] lg:w-[800px] mx-auto text-[9px] md:text-[12px] lg:text-[14px] text-center text-gray-300 pt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil placeat, facilis nostrum officiis odio reiciendis, aperiam veniam dolores saepe voluptatibus a enim molestias cupiditate accusantium! Distinctio a cumque quis perferendis?
                Voluptates iste et sequi autem delectus aperiam, magnam placeat veritatis dolorem repudiandae, inventore consectetur perspiciatis ducimus fugit optio a soluta pariatur! Dolorum, temporibus. Deserunt sapiente itaque ab ad a et.
                Suscipit mollitia dolorem facere velit, consectetur tenetur dolores, dignissimos laboriosam quis eligendi veritatis odit provident dolore sed quod nesciunt reiciendis excepturi reprehenderit, qui asperiores sequi possimus! Repudiandae eaque nemo libero?
                Molestias, nisi praesentium, placeat ipsum repellat reprehenderit ab, odit nostrum eius laboriosam sequi blanditiis unde libero. Reiciendis facere, molestiae consequatur nobis laudantium, deleniti voluptatum numquam rerum pariatur in, rem vero.
                Aliquid sunt, corporis doloremque vero autem laborum deserunt saepe, perspiciatis officiis illo fugit? Ipsum eos saepe odit dolores ab, reiciendis obcaecati porro hic eligendi recusandae ut culpa. Dolorem, animi accusamus!
                At architecto quidem consequatur vitae commodi facilis dicta nam earum, in quibusdam? Corrupti ad repudiandae velit suscipit vel dicta nemo ullam et, quasi, vitae molestias id praesentium, itaque cumque nostrum.</p>
            </div>
        </section>
    )
}