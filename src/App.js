import { useContext, useState } from "react"
import { Hello } from "./components/Hello"
import { Hiii } from "./components/Hiii"
import { themeContext } from "./context/themeContext"


export const App = () => {

  const {toggleTheme, themeToggleBtn} = useContext(themeContext);
  

  return (
    <div>
      <button onClick={toggleTheme}>{themeToggleBtn}</button>
      <Hello />
      <Hiii />
    </div>
  )
}
