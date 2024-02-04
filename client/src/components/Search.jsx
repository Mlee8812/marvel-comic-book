import { useState } from "react";
import axios from 'axios';
import "../styles/Search.scss";
import Characters from "./Characters";
import Comics from "./Comics";

export default function Search() {
    const [characterData, setCharacterData] = useState(null);
    const [comicData, setComicData] = useState(null);
    const [characterName, setCharacterName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        getCharacterData();
    };

    const getCharacterData = async () => {
        try {
            const response = await axios.post('http://localhost:8080/', { characterName });
            setCharacterData(response.data);
            setComicData(null);
        } catch (error) {
            console.error("Error fetching character data:", error);
        }
    };

    const getComicData = async (characterId) => {
        try {
            const response = await axios.post(`http://localhost:8080/${characterId}`);
            setComicData(response.data);
            window.scrollTo({ top: 0, left: 0 });
        } catch (error) {
            console.error("Error fetching comic data:", error);
        }
    };


    const handleChange = (event) => {
        setCharacterName(event.target.value);
    };

    const handleReset = () => {
        setCharacterName("");
        setCharacterData(null);
        setComicData(null);
    };

    return (
        <>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter character name"
                    onChange={handleChange}
                />
                <div className="buttons">
                    <button type="submit">Get Character Info</button>
                    <button type="reset" className="reset" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </form>

            {
                !comicData && characterData?.data?.results?.length > 0 && (
                    <Characters data={characterData.data.results} onClick={getComicData} />
                )
            }

            {
                comicData?.data?.results?.length > 0 && (
                    <Comics data={comicData.data.results} onClick={() => {}} />
                )
            }

        </>
    );
}