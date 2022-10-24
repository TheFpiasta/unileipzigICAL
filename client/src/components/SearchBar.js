import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ addMods,placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="search">
            <div className="searchInputs row ">
                <input className="col-10 border-0 shadow-none"
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon d-flex col-2 border-0 justify-content-center">
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>

                {filteredData.length != 0 && (
                    <div className="dataResult">
                        {filteredData.slice(0, 15).map((value, key) => {
                            return (
                                <a className="dataItem text-decoration-none overflow-hidden"  target="_blank">
                                    <p className="text-decoration-none overflow-hidden" onClick={e => addMods(value.name)}>{value.name} </p>
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;