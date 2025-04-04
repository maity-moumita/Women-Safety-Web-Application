import Header from "@/components/Header";
import MovingSentence from "@/components/MovingSentence";
import Information from "@/components/Information";
import Features from "@/components/Features";
import ExploreFeature from "@/components/ExploreFeatures";
import AboutUs from "@/components/AboutUs";
import FrequentlyAskedQuestions from "@/components/FAQ";
import AboutAlertAngel from "@/components/AboutAlertAngel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <>
  <Header />
  <MovingSentence />
  <Information />
  <Features />
  <ExploreFeature />
  <AboutUs />
  <FrequentlyAskedQuestions />
  <AboutAlertAngel/>
  <Footer />
  </>
  );
}
