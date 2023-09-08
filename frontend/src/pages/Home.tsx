import Navbar from "../components/Navbar";
import HeroImg from "../assets/banner.png";
import CheckCircleSolidIcon from "../assets/circle-check-solid.svg";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#0A0219] flex justify-between py-16 px-12 h-full max-h-screen">
        <div className="max-w-[50%] mt-8">
          <h1 className="text-white text-7xl">
            Craft, mint, and shape NFT storytelling!
          </h1>
          <p className="text-white text-xl max-w-[80%] pt-8">
            Experience the future of storytelling with NFTs on the Internet
            Computer Protocol. Create unique narratives, engage your audience,
            and redefine the way stories are crafted and valued. Join us in
            crafting this story while earning
          </p>
        </div>
        <div className="mx-4">
          <img src={HeroImg} className="w-full" alt="hero-img" />
        </div>
      </div>
      <div id="how-to" className="mt-16 text-center">
        <h1>How It Works</h1>
        <div className="flex mx-auto mt-8 max-w-[60%] justify-between items-center">
          <div>
            <p className="flex items-center gap-x-2 text-xl mb-8">
              <img src={CheckCircleSolidIcon} className="h-4" alt="icon" />{" "}
              Select your Ai model
            </p>
            <p className="flex items-center gap-x-2 text-xl mb-8">
              <img src={CheckCircleSolidIcon} className="h-4" alt="icon" />
              Choose the next thing
            </p>
            <p className="flex items-center gap-x-2 text-xl mb-8">
              <img src={CheckCircleSolidIcon} className="h-4" alt="icon" />
              Move on to the next stuff
            </p>
            <p className="flex items-center gap-x-2 text-xl mb-8">
              <img src={CheckCircleSolidIcon} className="h-4" alt="icon" />
              And more and more stuff
            </p>
            <p className="flex items-center gap-x-2 text-xl mb-8">
              <img src={CheckCircleSolidIcon} className="h-4" alt="icon" />
              And more and more stuff
            </p>
          </div>
          {/* This should be a gif demonstrating how it works */}
          <img src={HeroImg} className="h-[400px] rounded-2xl" alt="hero-img" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
