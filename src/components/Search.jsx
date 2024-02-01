import "../styles/Search.scss";
import {useState} from "react";
import md5 from "md5";

export default function Search() {
    const [characterName, setCharacterName] = useState("");
    const [characterData, setCharacterData] = useState(null);
    const [comicData, setComicData] = useState(null);

    const publicKey = process.env.MARVEL_PUBLIC_KEY;
    const privateKey = process.env.MARVEL_PRIVATE_KEY;
    const handleSubmit = (event) => {
        event.preventDefault();
        getCharacterData();
    };
    const getCharacterData = () => {
        setCharacterData(null);
        setComicData(null);

        const timeStamp = new Date().getTime();
        const hash = generateHash(timeStamp);

        const url = 'https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}&nameStartsWith=${characterName}&limit=100'

        fetch(url).then(response => response.json())
            .then((result) => {
                setCharacterData(result.data);
                console.log(result);
        })
            .catch(() => {
                console.log("error while getting character data");
            });
    };

    const generateHash = (timeStamp) => {
        return md5(timeStamp + privateKey + publicKey);
    };
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
                        Reset
                    </button>
                </div>
            </form>

            {!comicData && characterData && characterData.results[0] && (
            <Characters data={characterData.results} onclick={getComicdata} />
                )}
        </>
    );
}