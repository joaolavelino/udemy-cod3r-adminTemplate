import { useState } from "react";
import useAppData from "../../data/hook/useAppData";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

interface LayoutProps {
  title: string;
  subtitle: string;
  children: any;
}

export default function Layout(props: LayoutProps) {
  const ctx = useAppData();

  return (
    <div className={` ${ctx.theme} flex h-screen w-screen`}>
      <Sidebar />
      <div className={`flex flex-col bg-gray-300 dark:bg-gray-800 w-full p-7`}>
        <Header title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}
