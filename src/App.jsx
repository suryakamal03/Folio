import React,{useState} from "react";
import { Github, Linkedin, Mail, Sun, FileDown,Loader, ArrowUpRight, ArrowRight, Plus, Minus } from "lucide-react";
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
  const [expandedAchievement, setExpandedAchievement] = useState(null);

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
              <p className="font-semibold text-xl pointer-events-none animate-slide-up [animation-duration:.7s]">Surya</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight whitespace-nowrap pointer-events-none">Full Stack Developer</p>
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
          <p className="text-sm font-normal text-gray-700 dark:text-gray-300">I'm a Full-Stack Developer focused on building modern, secure, and optimized web apps.</p>
          <p className="text-sm font-normal text-gray-700 dark:text-gray-300 animate-slide-up [animation-duration:.5s] mt-2">I strive for continuous learning and improvement, always seeking innovative ways to refine my skills and knowledge.</p>
          <p className="text-sm font-normal text-gray-700 dark:text-gray-300 mt-2 animate-slide-up [animation-duration:.6s]">Currently pursuing my BCA at SRM Institute of Science and Technology.</p>
        </div>
        <div className="border-1 border-gray-100 w-full h-0 mt-5 mb-5 ml-2 dark:border-neutral-500"></div>
        <div className="">
          <p className="text-lg font-semibold text-gray-950 pointer-events-none dark:text-neutral-300 animate-slide-up [animation-duration:.65s]">Skills</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="text-xs font-medium text-white bg-black px-3 py-1.5 rounded-full animate-slide-up [animation-duration:.7s] dark:bg-neutral-800">Javascript</span>
            <span className="text-xs font-medium text-white bg-black px-3 py-1.5 rounded-full animate-slide-up [animation-duration:.7s] dark:bg-neutral-800">Node.js</span>
            <span className="text-xs font-medium text-white bg-black px-3 py-1.5 rounded-full animate-slide-up [animation-duration:.7s] dark:bg-neutral-800">Express.js</span>
            <span className="text-xs font-medium text-white bg-black px-3 py-1.5 rounded-full animate-slide-up [animation-duration:.8s] dark:bg-neutral-800">MongoDB</span>
            <span className="text-xs font-medium text-white bg-black px-3 py-1.5 rounded-full animate-slide-up [animation-duration:.8s] dark:bg-neutral-800">React</span>
            <span className="text-xs font-medium text-white bg-black px-3 py-1.5 rounded-full animate-slide-up [animation-duration:.8s] dark:bg-neutral-800">Tailwind CSS</span>
            <span className="text-xs font-medium text-white bg-black px-3 py-1.5 rounded-full animate-slide-up [animation-duration:.8s] dark:bg-neutral-800">Firebase</span>
          </div>
        </div>
        <div className="border-1 border-gray-100 w-full h-0 mt-5 mb-5 ml-2 dark:border-neutral-500"></div>  
        <div className="">
          <p className="text-lg font-semibold text-gray-950 pointer-events-none dark:text-neutral-300 animate-slide-up [animation-duration:.7s]">Personal Projects</p>
          <div className="mt-5 grid grid-row sm:grid-row md:grid-row gap-1">

      {readMore && selectedProject === "collegeAdvisor" && (
  <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-neutral-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-black dark:text-white">College Advisor Website</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-normal">AI-Powered College Recommendation Platform</p>
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
          <p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-relaxed">
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
              <p className="text-sm font-normal text-gray-700 dark:text-gray-300">AI-powered college recommendations using Gemini API</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm font-normal text-gray-700 dark:text-gray-300">Firebase used for form data and real-time responses</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm font-normal text-gray-700 dark:text-gray-300">Responsive UI built using HTML, CSS, and JavaScript</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm font-normal text-gray-700 dark:text-gray-300">Integrated Gemini API for smart, AI-driven insights</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm font-normal text-gray-700 dark:text-gray-300">Simple, student-friendly interface</p>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-2">How it Works</h3>
          <div className="space-y-2 text-sm font-normal text-gray-700 dark:text-gray-300">
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
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={16} />
          </button>
          <button
            onClick={() => window.open("https://github.com/suryakamal03/clg-advisr", "_blank")}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
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
    className="group rounded-xl w-150 border-1 border-gray-200 dark:border-neutral-800 flex justify-center items-start flex-col px-3 py-5 m-3 hover:border-black dark:hover:border-neutral-400 transition-all duration-200 cursor-pointer"
    onClick={() => { setSelectedProject("collegeAdvisor"); setreadMore(true); }}
  >
    <div className="flex items-center justify-between w-full">
      <div className="flex">
        <p className="text-black font-semibold text-sm mb-3 dark:text-neutral-50">College Advisor Website</p>
        <span className="flex bg-gray-100 justify-center rounded-xl px-1 h-5 text-xs font-medium ml-2 dark:bg-neutral-800">Completed</span>
      </div>
      <ArrowUpRight className="w-4  transition-transform duration-200 group-hover:rotate-[45deg]" />
    </div>
    <p className="text-sm font-normal text-gray-700 dark:text-gray-300 animate-slide-up [animation-duration:.8s]">
      A smart web application that helps students find the best colleges based on their marks and preferences,
      integrated with Gemini AI for personalized suggestions and Firebase for real-time data storage.
    </p>
  </div>
</div>
  {/* Chat Application Modal */}
{readMore && selectedProject === "chatApp" && (
  <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-neutral-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-black dark:text-white">Real-time Chat Application</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-normal">
            Full-stack real-time messaging platform with Socket.io and email onboarding
          </p>
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
          <p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-relaxed">
            This real-time Chat Application allows users to sign up, log in, and securely message each
            other through a clean and modern interface. Built with the MERN stack and Socket.io for
            live messaging, plus Resend for email onboarding, the app focuses on smooth conversations,
            fast performance, and a polished user experience suitable for real-world use cases.
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                Real-time one-to-one chat powered by Socket.io
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                MERN stack (MongoDB, Express, React, Node.js) for a full-stack architecture
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                Cloudinary integration for handling user avatars and media uploads
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                Welcome email sent after signup using Resend
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
                Responsive UI designed for both desktop and mobile users
              </p>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-2">How it Works</h3>
          <div className="space-y-2 text-sm font-normal text-gray-700 dark:text-gray-300">
            <p>• Users sign up using their email and create an account</p>
            <p>• A welcome email is automatically sent via Resend after successful signup</p>
            <p>• User data and chat messages are stored in MongoDB</p>
            <p>• Express/Node.js handle authentication, REST APIs, and Socket.io server setup</p>
            <p>• Socket.io maintains a persistent connection for instant message delivery</p>
            <p>• React.js powers the real-time chat interface with smooth interactions</p>
            <p>• Cloudinary manages image/media uploads used inside the app</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-neutral-700">
          <button
            onClick={() => window.open("https://chat-application-ten-zeta.vercel.app/", "_blank")}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={16} />
          </button>
          <button
            onClick={() => window.open("https://github.com/suryakamal03/Chat-Application", "_blank")}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
          >
            <Github size={16} />
            <span>Source Code</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{/* Chat Application Card */}
<div className="items-center animate-slide-up [animation-duration:.7s]">
  <div
    className="group rounded-xl w-150 border-1 border-gray-200 dark:border-neutral-800 flex justify-center items-start flex-col px-3 py-5 m-3 hover:border-black dark:hover:border-neutral-400 transition-all duration-200 cursor-pointer"
    onClick={() => { setSelectedProject("chatApp"); setreadMore(true); }}
  >
    <div className="flex items-center justify-between w-full">
      <div className="flex">
        <p className="text-black font-semibold text-sm mb-3 dark:text-neutral-50">
          Real-time Chat Application
        </p>
        <span className="flex bg-gray-100 justify-center rounded-xl px-1 h-5 text-xs font-medium ml-2 dark:bg-neutral-800">
          Completed
        </span>
      </div>
      <ArrowUpRight className="w-4 transition-transform duration-200 group-hover:rotate-[45deg]" />
    </div>
    <p className="text-sm font-normal text-gray-700 dark:text-gray-300 animate-slide-up [animation-duration:.8s]">
      A full-stack real-time chat application built with MongoDB, Express/Node.js, React.js,
      and Socket.io, featuring Cloudinary-powered media handling and Resend integration for
      automatic welcome emails after signup.
    </p>
  </div>
</div>


      {/* new project add here */}

          </div>
        </div>
        
    <div className="border-1 border-gray-100 w-full h-0 mt-5 mb-5 ml-2 dark:border-neutral-500"></div>
        <div className="">
          <p className="text-lg font-semibold text-gray-950 pointer-events-none dark:text-neutral-300 animate-slide-up [animation-duration:.65s]">Achievements</p>
          
          {/* Achievement Item */}
           <div className="mt-5 m-2">
            <div 
              className={`group w-150 border border-gray-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-400 cursor-pointer transition-all duration-500 ${
                expandedAchievement === "research" ? "rounded-t-xl rounded-b-xl" : "rounded-xl"
              }`}
              onClick={() => setExpandedAchievement(expandedAchievement === "research" ? null : "research")}
            >
              <div className="flex justify-between items-center px-5 py-4">
                <div className="flex-1">
                  <p className="text-black font-semibold text-sm dark:text-neutral-50">Mind Over Machine AI Hackathon</p>
                  <p className="text-sm font-normal text-gray-600 dark:text-gray-400 mt-1">Loyola College</p>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                  <p className="text-[10px] font-normal text-gray-600 dark:text-gray-400">2nd Dec,2025</p>
                  <p className="text-[10px] font-normal text-gray-600 dark:text-gray-400">1st Place</p>
                  </div>
                  <div className="relative w-5 h-5">
                    <Plus 
                      className={`absolute w-5 h-5 text-gray-600 dark:text-gray-400 transition-all duration-500 ${
                        expandedAchievement === "research" 
                          ? "rotate-90 opacity-0" 
                          : "rotate-0 opacity-100"
                      } `} 
                    />
                    <Minus 
                      className={`absolute w-5 h-5 text-gray-600 dark:text-gray-400 transition-all duration-500 ${
                        expandedAchievement === "research" 
                          ? "rotate-0 opacity-100" 
                          : "-rotate-90 opacity-0"
                      }`} 
                    />
                  </div>
                </div>
              </div>
              
              {/* Expanded Content */}
              <div 
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  expandedAchievement === "research" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-7 pb-6 pt-2">
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
                    Developed a smart finance-tracking web app where AI analyzes user expenses and provides personalized money-management suggestions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          </div>
        <div className="border-1 border-gray-100 w-full h-0 mt-5 mb-5 ml-2 dark:border-neutral-500"></div>  
          <div className="flex mb-10 justify-between mr-4 animate-slide-up [animation-duration:.7s]">
          <p className="text-lg font-semibold text-gray-950 pointer-events-none dark:text-neutral-300">Connect</p>
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