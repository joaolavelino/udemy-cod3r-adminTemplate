import useAppData from "../../data/hook/useAppData";
import ThemeToggle from "./ThemeToggle";
import Title from "./Title";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <Title title={props.title} subtitle={props.subtitle} />
    </div>
  );
}
