import { useContext } from "react"
import { themeContext } from "../context/themeContext"


export const Hiii = () => {
    
    const{theme} = useContext(themeContext);
    return(
        <div style={theme}>
            <h1>I am Hiii Component</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <hr />
        </div>
    )
}