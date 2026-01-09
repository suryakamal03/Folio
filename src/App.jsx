import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Sun, FileDown, Loader, ArrowUpRight, ArrowRight, Plus, Minus, ArrowLeft } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { BorderBeam } from "@/components/ui/border-beam"
import "./App.css"

function App() {
  const [readMore, setreadMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [expandedAchievement, setExpandedAchievement] = useState(null);
  const [viewingProject, setViewingProject] = useState(false);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.project) {
        setSelectedProject(event.state.project);
        setViewingProject(true);
      } else {
        setViewingProject(false);
        setSelectedProject("");
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Set initial state
    if (!window.history.state) {
      window.history.replaceState({ project: null }, '');
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Function to navigate to project
  const navigateToProject = (projectName) => {
    setSelectedProject(projectName);
    setViewingProject(true);
    window.history.pushState({ project: projectName }, '', `#${projectName}`);
  };

  // Function to navigate back
  const navigateBack = () => {
    window.history.back();
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-center px-4 sm:px-6 md:px-10 py-6 sm:py-10">
        <div className="flex flex-col h-full w-full max-w-[640px]">
          {viewingProject ? (
            // Project Detail View
            <div>
              {/* Back Button */}
              <button
                onClick={navigateBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white mb-6 transition-colors group"
              >
                <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                <span className="text-sm font-medium">Back</span>
              </button>

              {/* Project Details Content */}
              {selectedProject === "collegeAdvisor" && (
                <div className="animate-slide-up">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
                        College Advisor Website
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-normal mt-2">
                        AI-Powered College Recommendation Platform
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mt-8">
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-3">About</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-relaxed">
                        The College Advisor Website helps students discover suitable colleges based on their marks,
                        preferences, and location. It leverages AI to suggest personalized college recommendations,
                        ensuring better decision-making for higher education choices.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Key Features</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          "AI-powered college recommendations using Gemini API",
                          "Firebase used for form data and real-time responses",
                          "Responsive UI built using HTML, CSS, and JavaScript",
                          "Integrated Gemini API for smart, AI-driven insights",
                          "Simple, student-friendly interface"
                        ].map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm font-normal text-gray-700 dark:text-gray-300">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-3">How it Works</h3>
                      <div className="space-y-2 text-sm font-normal text-gray-700 dark:text-gray-300">
                        <p>• Students enter their 10th, 11th, and 12th marks and preferred location</p>
                        <p>• Data is stored and retrieved from Firebase in real-time</p>
                        <p>• Gemini API analyzes the input and provides personalized college suggestions</p>
                        <p>• Users receive a summary and college recommendations instantly</p>
                        <p>• The site is optimized for all devices using responsive design</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 dark:border-neutral-700">
                      <button
                        onClick={() => window.open("https://clg-advisr.vercel.app/", "_blank")}
                        className="flex items-center justify-center space-x-2 px-4 py-2.5 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={16} />
                      </button>
                      <button
                        onClick={() => window.open("https://github.com/suryakamal03/clg-advisr", "_blank")}
                        className="flex items-center justify-center space-x-2 px-4 py-2.5 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {selectedProject === "bundle" && (
                <div className="animate-slide-up">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
                        Bundle
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-normal mt-2">
                        Modern project management platform for developer teams
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mt-8">
                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Overview</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-relaxed">
                        Bundle is a developer‑focused project management web application designed to simplify how teams plan, assign, and track work throughout the software development lifecycle. Many existing project management tools rely heavily on manual updates and fragmented workflows, which often results in outdated task statuses, reduced visibility, and unnecessary overhead for developers. Bundle addresses these challenges by combining intuitive task management with AI‑assisted workflows to keep projects organized and teams aligned in real time.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Core Features</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          "Firebase Authentication with Email/Password and Google Sign-In",
                          "User profile management with persistent state in Firestore",
                          "Task creation with manual or AI-assisted assignment",
                          "Real-time project overview showing team progress and pending work",
                          "Project-aware AI chatbot embedded in the dashboard for contextual assistance",
                          "Automated email reminders and risk alerts for task deadlines",
                          "Responsive component architecture built with Next.js and Tailwind CSS"
                        ].map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm font-normal text-gray-700 dark:text-gray-300">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {/* Next.js */}
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.0968-.0634c.8685-.5763 1.7901-1.3976 2.6094-2.3282 1.5183-1.7266 2.5033-3.6963 2.9253-5.8457.0962-.659.108-.8537.108-1.7474s-.012-1.0884-.108-1.7476c-.652-4.506-3.8591-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Next.js</span>
                        </div>

                        {/* TypeScript */}
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">TypeScript</span>
                        </div>

                        {/* Tailwind CSS */}
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Tailwind CSS</span>
                        </div>

                        {/* Firebase */}
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Firebase</span>
                        </div>

                        {/* MongoDB */}
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
                          </svg>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">MongoDB</span>
                        </div>

                        {/* Resend */}
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700">
                          <Mail className="w-4 h-4" />
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Resend</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 dark:border-neutral-700">
                      <button
                        onClick={() => window.open("#", "_blank")}
                        className="flex items-center justify-center space-x-2 px-4 py-2.5 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={16} />
                      </button>
                      <button
                        onClick={() => window.open("#", "_blank")}
                        className="flex items-center justify-center space-x-2 px-4 py-2.5 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Main Homepage View
            <div>
              {/* Header Section */}
          <div className="flex justify-between items-center">
            <div className="flex items-center animate-slide-up">
              
              <Avatar className="h-12 w-12 sm:h-16 sm:w-16">
                <AvatarImage src="../SURYA.jpg" />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <p className="font-semibold text-lg sm:text-xl pointer-events-none animate-slide-up [animation-duration:.7s]">
                  Surya
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight whitespace-nowrap pointer-events-none">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="flex flex-row space-x-3 sm:space-x-4 items-center">
              <div className="hidden sm:flex space-x-4">
                <Tooltip>
                  <TooltipTrigger>
                    <Github
                      size={18}
                      strokeWidth={1.5}
                      className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white animate-slide-up [animation-duration:.6s]"
                      onClick={() => window.open("https://github.com/suryakamal03", "_blank")}
                    />
                  </TooltipTrigger>
                  <TooltipContent><p>Github</p></TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <Linkedin
                      size={18}
                      strokeWidth={1.5}
                      className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white animate-slide-up [animation-duration:.6s]"
                      onClick={() => window.open("https://www.linkedin.com/in/surya-kamal-369954306/", "_blank")}
                    />
                  </TooltipTrigger>
                  <TooltipContent><p>LinkedIn</p></TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <Mail
                      size={18}
                      strokeWidth={1.5}
                      className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white animate-slide-up [animation-duration:.6s]"
                      onClick={() => (window.location.href = "mailto:suryakamalsuryakamal@gmail.com")}
                    />
                  </TooltipTrigger>
                  <TooltipContent><p>Mail</p></TooltipContent>
                </Tooltip>

                <p className="text-gray-300 pointer-events-none">|</p>

                <Tooltip>
                  <TooltipTrigger>
                    <a href="/Resume.pdf" download>
                      <FileDown
                        size={18}
                        strokeWidth={1.5}
                        className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white animate-slide-up [animation-duration:.6s]"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent><p>Resume</p></TooltipContent>
                </Tooltip>
              </div>
              <Tooltip>
                <TooltipTrigger>
                  <AnimatedThemeToggler
                    className="text-gray-500 hover:text-black cursor-pointer bg-none border-none animate-slide-up [animation-duration:.6s] dark:hover:text-white"
                  />

                </TooltipTrigger>
              </Tooltip>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-12 sm:mt-20">
            <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
              I'm a Full-Stack Developer focused on building modern, secure, and optimized web apps.
            </p>
            <p className="text-sm font-normal text-gray-700 dark:text-gray-300 animate-slide-up [animation-duration:.5s] mt-2">
              I strive for continuous learning and improvement, always seeking innovative ways to refine my skills and knowledge.
            </p>
            <p className="text-sm font-normal text-gray-700 dark:text-gray-300 mt-2 animate-slide-up [animation-duration:.6s]">
              Currently pursuing my BCA at SRM Institute of Science and Technology.
            </p>
          </div>

          <div className="border-t border-gray-200 dark:border-neutral-700 w-full mt-5 mb-5"></div>

          {/* Skills Section */}
          <div>
            <p className="text-lg font-semibold text-gray-950 pointer-events-none dark:text-neutral-300 animate-slide-up [animation-duration:.65s]">
              Skills
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Javascript","Typescript","Node.js", "Express.js", "React", "Tailwind CSS","Next.js","MongoDB", "Firebase"].map((skill, idx) => (
                <span
                  key={skill}
                  className="text-[12px] font-bold text-white bg-black px-3 py-1.5 rounded-full animate-slide-up dark:bg-neutral-800"
                  style={{ animationDuration: `${0.7 + idx * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-neutral-700 w-full mt-5 mb-5"></div>

          {/* Personal Projects Section - IMPROVED */}
          <div>
            <p className="text-lg font-semibold text-gray-950 pointer-events-none dark:text-neutral-300 animate-slide-up [animation-duration:.7s]">
              Personal Projects
            </p>
            <div className="mt-5 space-y-3">
              {/* College Advisor Modal */}
              {readMore && selectedProject === "collegeAdvisor" && (
                <div 
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4"
                  onClick={() => setreadMore(false)}
                >
                  <div 
                    className="bg-white dark:bg-neutral-900 rounded-xl p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto hide-scrollbar border border-gray-200 dark:border-neutral-700"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 pr-2">
                        <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white text-left">
                          College Advisor Website
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-normal mt-1 text-left">
                          AI-Powered College Recommendation Platform
                        </p>
                      </div>
                      <button
                        onClick={() => setreadMore(false)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl sm:text-xl p-1 rounded-full transition-colors flex-shrink-0"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-2 text-left">About</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-relaxed text-left">
                          The College Advisor Website helps students discover suitable colleges based on their marks,
                          preferences, and location. It leverages AI to suggest personalized college recommendations,
                          ensuring better decision-making for higher education choices.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 text-left">Key Features</h3>
                        <div className="grid grid-cols-1 gap-2 sm:gap-3">
                          {[
                            "AI-powered college recommendations using Gemini API",
                            "Firebase used for form data and real-time responses",
                            "Responsive UI built using HTML, CSS, and JavaScript",
                            "Integrated Gemini API for smart, AI-driven insights",
                            "Simple, student-friendly interface"
                          ].map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                              <p className="text-xs sm:text-sm font-normal text-gray-700 dark:text-gray-300">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-2 text-left">How it Works</h3>
                        <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm font-normal text-gray-700 dark:text-gray-300 text-left">
                          <p>• Students enter their 10th, 11th, and 12th marks and preferred location</p>
                          <p>• Data is stored and retrieved from Firebase in real-time</p>
                          <p>• Gemini API analyzes the input and provides personalized college suggestions</p>
                          <p>• Users receive a summary and college recommendations instantly</p>
                          <p>• The site is optimized for all devices using responsive design</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 border-t border-gray-200 dark:border-neutral-700">
                        <button
                          onClick={() => window.open("https://clg-advisr.vercel.app/", "_blank")}
                          className="flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={16} />
                        </button>
                        <button
                          onClick={() => window.open("https://github.com/suryakamal03/clg-advisr", "_blank")}
                          className="flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
                        >
                          <Github size={16} />
                          <span>Source Code</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Ontrackr Modal */}
              {readMore && selectedProject === "ontrackr" && (
                <div 
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4"
                  onClick={() => setreadMore(false)}
                >
                  <div 
                    className="bg-white dark:bg-neutral-900 rounded-xl p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto hide-scrollbar border border-gray-200 dark:border-neutral-700"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 pr-2">
                        <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white text-left">
                          Ontrackr
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-normal mt-1 text-left">
                          Modern project management platform for developer teams
                        </p>
                      </div>
                      <button
                        onClick={() => setreadMore(false)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl sm:text-xl p-1 rounded-full transition-colors flex-shrink-0"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-2 text-left">Overview</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-relaxed text-left">
                          Ontrackr is a project management web application designed specifically for developer teams. 
                          It addresses the challenge of coordinating distributed teams and tracking project progress in real-time. 
                          The platform combines intuitive task management with AI-powered assistance to reduce manual overhead and 
                          improve team visibility. Built with a scalable architecture and clean user experience, Ontrackr streamlines 
                          workflows from project creation to task completion while maintaining awareness of team capacity and project health.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 text-left">Core Features</h3>
                        <div className="grid grid-cols-1 gap-2 sm:gap-3">
                          {[
                            "Firebase Authentication with Email/Password and Google Sign-In",
                            "User profile management with persistent state in Firestore",
                            "Unified dashboard for creating and managing projects",
                            "Role-based member invitations and access control",
                            "Task creation with manual or AI-assisted assignment",
                            "Real-time project overview showing team progress and pending work",
                            "Project-aware AI chatbot embedded in the dashboard for contextual assistance",
                            "Automated email reminders and risk alerts for task deadlines",
                            "Responsive component architecture built with Next.js and Tailwind CSS"
                          ].map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                              <p className="text-xs sm:text-sm font-normal text-gray-700 dark:text-gray-300">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-2 text-left">Technical Highlights</h3>
                        <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm font-normal text-gray-700 dark:text-gray-300 text-left">
                          <p>• TypeScript for type safety across the entire application stack</p>
                          <p>• Firestore real-time listeners for instant project and task updates</p>
                          <p>• Reusable component library for consistent UI and rapid feature development</p>
                          <p>• Modular architecture separating authentication, project, and task logic</p>
                          <p>• Optimistic UI updates for improved perceived performance</p>
                          <p>• Context-aware AI integration using project data and team composition</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 border-t border-gray-200 dark:border-neutral-700">
                        <button
                          onClick={() => window.open("#", "_blank")}
                          className="flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={16} />
                        </button>
                        <button
                          onClick={() => window.open("#", "_blank")}
                          className="flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
                        >
                          <Github size={16} />
                          <span>Source Code</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bundle Card */}
              <div className="animate-slide-up [animation-duration:.7s]">
                <div
                  className="group rounded-xl border border-gray-200 dark:border-neutral-800 flex justify-center items-start flex-col p-4 sm:px-3 sm:py-5 hover:border-black dark:hover:border-neutral-400 transition-all duration-200 cursor-pointer"
                  onClick={() => navigateToProject("bundle")}
                >
                  <div className="flex items-start justify-between w-full mb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center flex-1 gap-2">
                      <p className="text-black font-semibold text-sm dark:text-neutral-50">
                        Bundle
                      </p>
                      <span className="flex bg-gray-100 justify-center rounded-xl px-2 py-0.5 h-5 text-xs font-medium dark:bg-neutral-800 w-fit">
                        Maintained
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:rotate-[45deg] flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
                    A developer‑focused project management platform that keeps tasks aligned with real development activity. Built to help teams focus on writing code instead of managing progress.
                  </p>
                </div>
              </div>

              {/* College Advisor Card - IMPROVED */}
              <div className="animate-slide-up [animation-duration:.7s]">
                <div
                  className="group rounded-xl border border-gray-200 dark:border-neutral-800 flex justify-center items-start flex-col p-4 sm:px-3 sm:py-5 hover:border-black dark:hover:border-neutral-400 transition-all duration-200 cursor-pointer"
                  onClick={() => navigateToProject("collegeAdvisor")}
                >
                  <div className="flex items-start justify-between w-full mb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center flex-1 gap-2">
                      <p className="text-black font-semibold text-sm dark:text-neutral-50">
                        College Advisor Website
                      </p>
                      <span className="flex bg-gray-100 justify-center rounded-xl px-2 py-0.5 h-5 text-xs font-medium dark:bg-neutral-800 w-fit">
                        Completed
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:rotate-[45deg] flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
                    A smart web application that helps students find the best colleges based on their marks and preferences,
                    integrated with Gemini AI for personalized suggestions and Firebase for real-time data storage.
                  </p>
                </div>
              </div>

              {/* Chat Application Modal - COMMENTED OUT */}
              {/* {readMore && selectedProject === "chatApp" && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
                  <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 sm:p-6 w-full max-w-2xl max-h-[90vh]  border border-gray-200 dark:border-neutral-700 overflow-y-auto hide-scrollbar">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 pr-2">
                        <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white text-left">
                          Real-time Chat Application
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-normal mt-1 text-left">
                          Full-stack real-time messaging platform with Socket.io and email onboarding
                        </p>
                      </div>
                      <button
                        onClick={() => setreadMore(false)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl sm:text-xl p-1 rounded-full transition-colors flex-shrink-0"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-2 text-left">About</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-relaxed text-left">
                          This real-time Chat Application allows users to sign up, log in, and securely message each
                          other through a clean and modern interface. Built with the MERN stack and Socket.io for
                          live messaging, plus Resend for email onboarding, the app focuses on smooth conversations,
                          fast performance, and a polished user experience suitable for real-world use cases.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-3 text-left">Key Features</h3>
                        <div className="grid grid-cols-1 gap-2 sm:gap-3">
                          {[
                            "Real-time one-to-one chat powered by Socket.io",
                            "MERN stack (MongoDB, Express, React, Node.js) for a full-stack architecture",
                            "Cloudinary integration for handling user avatars and media uploads",
                            "Welcome email sent after signup using Resend",
                            "Responsive UI designed for both desktop and mobile users"
                          ].map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neutral-500 dark:bg-stone-50 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                              <p className="text-xs sm:text-sm font-normal text-gray-700 dark:text-gray-300">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-2 text-left">How it Works</h3>
                        <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm font-normal text-gray-700 dark:text-gray-300 text-left">
                          <p>• Users sign up using their email and create an account</p>
                          <p>• A welcome email is automatically sent via Resend after successful signup</p>
                          <p>• User data and chat messages are stored in MongoDB</p>
                          <p>• Express/Node.js handle authentication, REST APIs, and Socket.io server setup</p>
                          <p>• Socket.io maintains a persistent connection for instant message delivery</p>
                          <p>• React.js powers the real-time chat interface with smooth interactions</p>
                          <p>• Cloudinary manages image/media uploads used inside the app</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 border-t border-gray-200 dark:border-neutral-700">
                        <button
                          onClick={() => window.open("https://chat-application-ten-zeta.vercel.app/", "_blank")}
                          className="flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={16} />
                        </button>
                        <button
                          onClick={() => window.open("https://github.com/suryakamal03/Chat-Application", "_blank")}
                          className="flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-2 border border-gray-300 dark:border-neutral-600 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
                        >
                          <Github size={16} />
                          <span>Source Code</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}

              {/* Chat Application Card - COMMENTED OUT */}
              {/* <div className="animate-slide-up [animation-duration:.7s]">
                <div
                  className="group rounded-xl border border-gray-200 dark:border-neutral-800 flex justify-center items-start flex-col p-4 sm:px-3 sm:py-5 hover:border-black dark:hover:border-neutral-400 transition-all duration-200 cursor-pointer"
                  onClick={() => {
                    setSelectedProject("chatApp");
                    setreadMore(true);
                  }}
                >
                  <div className="flex items-start justify-between w-full mb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center flex-1 gap-2">
                      <p className="text-black font-semibold text-sm dark:text-neutral-50">
                        Real-time Chat Application
                      </p>
                      <span className="flex bg-gray-100 justify-center rounded-xl px-2 py-0.5 h-5 text-xs font-medium dark:bg-neutral-800 w-fit">
                        Completed
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:rotate-[45deg] flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
                    A full-stack real-time chat application built with MongoDB, Express/Node.js, React.js,
                    and Socket.io, featuring Cloudinary-powered media handling and Resend integration for
                    automatic welcome emails after signup.
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-neutral-700 w-full mt-5 mb-5"></div>

          {/* Achievements Section - IMPROVED */}
          <div>
  <p className="text-lg font-semibold text-gray-950 pointer-events-none dark:text-neutral-300 animate-slide-up [animation-duration:.65s]">
    Achievements
  </p>

  <div className="mt-5 space-y-3">
    {/* Smart India Hackathon */}
    <div
      className={`group border border-gray-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-400 cursor-pointer transition-all duration-500 ${
        expandedAchievement === "sih" ? "rounded-t-xl rounded-b-xl" : "rounded-xl"
      }`}
      onClick={() => setExpandedAchievement(expandedAchievement === "sih" ? null : "sih")}
    >
      <div className="flex justify-between items-start p-4 gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-black font-semibold text-sm dark:text-neutral-50 leading-tight">
            Smart India Hackathon
          </p>
          <p className="text-xs sm:text-sm font-normal text-gray-600 dark:text-gray-400 mt-1">
            St. Joseph's College of Engineering
          </p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <div className="text-right">
            <p className="text-[10px] sm:text-xs font-normal text-gray-600 dark:text-gray-400 whitespace-nowrap">
              9th Dec, 2025
            </p>
            <p className="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-300 mt-0.5">
              1st Place
            </p>
          </div>
          <div className="relative w-5 h-5 flex-shrink-0">
            <Plus
              className={`absolute w-5 h-5 text-gray-600 dark:text-gray-400 transition-all duration-500 ${
                expandedAchievement === "sih" ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <Minus
              className={`absolute w-5 h-5 text-gray-600 dark:text-gray-400 transition-all duration-500 ${
                expandedAchievement === "sih" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          expandedAchievement === "sih" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-0">
          <p className="text-sm font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
            <span className="font-medium">Problem Statement:</span> Fitness and Sports (SIH25129)
            <br />
            <span className="mt-2 inline-block">
              Developed an AI fitness coaching app with live interaction, nutrition tracking, and real-time messaging and calling features with an AI fitness coach.
            </span>
          </p>
        </div>
      </div>
    </div>

    {/* Mind Over Machine AI Hackathon */}
    <div
      className={`group border border-gray-200 dark:border-neutral-800 hover:border-black dark:hover:border-neutral-400 cursor-pointer transition-all duration-500 ${
        expandedAchievement === "research" ? "rounded-t-xl rounded-b-xl" : "rounded-xl"
      }`}
      onClick={() => setExpandedAchievement(expandedAchievement === "research" ? null : "research")}
    >
      <div className="flex justify-between items-start p-4 gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-black font-semibold text-sm dark:text-neutral-50 leading-tight">
            Mind Over Machine AI Hackathon
          </p>
          <p className="text-xs sm:text-sm font-normal text-gray-600 dark:text-gray-400 mt-1">
            Loyola College
          </p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <div className="text-right">
            <p className="text-[10px] sm:text-xs font-normal text-gray-600 dark:text-gray-400 whitespace-nowrap">
              2nd Dec, 2024
            </p>
            <p className="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-300 mt-0.5">
              1st Place
            </p>
          </div>
          <div className="relative w-5 h-5 flex-shrink-0">
            <Plus
              className={`absolute w-5 h-5 text-gray-600 dark:text-gray-400 transition-all duration-500 ${
                expandedAchievement === "research" ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <Minus
              className={`absolute w-5 h-5 text-gray-600 dark:text-gray-400 transition-all duration-500 ${
                expandedAchievement === "research" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          expandedAchievement === "research" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-0">
          <p className="text-sm font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
            Developed a smart finance-tracking web app where AI analyzes user expenses and provides
            personalized money-management suggestions.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

          <div className="border-t border-gray-200 dark:border-neutral-700 w-full mt-5 mb-5"></div>

          {/* Connect Section */}
          <div className="flex flex-col sm:flex-row mb-10 justify-between items-start sm:items-center gap-4 animate-slide-up [animation-duration:.7s]">
            <p className="text-lg font-semibold text-gray-950 pointer-events-none dark:text-neutral-300">Connect</p>
            <div className="flex gap-3 sm:gap-3">
              <Tooltip>
                <TooltipTrigger>
                  <Github
                    size={18}
                    strokeWidth={1.5}
                    className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white"
                    onClick={() => window.open("https://github.com/suryakamal03", "_blank")}
                  />
                </TooltipTrigger>
                <TooltipContent><p>Github</p></TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Linkedin
                    size={18}
                    strokeWidth={1.5}
                    className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white"
                    onClick={() => window.open("https://www.linkedin.com/in/surya-kamal-369954306/", "_blank")}
                  />
                </TooltipTrigger>
                <TooltipContent><p>LinkedIn</p></TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Mail
                    size={18}
                    strokeWidth={1.5}
                    className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white"
                    onClick={() => (window.location.href = "mailto:suryakamalsuryakamal@gmail.com")}
                  />
                </TooltipTrigger>
                <TooltipContent><p>Mail</p></TooltipContent>
              </Tooltip>

              <p className="text-gray-300 pointer-events-none">|</p>

              <Tooltip>
                <TooltipTrigger>
                  <a href="/Resume.pdf" download>
                    <FileDown
                      size={18}
                      strokeWidth={1.5}
                      className="text-gray-500 hover:text-black cursor-pointer dark:hover:text-white"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent><p>Resume</p></TooltipContent>
              </Tooltip>
            </div>
          </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;