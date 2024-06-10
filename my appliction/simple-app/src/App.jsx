import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [zoomed, setZoomed] = useState(false);

  const handleZoom = () => {
    setZoomed(!zoomed);
    document.body.classList.toggle("zoomed");
  };

  return (
    <div className="">
      <div className="h-12 bg-black text-white mt-0">
        <div className="ml-20 mr-10 pb-0.5 pt-2">
          <div className="mr-867 ml-267 pt-6.75 pb-6.75 flex gap-8 font-outfit">
            <div>A I . G E N</div>
            <div>Features</div>
            <div>Roadmap</div>
            <div>Tokenomics</div>
            <div className="ml-auto flex gap-5">
              <button
                className="pl-9 pr-9 bg-transparent border border-orange-100 text-orange-100 rounded-sm pt-1 pb-1"
                onClick={handleZoom}
              >
                Whitepaper
              </button>
              <button
                className="pl-9 pr-9 bg-customPurple text-white pt-1 pb-1 rounded-sm"
                onClick={handleZoom}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
