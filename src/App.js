import Search from "./components/molecules/search/Search";
import CardGame from "./components/organisms/cards/CardGame";
import CardLive from "./components/organisms/cards/CardLive";
import CardMenu from "./components/organisms/cards/CardMenu";
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
          <Search/>
          <CardSport/>
          <CardGame/>
          <CardTv/>
          <CardLive/>
          <CardMenu/>
        </div>
        <div className="w-[80%] bg-[#222327] rounded-tl-3xl mb-9">
          <div className="p-10">
              <div>
                <Slider/>
              </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;