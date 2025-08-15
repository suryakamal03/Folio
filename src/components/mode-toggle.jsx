import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
  const audio = new Audio('/public/mixkit-classic-click-1117.wav');
  audio.volume = 1; // Adjust volume
  audio.play();
  setTheme(theme === 'light' ? 'dark' : 'light');
};


  return (
    <Button
  variant="ghost"
  size="icon"
  onClick={toggleTheme}
  aria-label=""
  className="transition-colors duration-500 border-none bg-transparent hover:bg-transparent text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
> <Tooltip>
    <TooltipTrigger>
  <Sun className="h-[1.2rem] w-[1.2rem] transition-transform duration-100 dark:hidden " />
  <TooltipContent><p>Light Mode</p></TooltipContent>
    </TooltipTrigger>
</Tooltip>
<Tooltip>
    <TooltipTrigger>
  <Moon className="hidden h-[1.2rem] w-[1.2rem] transition-transform duration-100 dark:block " />
  <TooltipContent><p>Dark Mode</p></TooltipContent>
    </TooltipTrigger>
</Tooltip>
</Button>
  );
}
