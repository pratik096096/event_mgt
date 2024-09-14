import React from "react";

export default function Footer() {
  return (
    <div  data-aos="fade-up"
    data-aos-duration="2000">
      <div className="bg-black w-full">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 py-12 md:py-20 lg:py-24 px-5">
          <div>
            <p className="text-center font-bold text-3xl md:text-5xl text-white font-serif">
              sky<span className="text-[#fff]">Island</span>
            </p>
          </div>
          <div>
              <ul className="flex flex-wrap items-center text-base lg:text-lg font-medium text-white justify-center gap-6 md:gap-10 lg:gap-14">
                <li>
                  <a href="#">Home</a>
                </li>
                
              </ul>
            </div>
            <div>
            <ul className="flex flex-wrap items-center  font-medium  justify-center gap-8 md:gap-10 lg:gap-14 text-white text-2xl md:text-4xl grid-flow-col">
              <li>
                <a href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              
            </ul>
          </div>
          <span className="text-center text-white">
            © 2024 skyIsland. All Rights Reserved.
          </span>
            </div>

        </div>
      </div>
  );
}
