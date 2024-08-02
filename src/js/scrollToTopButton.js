import React from 'react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-to-top-button" onClick={scrollToTop}>
      <img src="/path/to/your/arrow-icon.png" alt="Scroll to Top" />
    </div>
  );
};

export default ScrollToTopButton;
