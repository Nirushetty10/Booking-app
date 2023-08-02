import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import "./Home.scss";
import ProprtyList from '../../components/propertList/ProprtyList';
import FeaturedProperty from '../../components/feturedProperties/FeaturedProperty';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homePageContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <ProprtyList />
        <h1 className="featuredTitle">Homes guests love</h1>
        <FeaturedProperty />
        <MailList/>
        <Footer />
      </div>
    </div>
  )
}

export default Home;