import React,{useState} from "react";
import { Github, Linkedin, Mail, Sun, FileDown,Loader, ArrowUpRight, ArrowRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaHtml5,FaCss3Alt,FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { SiMongodb,SiExpress,SiTailwindcss ,SiFirebase,SiCloudinary,SiJavascript} from "react-icons/si";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle";
import { RiTailwindCssFill } from "react-icons/ri";
function App() {
  const [readMore, setreadMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  function freadMore(){
    setreadMore(true);
  }
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
          <p className="text-sm font-medium">I'm a Full-Stack Developer focused on building modern, secure, and optimized web apps.</p>
          <p className="text-sm font-medium animate-slide-up [animation-duration:.5s] mt-2"> I strive for continuous learning and improvement, always seeking innovative ways to refine my skills and knowledge.</p>
          <p  className="text-sm font-medium mt-2 animate-slide-up [animation-duration:.6s]">Currently pursuing my BCA at SRM Institute of Science and Technology,</p>
        </div>
        <div className="border-1 border-gray-100 w-full h-0 mt-5 mb-5 ml-2 dark:border-neutral-500"></div>
        <div className="">
          <p className="text-lg font-bold text-gray-950 pointer-events-none dark:text-neutral-300 animate-slide-up [animation-duration:.65s]">Skills</p>
          <div className="mt-5 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-1">
          {/* <div className="flex flex-col items-center animate-slide-up [animation-duration:.7s]"> 
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
          </div> */}
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

          {/* Cryptvault  */}
            {/* {readMore && (
  <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-neutral-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white">CryptVault</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Anonymous File Sharing Platform</p>
        </div>
        <button 
          onClick={() => setreadMore(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl p-1  rounded-full transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="space-y-6">
        About
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-2">About</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            CryptVault is a simple, secure file sharing platform designed for quick and anonymous file sharing. 
            Users can create vaults using just a vault name and password without any email registration. 
            It's perfect for sharing notes, documents, and other non-sensitive files with friends or colleagues.
          </p>
        </div>

        Key Features
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">No email registration required</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Vault-based access control</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Secure file uploads via Cloudinary</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Modern, responsive interface</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Password-protected vaults</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Quick file sharing & access</p>
            </div>
          </div>
        </div>

        How it Works
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-2">How it Works</h3>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>• Users create a vault with a unique name and password</p>
            <p>• Files are uploaded and stored securely on Cloudinary</p>
            <p>• File metadata and vault information stored in MongoDB</p>
            <p>• Access granted only with correct vault credentials</p>
            <p>• Clean, responsive interface built with React and Tailwind CSS</p>
          </div>
        </div>

        Action Buttons
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-neutral-700">
          <button 
            onClick={() => window.open("https://cryptvault.vercel.app/", "_blank")}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={16} />
          </button>
          <button 
            onClick={() => window.open("https://github.com/suryakamal03/cryptvault", "_blank")}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm"
          >
            <Github size={16} />
            <span>Source Code</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)}
           <div className="items-center animate-slide-up [animation-duration:.7s]">
          <div className="group rounded-xl w-full border-2 border-gray-400 dark:border-neutral-800 flex justify-center items-start flex-col px-5 py-6 m-2 hover:border-black dark:hover:border-neutral-400 transition-all duration-200 cursor-pointer" onClick={freadMore}>
        <div className="flex items-center justify-between w-full">
       <div className="flex">
        <p className="text-black font-bold mb-3 dark:text-neutral-50">CryptVault</p>
        <span className="flex bg-gray-100 justify-center rounded-2xl px-2 h-5 text-xs ml-2 dark:bg-neutral-800">Maintained</span>
        </div>
      <ArrowUpRight className="w-5 transition-transform duration-200 group-hover:rotate-[45deg]" />
        </div>
          <p className="text-sm text-gray-700 dark:text-zinc-300 animate-slide-up [animation-duration:.8s]">A secure file storage platform built with the MERN stack. Features user authentication with JWT, drag-and-drop file uploads, cloud storage integration, and a modern React interface with Tailwind CSS.</p>
          <div className="mt-2 flex gap-2">
            <SiMongodb className="text-gray-500 dark:text-white" />
            <FaReact className="text-gray-500 dark:text-white" />
            <SiExpress className="text-gray-500 dark:text-white" />
            <FaNodeJs className="text-gray-500 dark:text-white" />
            <RiTailwindCssFill className="text-gray-500 dark:text-white" />
            <SiCloudinary className="text-gray-500 dark:text-white" />
          </div>
        </div>
      </div> */}

      {readMore && selectedProject === "collegeAdvisor" && (
  <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-neutral-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white">College Advisor Website</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">AI-Powered College Recommendation Platform</p>
        </div>
        <button
          onClick={() => setreadMore(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl p-1 rounded-full transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="space-y-6">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-2">About</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            The College Advisor Website helps students discover suitable colleges based on their marks,
            preferences, and location. It leverages AI to suggest personalized college recommendations,
            ensuring better decision-making for higher education choices.
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">AI-powered college recommendations using Gemini API</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Firebase used for form data and real-time responses</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Responsive UI built using HTML, CSS, and JavaScript</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Integrated Gemini API for smart, AI-driven insights</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">Simple, student-friendly interface</p>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-2">How it Works</h3>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>• Students enter their 10th, 11th, and 12th marks and preferred location</p>
            <p>• Data is stored and retrieved from Firebase in real-time</p>
            <p>• Gemini API analyzes the input and provides personalized college suggestions</p>
            <p>• Users receive a summary and college recommendations instantly</p>
            <p>• The site is optimized for all devices using responsive design</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-neutral-700">
          <button
            onClick={() => window.open("https://clg-advisr.vercel.app/", "_blank")}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={16} />
          </button>
          <button
            onClick={() => window.open("https://github.com/suryakamal03/clg-advisr", "_blank")}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm"
          >
            <Github size={16} />
            <span>Source Code</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{/* Card section */}
<div className="items-center animate-slide-up [animation-duration:.7s]">
  <div
    className="group rounded-xl w-full border-2 border-gray-400 dark:border-neutral-800 flex justify-center items-start flex-col px-5 py-6 m-2 hover:border-black dark:hover:border-neutral-400 transition-all duration-200 cursor-pointer"
    onClick={() => { setSelectedProject("collegeAdvisor"); setreadMore(true); }}
  >
    <div className="flex items-center justify-between w-full">
      <div className="flex">
        <p className="text-black font-bold mb-3 dark:text-neutral-50">College Advisor Website</p>
        <span className="flex bg-gray-100 justify-center rounded-2xl px-2 h-5 text-xs ml-2 dark:bg-neutral-800">Completed</span>
      </div>
      <ArrowUpRight className="w-5 transition-transform duration-200 group-hover:rotate-[45deg]" />
    </div>
    <p className="text-sm text-gray-700 dark:text-zinc-300 animate-slide-up [animation-duration:.8s]">
      A smart web application that helps students find the best colleges based on their marks and preferences,
      integrated with Gemini AI for personalized suggestions and Firebase for real-time data storage.
    </p>
    <div className="mt-2 flex gap-2">
      <SiJavascript className="text-gray-500 dark:text-white" />
      <SiFirebase className="text-gray-500 dark:text-white" />
      <FaHtml5 className="text-gray-500 dark:text-white" />
      <FaCss3Alt className="text-gray-500 dark:text-white" />
    </div>
  </div>
</div>


      {/* new project add here */}
              
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

// onClick={()=>window.open("https://cryptvault.vercel.app/","_blank")}