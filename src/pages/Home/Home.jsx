import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homePageContainer">
        <Featured/>
      </div>
    </div>
  )
}

export default Home;