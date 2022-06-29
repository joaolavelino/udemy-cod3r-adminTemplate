import useAppData from "../../data/hook/useAppData";
import { IconSun, IconMoon } from "../icons";

interface ThemeToggleProps {}

export default function ThemeToggle(props: ThemeToggleProps) {
  const ctx = useAppData();

  return (
    <div
      onClick={ctx.toggleTheme}
      className={`flex w-12 h-7 bg-yellow-200 dark:bg-gray-700 rounded-full `}
    >
      <div className=" flex items-center justify-center w-7 h-7 rounded-full dark:translate-x-5 transition-transform bg-yellow-400 dark:bg-gray-500 cursor-pointer">
        <div className="dark:hidden text-yellow-900">{IconSun}</div>
        <div className="hidden dark:flex text-white ">{IconMoon}</div>
      </div>
    </div>
  );
}
