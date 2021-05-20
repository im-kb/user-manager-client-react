import SearchBar from "./SearchBar";

const Header = ({title}) => {
    return (
        <div className="navbar navbar-expand-md navbar-light bg-light" role="navigation">
            <a className="navbar-brand" href="#">User menager</a>
            <input type="text" id="example-input1-group2" name="example-input1-group2" className="form-control"
                   placeholder="Search for user" v-model="search"/>
            <SearchBar/>
        </div>
    )
}
export default Header
