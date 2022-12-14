import React, {useState} from 'react';
import { SearchBarButton } from './theme/ChangesElements';
import '../styles/SearchBar.css'

const SearchBar = (props) => {

    const { onSearch } = props;
    const [search, setSearch] = useState("");
   
    const onChange = (event) => {
        setSearch(event.target.value);
        if (event.target.value.lentgh === 0) {
            onSearch(null);
        }
    };

    const onClick = async (event) => {
        onSearch(search);
    };

    return(
        <SearchBarButton>
            <div className="searchbar-container">
                
                    <div className="searchbar">
                        <input placeholder="Buscar pokemon..." onChange={onChange}/>
                    </div>
                   
                    <div className="searchbar-btn">
                        <button onClick={onClick}>Buscar</button>
                    </div>
                
            </div>
        </SearchBarButton>
    );
};

export default SearchBar;