import { createContext, useState } from "react";

type Theme = "dark" | "";

interface AppProviderProps {
  theme?: Theme;
  toggleTheme?: () => void;
}

const AppContext = createContext<AppProviderProps>({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "" : "dark");
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
