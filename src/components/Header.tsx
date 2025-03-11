import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaUser } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { TfiMapAlt } from "react-icons/tfi";
import type { IconType } from "react-icons";
import { BsBasket3 } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function HeaderNav() {
  const headerIconMap: { [key: string]: IconType } = {
    GrMapLocation: GrMapLocation,
    PiCurrencyCircleDollar: PiCurrencyCircleDollar,
    FaUser: FaUser,
  };
  interface HeaderButton {
    name: string;
    icon: keyof typeof headerIconMap;
  }

  const headerButtons = [
    { name: "Stores", icon: "GrMapLocation" },
    { name: "Loyalty Club", icon: "PiCurrencyCircleDollar" },
    { name: "My Account", icon: "FaUser" },
  ];
  return (
    <header className="sticky top-0 max-w-screen z-50">
      <div title="header-wrapper" className="bg-[#153961] w-full relative z-[700]">
        <div
          title="site-header-main"
          className="p-[20px_10px_10px] mx-auto max-w-[1400px] min-h-[102px] flex items-center w-full">
          <div title="site-header-main-content" className="flex item flex-nowrap justify-center">
            <div
              title="site-header-logo"
              className="relative aspect-[85/16] max-w-[170px] mr-[25px] h-auto flex items-center">
              <Image
                src="https://www.savoryspiceshop.com/cdn/shop/files/Savory_logo_web_996x187.png"
                alt="logo"
                width={170}
                height={32}
                layout="responsive"
                objectFit="fill"
              />
            </div>
            <div title="live-search-bar" className="mr-[2.5rem] flex">
              <div className="h-[40px]">
                <input
                  type="text"
                  placeholder="Search for spices, blends, recipes and more..."
                  className="w-[450px] h-full bg-white text-[#4d4d4d] font-bold leading-[1.15] p-[15px_10px]"
                />
              </div>
              <button type="button" className="h-full w-10 flex items-center justify-center bg-white">
                <IoSearchOutline className="text-[20px] font-bold text-[#AEAEAE]" />
              </button>
            </div>
            {headerButtons.map((item: HeaderButton, index: number) => {
              const IconComponent = headerIconMap[item.icon];
              return (
                <div title={`${item.name.toLowerCase()}-btn`} key={index} className="px-[15px] flex items-center">
                  <Link href="" className="text-white font-normal text-xl flex justify-center items-center">
                    <div className="px-2 *:text-[18px]">{IconComponent && <IconComponent size={24} />}</div>
                    <span>{item.name}</span>
                  </Link>
                </div>
              );
            })}
          </div>
          <div title="carts" className="flex justify-end">
            <div title="cart-btn" className="px-[15px] flex items-center">
              <Link href="" className="text-white font-normal text-xl flex justify-center items-center">
                <div className="px-2 *:text-[18px]">
                  <BsBasket3 />
                </div>
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
        <div title="site-navigation-wrapper" className="bg-[#1F5188] ">
          <div title="site-navigation-main" className="h-[56px] max-w-[1400px] mx-auto flex justify-between">
            <div className="flex flex-1 items-center justify-start">
              <div className="p-[10px_15px] text-xl flex items-center">
                Spice & Blends <MdKeyboardArrowDown />
              </div>
              <div className="p-[10px_15px] text-xl flex items-center">About Us</div>
              <div className="p-[10px_15px] text-xl flex items-center">Our Teams</div>
            </div>
            <div className="flex items-center gap-2 text-[17px] mr-32">
              <FaLocationDot /> <span className="underline">Set my spice store for info or pick up</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
