import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Resume from '../components/Resume';




function Container() {
  
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const handlePageChange = (page) => { 
    setCurrentPage(page)
  }

  const [hoverActive, setHoverActive] = useState(10)

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    else if (currentPage === "Portfolio") {
      return <Portfolio hoverActive={hoverActive} setHoverActive={setHoverActive}
        />;
    }
   else  if (currentPage === "Contact") {
      return <Contact />;
    } else {
    return <Resume />;
    }
  };


  return (
    <div>
      <Header 
      handlePageChange={handlePageChange} currentPage={currentPage} />
      <Container renderPage={renderPage} />
      <Footer />
    </div>
  )

};

export default Container;