import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home({goLogin}) {

  return (
    <div>

      <Navbar goLogin={goLogin}/>

      <Hero/>

    </div>
  );

}

export default Home;