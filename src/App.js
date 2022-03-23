import React from "react";
import Search from "./components/molecules/search/Search";
import Banner from "./components/organisms/Banner";
import CardGame from "./components/organisms/cards/CardGame";
import CardList from "./components/organisms/cards/CardList";
import CardLive from "./components/organisms/cards/CardLive";
import CardMenu from "./components/organisms/cards/CardMenu";
import CardReg from "./components/organisms/cards/CardReg";
import CardSport from "./components/organisms/cards/CardSport";
import CardTv from "./components/organisms/cards/CardTv";
import Footer from "./components/organisms/Footer";
import Navbar from "./components/organisms/Navbar";
import Slider from "./components/organisms/Slider";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex mt-[100px] justify-center">
        <div className="w-[20%] pl-10 pr-8">
          <Search />
          <CardSport />
          <CardGame />
          <CardTv />
          <CardLive />
          <CardMenu />
        </div>
        <div className="w-[80%] bg-[#222327] rounded-tl-3xl mb-9 px-10 py-9">
          <div className="flex">
            <div className="w-[80%] pr-9">
              <Slider />
            </div>
            <div className="w-[20%]">
              <CardReg />
              <CardList />
              <Banner />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
