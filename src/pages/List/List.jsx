import React from 'react'
import Header from '../../components/header/Header';
import NavBar from '../../components/navbar/NavBar';
import SearchContainer from '../../components/seachContainer/SearchContainer';
import "./List.scss";

const List = () => {
  return (
    <div>
      <NavBar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="searchBox">
              <SearchContainer />
          </div>
          <div className="searchResult">
            hii
          </div>
        </div>
      </div>
    </div>
  )
}

export default List