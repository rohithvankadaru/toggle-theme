import { useState } from "react"
import { themeContext } from "./themeContext"
import { FaToggleOn,  FaToggleOff} from "react-icons/fa6";

export const ThemeProvider = ({children}) => {

    const dayTheme = {
        color: 'black',
        backgroundColor: 'white',
    }

    const nightTheme = {
        color: 'white',
        backgroundColor: 'black',
    }

    function toggleTheme(){
        if (theme.backgroundColor === 'white') {
            setTheme(nightTheme);
            setThemeToggleBtn(<FaToggleOn />)
        } else {
            setTheme(dayTheme);
            setThemeToggleBtn(<FaToggleOff />)
        }
    }

    const[theme, setTheme] = useState(dayTheme);
    const[themeToggleBtn, setThemeToggleBtn] = useState(<FaToggleOff />);

    return(
        <themeContext.Provider value={{theme, toggleTheme, themeToggleBtn}}>
            {children}
        </themeContext.Provider>
    )
}