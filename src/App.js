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
import FootTime from "./components/organisms/FootTime";
import ListImg from "./components/organisms/ListImg";
import Navbar from "./components/organisms/Navbar";
import Slider from "./components/organisms/Slider";
import UFC from "./components/organisms/UFC";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex mt-[100px] justify-center grid grid-cols-10">
        <div className="col-span-10 xl:col-span-2 pl-10 pr-8 flex justify-between  xl:flex-col xl:justify-around mt-[-36px] hidden xl:flex">
          <div className="hidden xl:flex">
            <Search />
          </div>
          <div className="col-span-2 mt-10 xl:mt-0">
            <CardSport />
          </div>
          <div className="col-span-2 mt-10 xl:mt-0">
            <CardGame />
          </div>
          <div className="col-span-2 mt-10 xl:mt-0">
            <CardTv />
          </div>
          <div className="mt-10 xl:mt-0">
            <CardLive />
          </div>
          <div className="hidden xl:block">
            <CardMenu />
          </div>
        </div>

        <div className=" col-span-12 xl:col-span-8 bg-[#222327] rounded-tl-3xl mb-9 px-10 py-9">
          <div className="flex grid grid-cols-10 ">
            <div className="col-span-12 lg:col-span-8 pr-0 lg:pr-9">
              <Slider />
              <FootTime />
              <ListImg />
              <UFC />
            </div>
            <div className="col-span-10 lg:col-span-2 flex flex-col lg:justify-between mt-8 lg:mt-2 ">
              <div className="  grid grid-cols-11 flex flex-col sm:flex-row sm:justify-between mb-8 xl:mb-0">
                <div className="col-span-11 sm:col-span-5 sm:h-full lg:col-span-11">
                  <CardReg />
                </div>
                <div className="">

                </div>
                <div className="col-span-11 sm:col-span-5 lg:hidden">
                  <Banner />
                </div>
              </div>
              <div className="w-[100%]">
                <CardList />
              </div>
              <div className="hidden lg:block">
                <Banner />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" pl-10 pr-8  mt-[-36px] xl:hidden ">
        <div className="grid grid-cols-11 flex flex-col justify-between xs:flex-row xs:justify-around">
          <div className=" col-span-11 sm:col-span-5">
            <div className=" mt-10 xl:mt-0">
              <CardSport />
            </div>
            <div className=" mt-10 xl:mt-0">
              <CardGame />
            </div>
            <div className=" mt-10 xl:mt-0">
              <CardTv />
            </div>
            <div className="mt-10 xl:mt-0">
              <CardMenu />
            </div>
          </div>
          <div className=" sm:col-span-1"></div>
          <div className="col-span-11 sm:col-span-5 mt-10 xl:mt-0 flex-end">
            <CardLive />
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
