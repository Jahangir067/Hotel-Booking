import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Featured from '../../components/Featured/Featured';
import PropertyList from '../../components/PropertyList/PropertyList';
import FeaturedProperty from '../../components/FeaturedProperty/FeaturedProperty';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
           <Navbar />
           <Header />

           <div className="homeContainer">
             <Featured />
             <h1 className="homeTitle text-2xl font-bold">Browse by property type</h1>
             <PropertyList></PropertyList>
             <h1 className="homeTitle text-2xl font-bold">Homes guests love</h1>
             <FeaturedProperty></FeaturedProperty>
             <MailList></MailList>
             <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;