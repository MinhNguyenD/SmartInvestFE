import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState("dark");
  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          if (mode === "dark") {
            setTheme("light");
            setMode("light");
          } else if (mode === "light") {
            setTheme("dark");
            setMode("dark");
          }
        }}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
