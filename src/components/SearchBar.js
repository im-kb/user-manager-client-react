import React from 'react';

const SearchBar = ({keyword, setKeyword}) => {
    return (
        <div className="input-group">
            <input type="text"
                   className="form-control"
                   key="random1"
                   value={keyword}
                   placeholder={"Search for user"}
                   onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="button" className="btn btn-effect-ripple btn-primary">
                <i className="fa fa-search"></i>
            </button>
        </div>
    );
}


export default SearchBar

