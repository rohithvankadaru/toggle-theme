import { useContext, useState } from "react"
import { Hello } from "./components/Hello"
import { Hiii } from "./components/Hiii"
import { themeContext } from "./context/themeContext"


export const App = () => {

  const { themeToggleBtn, toggleThemeFn } = useContext(themeContext);

  return (
    <div>
      <span onClick={toggleThemeFn}>{themeToggleBtn}</span>
      <Hello />
      <Hiii />
    </div>
  )
}
