import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }
  if (!darkMode) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
