import { IconBell, IconHome, IconLogout, IconSettings } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  return (
    <aside
      className={`flex flex-col
      bg-gray-200 text-gray-700 
      dark:bg-gray-900 dark:text-gray-300 
    `}
    >
      <div
        className={`h-20 w-20 bg-gradient-to-r from-indigo-500 to-sky-800 flex justify-center items-center`}
      >
        <Logo />
      </div>
      <ul className={`flex flex-col flex-grow gap-3 w-20 `}>
        <div className="flex flex-col flex-grow">
          <MenuItem url="/" text="Home" icon={IconHome} />
          <MenuItem url="/settings" text="Settings" icon={IconSettings} />
          <MenuItem url="/notifications" text="Notifications" icon={IconBell} />
        </div>
        <MenuItem
          onClick={() => console.log("logout")}
          text="Logout"
          icon={IconLogout}
          className={`text-red-600 dark:text-red-400 hover:bg-red-400 dark:hover:bg-red-400 hover:text-white hover:dark:text-white`}
        />
      </ul>
    </aside>
  );
}
