import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
export function ModeToggle() {
  const { theme, setTheme } = useTheme();

const toggleTheme = () => {
  const audio = new Audio('/mixkit-on-or-off-light-switch-tap-2585.wav'); // no /public here
  audio.volume = 1; 
  audio.currentTime = 0.1;
  audio.play();
  setTheme(theme === 'light' ? 'dark' : 'light');
};



  return (
  <Button
    variant="ghost"
    size="icon"
    onClick={toggleTheme}
    aria-label="Toggle theme"
    className="relative transition-colors duration-500 border-none bg-transparent hover:bg-transparent text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center justify-center"
  >
    {/* Sun icon with tooltip */}
    <Tooltip>
      <TooltipTrigger asChild>
        <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden transform translate-x-[0.5px]" />
      </TooltipTrigger>
      <TooltipContent><p>Light Mode</p></TooltipContent>
    </Tooltip>

    {/* Moon icon with tooltip */}
    <Tooltip>
      <TooltipTrigger asChild>
        <Moon className="hidden h-[1.2rem] w-[1.2rem] dark:block transform -translate-x-[0.5px]" />
      </TooltipTrigger>
      <TooltipContent><p>Dark Mode</p></TooltipContent>
    </Tooltip>
  </Button>
);

}
