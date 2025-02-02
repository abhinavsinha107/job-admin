import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/img/logo/logo.png";

const Preloader = () => {
  return (
    <>
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="flex flex-col items-center justify-center text-center loading-icon">
              <Image
                style={{
                  width: "100px",
                  height: "auto",
                }}
                src={logo}
                alt="logo"
              />
              <div>
                <div className="preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
