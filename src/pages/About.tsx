import AboutLanding from '../components/aboutUs/aboutLanding';
import InfoContact from '../components/contact/infoContact';
import Footer from '../components/footer/Footer';
import ScrollToTop from '../components/ScrollToTop';

const About = () => {
  return (
    <>
      <AboutLanding/>
      {/* <Members/> */}
      <InfoContact/>
      <Footer/>
      <ScrollToTop/>
    </>
  );
};

export default About;
