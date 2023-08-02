import React, { useState } from 'react'
import Header from '../../components/header/Header';
import NavBar from '../../components/navbar/NavBar';
import SearchContainer from '../../components/seachContainer/SearchContainer';
import "./List.scss";
import { useLocation } from 'react-router-dom';

const List = () => {
  const location = useLocation();


  return (
    <div>
      <NavBar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="searchBox">
              <SearchContainer location={location} />
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