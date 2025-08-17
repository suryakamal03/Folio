import { Github, Linkedin, Mail, Sun, FileDown,Loader, ArrowUpRight, ArrowRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaHtml5,FaCss3Alt,FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { SiMongodb,SiExpress,SiTailwindcss ,SiFirebase} from "react-icons/si";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="flex justify-center m-10 ">
      <div className="flex flex-col h-full w-full  sm:w-[640px] ">
        <div className="flex justify-between items-center ">
          {/* Avatar + Name */}
          <div className="flex items-center animate-slide-up ">
            <Avatar className="h-12 w-12">
              <AvatarImage src="../SURYA.jpg"/><AvatarFallback>SK</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <p className="font-bold text-xl pointer-events-none animate-slide-up [animation-duration:.7s]">Surya</p>
              <p className="text-sm text-gray-600 leading-tight whitespace-nowrap pointer-events-none">Full Stack Developer</p>
            </div>
          </div>

          {/* Icons */}
          <div className=" sm:flex flex-row space-x-4 items-center">
            <div className="hidden sm:flex space-x-4  ">
            <Tooltip>
              <TooltipTrigger><Github size={18} strokeWidth={1.5} className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white animate-slide-up [animation-duration:.6s]" onClick={() => window.open("https://github.com/suryakamal03", "_blank")} /></TooltipTrigger>
              <TooltipContent><p>Github</p></TooltipContent>
            </Tooltip>
             
            <Tooltip>
              <TooltipTrigger><Linkedin size={18} strokeWidth={1.5} className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white animate-slide-up [animation-duration:.6s]" onClick={() => window.open("https://www.linkedin.com/in/surya-kamal-369954306/", "_blank")} /></TooltipTrigger>
              <TooltipContent><p>LinkedIn</p></TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger><Mail size={18} strokeWidth={1.5} className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white animate-slide-up [animation-duration:.6s]" onClick={() => (window.location.href = "mailto:suryakamalsuryakamal@gmail.com")} /></TooltipTrigger>
              <TooltipContent><p>Mail</p></TooltipContent>
            </Tooltip>

            <p className="text-gray-300 pointer-events-none">|</p>

            <Tooltip>
              <TooltipTrigger><a href="/Resume.pdf" download><FileDown size={18} strokeWidth={1.5} className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white animate-slide-up [animation-duration:.6s]"/></a></TooltipTrigger>
              <TooltipContent><p>Resume</p></TooltipContent>
            </Tooltip>
            </div>
            <Tooltip>
              <TooltipTrigger><ModeToggle size={18} strokeWidth={1.5} className="text-gray-500 hover:text-black cursor-pointer bg-none border-none animate-slide-up [animation-duration:.6s]" /></TooltipTrigger>
            </Tooltip>
          </div>
        </div>
        <div className="mt-20 mr-0 sm:mr-15">
          {/* <p className="text-sm font-medium">I'm a Full-Stack Developer focused on building modern, secure, and optimized web apps.</p> */}
          {/* <br /> */}
          <p className="text-sm font-medium animate-slide-up [animation-duration:.5s]"> I strive for continuous learning and improvement, always seeking innovative ways to refine my skills and knowledge.</p>
          <p  className="text-sm font-medium mt-2 animate-slide-up [animation-duration:.6s]">Currently pursuing my BCA at SRM Institute of Science and Technology,</p>
        </div>
        <div className="border-1 border-gray-100 w-full h-0 mt-5 mb-5 ml-2 dark:border-neutral-500"></div>
        <div className="">
          <p className="text-lg font-bold text-gray-950 pointer-events-none dark:text-neutral-300 animate-slide-up [animation-duration:.65s]">Tech Stack</p>
          <div className="mt-5 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-1">
          <div className="flex flex-col items-center animate-slide-up [animation-duration:.7s]"> 
            <div className="border rounded-xl w-16 h-16 border-black flex justify-center items-center m-2 dark:border-neutral-400 ">
              <FaHtml5 className="text-3xl" />
            </div>
              <p className="text-sm font-medium pointer-events-none">HTML</p>
          </div>
          <div className="flex flex-col items-center animate-slide-up [animation-duration:.7s]">
            <div className="border rounded-xl w-16 h-16 border-black flex justify-center items-center m-2 dark:border-neutral-400 ">
              <FaCss3Alt className="text-3xl" />
            </div>
              <p className="text-sm font-medium pointer-events-none">CSS</p>
          </div>
          <div className="flex flex-col items-center animate-slide-up [animation-duration:.7s]">
            <div className="border rounded-xl w-16 h-16 border-black flex justify-center items-center m-2 dark:border-neutral-400  ">
              <IoLogoJavascript className="text-3xl" />
            </div>
              <p className="text-sm font-medium pointer-events-none">JAVASCRIPT</p>
          </div>
          <div className="flex flex-col items-center animate-slide-up [animation-duration:.7s]">
            <div className="border rounded-xl w-16 h-16 border-black flex justify-center items-center m-2 dark:border-neutral-400 ">
              <FaNodeJs className="text-3xl" />
            </div>
              <p className="text-sm font-medium pointer-events-none">NODE.JS</p>
          </div>
          <div className="flex flex-col items-center animate-slide-up [animation-duration:.7s]">
            <div className="border rounded-xl w-16 h-16 border-black flex justify-center items-center m-2 dark:border-neutral-400 ">
              <SiExpress className="text-3xl" />
            </div>
              <p className="text-sm font-medium pointer-events-none">EXPRESS.JS</p>
          </div>
          <div className="flex flex-col items-center animate-slide-up [animation-duration:.8s]">
            <div className="border rounded-xl w-16 h-16 border-black flex justify-center items-center m-2 dark:border-neutral-400 ">
              <SiMongodb className="text-3xl" />
            </div>
              <p className="text-sm font-medium pointer-events-none">MONGODB</p>
          </div>
          <div className="flex flex-col items-center animate-slide-up [animation-duration:.8s]">
            <div className="border rounded-xl w-16 h-16 border-black flex justify-center items-center m-2 dark:border-neutral-400 ">
              <FaReact className="text-3xl" />
            </div>
              <p className="text-sm font-medium pointer-events-none">REACT</p>
          </div>
          <div className="flex flex-col items-center animate-slide-up [animation-duration:.8s]">
            <div className="border rounded-xl w-16 h-16 border-black flex justify-center items-center m-2 dark:border-neutral-400 ">
              <SiTailwindcss className="text-3xl" />
            </div>
              <p className="text-sm font-medium pointer-events-none">TAILWIND CSS</p>
          </div>
          <div className="flex flex-col items-center animate-slide-up [animation-duration:.8s]">
            <div className="border rounded-xl w-16 h-16 border-black flex justify-center items-center m-2 dark:border-neutral-400 ">
              <SiFirebase className="text-3xl" />
            </div>
              <p className="text-sm font-medium pointer-events-none">FIREBASE</p>
          </div>
          <div className="flex flex-col items-center animate-slide-up [animation-duration:.8s]">
            <div className="border rounded-xl w-16 h-16 border-black flex justify-center items-center m-2 dark:border-neutral-400 ">
              <Loader className="text-3xl" />
            </div>
              <p className="text-sm font-medium pointer-events-none">UPDATING</p>
          </div>
          
          </div>
        </div>
        <div className="border-1 border-gray-100 w-full h-0 mt-5 mb-5 ml-2 dark:border-neutral-500"></div>  
        <div className="">
          <p className="text-lg font-bold text-gray-950 pointer-events-none dark:text-neutral-300 animate-slide-up [animation-duration:.7s]">Personal Projects</p>
          <div className="mt-5 grid grid-row sm:grid-row md:grid-row gap-1">
           <div className="items-center animate-slide-up [animation-duration:.7s]">
          <div className="group rounded-xl w-full border-2 border-gray-400 dark:border-neutral-800 flex justify-center items-start flex-col px-5 py-6 m-2 hover:border-black dark:hover:border-neutral-400 transition-all duration-200 cursor-pointer" onClick={()=>window.open("https://dashboard-one-pi.vercel.app/","_blank")}>
        <div className="flex items-center justify-between w-full">
       <div className="flex">
        <p className="text-black font-bold mb-3 dark:text-neutral-50">Personal Dashboard</p>
        <span className="flex bg-gray-100 justify-center rounded-2xl px-2 h-5 text-xs ml-2 dark:bg-neutral-800">Archived</span>
        </div>
      <ArrowUpRight className="w-5 transition-transform duration-200 group-hover:rotate-[45deg]" />
        </div>
          <p className="text-sm text-gray-700 dark:text-zinc-300 animate-slide-up [animation-duration:.8s]">A full-stack personal dashboard application built with the MERN stack. Features secure user authentication with JWT, allowing users to manage their weekly priorities and daily tasks in a clean, modern interface.</p>
          <div className="mt-2 flex gap-2">
            <SiMongodb className="text-gray-500 dark:text-white" />
            <FaReact className="text-gray-500 dark:text-white" />
            <SiExpress className="text-gray-500 dark:text-white" />
            <FaNodeJs className="text-gray-500 dark:text-white" />
          </div>
        </div>
      </div>
          </div>
        </div>
        <div className="border-1 border-gray-100 w-full h-0 mt-5 mb-5 ml-2 dark:border-neutral-500"></div>  
          <div className="flex mb-10 justify-between mr-4 animate-slide-up [animation-duration:.7s]">
          <p className="text-lg font-bold text-gray-950 pointer-events-none dark:text-neutral-300">Connect</p>
              <div className="flex gap-3">
                <Tooltip>
              <TooltipTrigger><Github size={18} strokeWidth={1.5} className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white" onClick={() => window.open("https://github.com/suryakamal03", "_blank")} /></TooltipTrigger>
              <TooltipContent><p>Github</p></TooltipContent>
                </Tooltip>
                <Tooltip>
              <TooltipTrigger><Linkedin size={18} strokeWidth={1.5} className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white" onClick={() => window.open("https://www.linkedin.com/in/surya-kamal-369954306/", "_blank")} /></TooltipTrigger>
              <TooltipContent><p>LinkedIn</p></TooltipContent>
                </Tooltip>
              <Tooltip>
              <TooltipTrigger><Mail size={18} strokeWidth={1.5} className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white" onClick={() => (window.location.href = "mailto:suryakamalsuryakamal@gmail.com")} /></TooltipTrigger>
              <TooltipContent><p>Mail</p></TooltipContent>
            </Tooltip>

            <p className="text-gray-300 pointer-events-none">|</p>

            <Tooltip>
              <TooltipTrigger><a href="/Resume.pdf" download><FileDown size={18} strokeWidth={1.5} className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white"/></a></TooltipTrigger>
              <TooltipContent><p>Resume</p></TooltipContent>
            </Tooltip>  
              </div>
          </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
