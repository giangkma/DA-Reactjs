import React from "react";
import { bannerImg } from "../../../assets/images";
import { UnderlineButton } from "../../../components/buttons";
const TABS = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const Header = () => {
  return (
    <div>
      <div className="bg-[#FBEBB5] py-10">
        <div className="grid grid-cols-3 ">
          <div className="col-span-2 flex gap-10 justify-end">
            {TABS.map((item, index) => {
              return <div key={index}>{item.name}</div>;
            })}
          </div>
          <div className="col-span-1 flex justify-center">1</div>
        </div>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-1"></div>
          <div className="flex-[3] flex flex-col items-start">
            <h1 className="max-w-[440px] xl:text-[64px] lg:[text-40px] md:[text-32px] sm:[text-2xl] font-medium">
              Rocket single seater
            </h1>
            <UnderlineButton onClick={() => {}} title="Shop Now" />
          </div>
          <div className="flex-[4]">
            <img src={bannerImg} alt="sd" />
          </div>
        </div>
      </div>
    </div>
  );
};
