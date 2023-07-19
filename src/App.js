import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import {Helmet} from "react-helmet";

function App() {
  return (
    
    <div className='pt-2'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>YumCart</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Food delivery website" />
      </Helmet>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
