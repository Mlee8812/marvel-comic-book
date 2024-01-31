import "../styles/Search.scss";
import {useState} from "react";

export default function Search() {
    const [characterName, setCharacterName] = useState("");
    const [characterData, setCharacterData] = useState(null);
    const [comicData, setComicData] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        getCharacterData();

    };

    const getCharacterData = () => {

    }
    const handleChange = (event) => {
        setCharacterName(event.target.value);
    };
    const handleReset = () => {

    };

    return (
        <>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    placeholder="Enter Character Name"
                    type="text"
                    onChange={handleChange}
                />
                <div className="button">
                    <button type="submit">Character Name</button>
                    <button type="reset" className="reset" onClick={handleReset}>
                        Reset</button>
                </div>
            </form>
        </>
    );
}