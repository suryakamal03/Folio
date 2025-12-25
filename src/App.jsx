import React, { useState } from "react";
import { Github, Linkedin, Mail, Sun, FileDown, Loader, ArrowUpRight, ArrowRight, Plus, Minus } from "lucide-react";
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

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-center px-4 sm:px-6 md:px-10 py-6 sm:py-10">
        <div className="flex flex-col h-full w-full max-w-[640px]">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <div className="flex items-center animate-slide-up">
              
              <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
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
                  className="text-[10px] font-bold text-white bg-black px-3 py-1.5 rounded-full animate-slide-up dark:bg-neutral-800"
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

              {/* Ontrackr Card */}
              <div className="animate-slide-up [animation-duration:.7s]">
                <div
                  className="group rounded-xl border border-gray-200 dark:border-neutral-800 flex justify-center items-start flex-col p-4 sm:px-3 sm:py-5 hover:border-black dark:hover:border-neutral-400 transition-all duration-200 cursor-pointer"
                  onClick={() => {
                    setSelectedProject("ontrackr");
                    setreadMore(true);
                  }}
                >
                  <div className="flex items-start justify-between w-full mb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center flex-1 gap-2">
                      <p className="text-black font-semibold text-sm dark:text-neutral-50">
                        Ontrackr
                      </p>
                      <span className="flex bg-gray-100 justify-center rounded-xl px-2 py-0.5 h-5 text-xs font-medium dark:bg-neutral-800 w-fit">
                        In Progress
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:rotate-[45deg] flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
                    A TypeScript-powered project management platform with Firebase authentication, real-time collaboration, 
                    AI-assisted task assignment, and automated notifications for developer teams.
                  </p>
                </div>
              </div>

              {/* College Advisor Card - IMPROVED */}
              <div className="animate-slide-up [animation-duration:.7s]">
                <div
                  className="group rounded-xl border border-gray-200 dark:border-neutral-800 flex justify-center items-start flex-col p-4 sm:px-3 sm:py-5 hover:border-black dark:hover:border-neutral-400 transition-all duration-200 cursor-pointer"
                  onClick={() => {
                    setSelectedProject("collegeAdvisor");
                    setreadMore(true);
                  }}
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
      </div>
    </ThemeProvider>
  );
}

export default App;