import Link from "next/link"
import { IoSend } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";



export default function Contact(){
    return(
        <section id="contact" className="h-[800px] lg:h-[550px] lg:pt-10">
            <div className="flex flex-col lg:flex-row justify-between lg:px-20">
            <div className="cntct-text lg:w-[400px] ml-0 px-10 lg:ml-16 pt-16">
                <h1 className="text-5xl font-bold py-5 text-center">Contact <span className="text-customPurple">Me</span></h1>
                <h3 className="text-2xl py-2">Let&apos;s Work Together</h3>
                <p className="text-[14px] py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eveniet eum non dolorem sed quam quibusdam cumque fugiat deserunt ex? Commodi soluta, quis nam eos labore adipisci expedita porro ullam.</p>
                <div className="">
                    <Link href="/" className=""><span className="icon"><IoSend /></span>areebaaijaz694@gmail.com</Link><br />
                    <Link href="/" className=""><span className="icon"><FaPhoneAlt /></span>0311-3783418</Link>
                </div>
            </div>
            <div className="cntct-form py-14 lg:py-4 rounded-lg max-w-md text-center lg:mr-8">
  <form action="" className="space-y-4">
    <input
      type="text"
      placeholder="Enter Your Name"
      className="w-[250px] lg:w-[300px] p-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="email"
      placeholder="Enter Your Email"
      className="w-[250px] lg:w-[300px] p-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      placeholder="Enter Your Subject"
      className="w-[250px] lg:w-[300px] p-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <textarea
      rows={6}
      placeholder="Enter Your Message"
      className="w-[250px] lg:w-[300px] p-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="form-btn w-[250px] lg:w-[300px] py-3 bg-blue-500 text-white font-semibold rounded-2xl hover:bg-blue-600 transition-colors duration-200"
    >
      SUBMIT
    </button>
  </form>
</div>
            </div>
        </section>
    )
} 