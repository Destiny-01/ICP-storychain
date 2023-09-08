import Navbar from "../components/Navbar";
import HeroImg from "../assets/banner.png";
import Logo from "../assets/logo.png";
import CheckCircleSolidIcon from "../assets/circle-check-solid.svg";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#0A0219] hero md:flex justify-between py-8 md:py-16 px-4 md:px-12 h-full md:max-h-screen">
        <div className="md:max-w-[50%] md:mt-8">
          <h1 className="text-white text-5xl md:text-7xl">
            Craft, mint, and shape NFT storytelling!
          </h1>
          <p className="text-white text-xl md:max-w-[80%] pt-8">
            Experience the future of storytelling with NFTs on the Internet
            Computer Protocol. Create unique narratives, engage your audience,
            and redefine the way stories are crafted and valued. Join us in
            crafting this story while earning
          </p>
        </div>
        <div className="md:mx-4 md:mt-0 mt-8">
          <img src={HeroImg} className="w-full rounded-lg" alt="hero-img" />
        </div>
      </div>
      <div id="how-to" className="pt-16 px-4 text-center">
        <h1>How It Works?</h1>
        <div className="md:flex md:mx-auto mt-8 md:max-w-[70%] justify-between text-start">
          <div>
            <p className="flex gap-x-2 text-xl mb-8">
              <img
                src={CheckCircleSolidIcon}
                className="h-4 mt-1.5"
                alt="icon"
              />{" "}
              Access Our DApp through Internet Identity
            </p>
            <p className="flex gap-x-2 text-xl mb-8">
              <img
                src={CheckCircleSolidIcon}
                className="h-4 mt-1.5"
                alt="icon"
              />
              Enter your prompt
            </p>
            <p className="flex gap-x-2 text-xl mb-8">
              <img
                src={CheckCircleSolidIcon}
                className="h-4 mt-1.5"
                alt="icon"
              />
              Choose your AI model
            </p>
            <p className="flex gap-x-2 text-xl mb-8">
              <img
                src={CheckCircleSolidIcon}
                className="h-4 mt-1.5"
                alt="icon"
              />
              Mint Your NFT based image for the story
            </p>
            <p className="flex gap-x-2 text-xl mb-8">
              <img
                src={CheckCircleSolidIcon}
                className="h-4 mt-1.5"
                alt="icon"
              />
              Earn your reward and share your story
            </p>
          </div>
          {/* This should be a gif demonstrating how it works */}
          <img
            src={HeroImg}
            className="md:h-[400px]  rounded-2xl"
            alt="hero-img"
          />
        </div>
      </div>
      <div id="about" className="pt-16 px-4">
        <h1 className="text-center">What is TaleBlox All About?</h1>
        <div className="md:flex mx-auto mt-8 md:max-w-[70%] justify-between items-center">
          {/* This should be a gif demonstrating how it works */}
          <img src={Logo} className="h-[200px] rounded-2xl" alt="hero-img" />
          <div>
            <p>
              Welcome to the forefront of digital storytelling innovation! We
              are a passionate team dedicated to unlocking the boundless
              potential of storytelling through Non-Fungible Tokens (NFTs) on
              the Internet Computer Protocol (ICP).
            </p>
            <p className="mt-4">
              {" "}
              Our mission is to empower creators, authors, and artists to craft,
              mint, and share their narratives as unique digital assets. We
              believe in a future where storytelling transcends traditional
              boundaries, where immersive experiences captivate audiences, and
              where creators are fairly rewarded for their craft.
            </p>
            <p className="mt-4">
              {" "}
              Join us on this exciting journey as we reshape the landscape of
              storytelling. Explore, create, and be part of a community that's
              redefining how stories are told, shared, and cherished in the
              digital age. The future of storytelling is here, and it's yours to
              shape with us.
            </p>
            <p className="mt-4">
              {" "}
              Discover the endless possibilities of NFT storytelling on ICP
              today!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
