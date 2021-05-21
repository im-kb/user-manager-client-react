import SearchBar from "./SearchBar";

const Header = ({input, onChange, setInput}) => {
    return (
        <div className="navbar navbar-expand-md navbar-light bg-light" role="navigation">
            <a className="navbar-brand" href="#">User menager</a>

            {/*<SearchBar input={input} onChange={onChange} setInput={setInput}/>*/}

        </div>
    )
}
export default Header
