import { useState } from "react"
import { themeContext } from "./themeContext"
import { FaToggleOn, FaToggleOff } from "react-icons/fa6";


const dayTheme = {
    color: 'black',
    backgroundColor: 'white'
}

const nightTheme = {
    color: 'white',
    backgroundColor: 'black'
}

let themeToggleBtn = <FaToggleOff style={{ fontSize: '30px' }} />;

export const ThemeProvider = ({ children }) => {

    function toggleThemeFn() {
        if (theme.backgroundColor === 'white') {
            setTheme(nightTheme);
            themeToggleBtn = <FaToggleOn style={{ fontSize: '30px' }} />
        }
        else {
            setTheme(dayTheme);
            themeToggleBtn = <FaToggleOff style={{ fontSize: '30px' }} />
        }
    }

    const [theme, setTheme] = useState(dayTheme);

    return (
        <themeContext.Provider value={{ theme, themeToggleBtn, toggleThemeFn }}>
            {children}
        </themeContext.Provider>
    )
}