import SearchBar from "./SearchBar";

const Header = ({keyword, setKeyword}) => {
    return (
        <div className="navbar navbar-expand-md navbar-light bg-light" role="navigation">
            <a className="navbar-brand" href="#">User menager</a>

            <SearchBar keyword={keyword}setKeyword={setKeyword}></SearchBar>

        </div>
    )
}
export default Header
