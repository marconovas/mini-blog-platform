import FeatureSection from "../components/Home/FeatureSection.jsx";
import HeroSection from "../components/Home/HeroSection.jsx";
import Navigation from "../components/layout/navBar.jsx";

function Home () {
    return(
        <>
            <Navigation/>
            <HeroSection/>
            <FeatureSection/>
        </>
    )
}

export default Home;