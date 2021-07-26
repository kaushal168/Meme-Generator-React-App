import React, {useState, useEffect} from "react"
import "./style.css"

const MemeGenerator = () => {
    
    const [inputText, setInputText] = useState({
        topText: "",
        bottomText: ""
    })
    const [randomImg, setrandomImg] = useState("");
    const [allMemeImgs, setAllMemeImgs] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(content => setAllMemeImgs(content.data.memes))
    }, [])
    
    const handleChange = event => {
        setInputText({...inputText, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * allMemeImgs.length)
        const randMemeImg = allMemeImgs[randNum].url
        setrandomImg(randMemeImg)
    }
    
    return (
        <div>
            <form className="meme-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={inputText.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={inputText.bottomText}
                    onChange={handleChange}
                />
                <button>Generate</button>
            </form>
            
            <div className="meme">
                {randomImg === "" ? "" : <img src={randomImg} alt="" />}
                {randomImg === "" ? "" : <h2 className="top">{inputText.topText}</h2>}
                {randomImg === "" ? "" : <h2 className="bottom">{inputText.bottomText}</h2>}
            </div>
            
        </div>
    )
}

export default MemeGenerator