import Link from "next/link";
import { Children } from "react";

interface MenuItemProps {
  url?: string;
  text: string;
  icon: any;
  onClick?: (event: any) => void;
  className?: string;
}

export default function MenuItem(props: MenuItemProps) {
  const renderAnchor = () => {
    return (
      <a
        className={`flex flex-col items-center justify-center w-full h-20 gap-1 p-2  hover:bg-gray-300 dark:hover:bg-gray-800 transition-all ${props.className}`}
      >
        {props.icon}
        <span className={`text-xs font-light `}>{props.text}</span>
      </a>
    );
  };

  return (
    <li className={` `} onClick={props.onClick}>
      {props.url ? (
        <Link href={props.url}>{renderAnchor()}</Link>
      ) : (
        renderAnchor()
      )}
    </li>
  );
}
