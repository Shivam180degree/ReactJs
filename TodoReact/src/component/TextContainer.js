import { useState } from "react";

const TextContainer = (props) => {
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleClick = () => {
        console.log("Clicked");
        const upperCaseText = text.toUpperCase();
        setText(upperCaseText);
        console.log(`UpperCase: ${upperCaseText}`)
    }
    return (
        <div>
            <div className='textContainer'>Changed Text into UpperCase:</div>
            <textarea id="story" name="story" value={text} onChange={handleChange}></textarea>
                <button onClick={() => handleClick()}>Change to UpperCase</button>
        </div>
    );
}

export default TextContainer;