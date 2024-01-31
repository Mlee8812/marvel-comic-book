import "../styles/Search.scss";

export default function Search() {
    const handleSubmit = () => {

    };
    const handleChange = () => {

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
                    <button type="reset" className="reset" onClick={handleReset}
                </div>
            </form>
        </>
    );
}