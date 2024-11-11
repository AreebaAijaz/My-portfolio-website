export default function Servies() {
  return (
    <section id="services" className="h-[900px] lg:h-[650px] lg:pt-20">
      <hr className="h-[1px] bg-customPurple border-none ml-8 mr-10 lg:mx-20" />
      <div className="text-left ml-12 lg:ml-32 mt-8">
        <p className="text-[12px] text-gray-400">What I have done so far</p>
        <h1 className="text-[25px] font-bold">Work Experience</h1>
      </div>
      <div>
        <div className="h-[2px] w-[280px] lg:w-[1000px] bg-white ml-16 lg:ml-32 mt-20 lg:mt-24"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-56 ml-28 lg:ml-44">
        <div className="h-12 w-[1px] bg-white">
          <div className="mt-10 ml-3 lg:m-0 lg:pt-16">
            <h5 className="text-[12px] w-[150px] font-bold">HTML Developer (2020-21)</h5>
            <p className="text-[9px] lg:text-[12px] w-[200px] lg:pt-5 text-gray-500">
              Building well-structured and responsive web pages using HTML5.
              Focused on creating accessible and organized content to support
              seamless styling and interactivity.
            </p>
          </div>
        </div>
        <div className="h-12 w-[1px] bg-white">
          <div className="mt-28 ml-3 lg:m-0 lg:pt-16">
            <h5 className="text-[12px] w-[150px] font-bold">Javascript Developer (2022-23)</h5>
            <p className="text-[9px] lg:text-[12px] w-[200px] lg:pt-5 text-gray-500">
            Exploring TypeScript to bring clarity and reliability to JavaScript code. Building skills in type safety and structure to create scalable and maintainable web applications.
            </p>
          </div>
        </div>
        <div className="h-12 w-[1px] bg-white">
          {" "}
          <div className="mt-44 ml-3 lg:m-0 lg:pt-16">
            <h5 className="text-[12px] w-[150px] font-bold">Next.Js Developer (2024-25)</h5>
            <p className="text-[9px] lg:text-[12px] w-[200px] lg:pt-5 text-gray-500">
            Learning Next.js to build fast, responsive web applications. Developing foundational skills in server-side rendering, routing, and seamless page transitions for a smooth user experience.
            </p>
          </div>
        </div>

        <div className="lg:h-12 w-[1px] bg-white">
          {" "}
          <div className=" mt-60 ml-3 lg:m-0 lg:pt-16">
            <h5 className="text-[12px] w-[150px] font-bold">UI/Ux Design (2024-onwards)</h5>
            <p className="text-[9px] lg:text-[12px] w-[200px] lg:pt-5 text-gray-500">
            Exploring UI/UX design principles to create user-friendly, visually appealing interfaces. Focusing on basic design patterns, layout balance, and understanding user flow for intuitive experiences.            </p>
          </div>
        </div>
        <div className="lg:h-12 w-[1px] bg-white">
          {" "}
          <div className="mt-6 ml-3 lg:m-0 lg:pt-16">
            <h5 className="text-[12px] w-[150px] font-bold">Git & Version Control Basics (2024)</h5>
            <p className="text-[9px] lg:text-[12px] w-[200px] lg:pt-5 text-gray-500">
            Learning to manage and track code changes with Git, keeping projects organized and collaborating effectively. Version control helps me maintain clean, trackable code while improving team workflows.            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
