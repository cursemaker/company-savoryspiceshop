import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { FaUser } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { IoSearchOutline } from 'react-icons/io5';
import { PiCurrencyCircleDollar } from 'react-icons/pi';
import type { IconType } from 'react-icons';
import { BsBasket3 } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';

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
    { name: 'Stores', icon: 'GrMapLocation' },
    { name: 'Loyalty Club', icon: 'PiCurrencyCircleDollar' },
    { name: 'My Account', icon: 'FaUser' },
  ];
  return (
    <header className='sticky top-0 max-w-screen z-[999]'>
      <div title='header-wrapper' className='bg-[#153961] w-full relative z-[700]'>
        <div
          title='site-header-main'
          className='p-[20px_10px_10px] mx-auto max-w-[1400px] md:min-h-[102px] max-h-[72px] flex items-center max-md:justify-center min-w-full'>
          <div
            title='site-header-main-content'
            className='flex item flex-nowrap max-md:justify-center md:justify-between w-full'>
            <Link
              href={'/'}
              title='site-header-logo'
              className='relative aspect-[85/16] max-w-[170px] mr-[25px] h-auto flex items-center'>
              <Image
                src='https://www.savoryspiceshop.com/cdn/shop/files/Savory_logo_web_996x187.png'
                alt='logo'
                width={170}
                height={32}
                layout='responsive'
                objectFit='fill'
              />
            </Link>
            <div title='live-search-bar' className='mr-[2.5rem] max-md:hidden flex items-center'>
              <div className='h-[40px]'>
                <input
                  type='text'
                  placeholder='Search for spices, blends, recipes and more...'
                  className='w-[450px] h-full bg-white text-[#4d4d4d] font-bold leading-[1.15] p-[15px_10px]'
                />
              </div>
              <button type='button' className='h-10 w-10 flex items-center justify-center bg-white'>
                <IoSearchOutline className='text-[20px] font-bold text-[#AEAEAE]' />
              </button>
            </div>
            <div className='flex'>
              {headerButtons.map((item: HeaderButton, index: number) => {
                const IconComponent = headerIconMap[item.icon];
                return (
                  <div
                    title={`${item.name.toLowerCase()}-btn`}
                    key={index}
                    className='md:px-[15px] px-1 flex items-center hover:opacity-5'>
                    <Link href='' className='text-white font-normal text-xl flex justify-center items-center'>
                      <div className='px-1 *:text-[18px]'>{IconComponent && <IconComponent size={24} />}</div>
                      <span className='max-md:hidden'>{item.name}</span>
                    </Link>
                  </div>
                );
              })}
              <div title='carts' className='flex justify-end'>
                <div
                  title='cart-btn'
                  className='md:px-[15px] px-1 flex max-md:justify-end items-center hover:opacity-5'>
                  <Link href='' className='text-white font-normal text-xl flex justify-center items-center'>
                    <div className='px-1 *:text-[18px]'>
                      <BsBasket3 />
                    </div>
                    <span className='max-md:hidden'>Cart</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div title='site-navigation-wrapper' className='bg-[#1F5188] '>
          <div
            title='site-navigation-main'
            className='md:h-[56px] h-10 max-w-[1400px] mx-auto flex justify-between text-white'>
            <div className='flex flex-1 items-center justify-start'>
              <Link
                href={'/all-products'}
                className='md:p-[10px_15px] p-[8px_12px] text-xl flex items-center justify-center hover:text-blue-400 hover:font-semibold'>
                Spice & Blends
              </Link>
              <Link
                href='/about-us'
                className='p-[10px_15px] text-xl flex items-center hover:text-blue-400 hover:font-semibold'>
                About Us
              </Link>
              <Link
                href='/teams'
                className='p-[10px_15px] text-xl flex items-center hover:text-blue-400 hover:font-semibold'>
                Our Teams
              </Link>
            </div>
            <div className='max-md:hidden flex items-center gap-2 text-[17px] mr-32'>
              <FaLocationDot /> <span className='underline'>Set my spice store for info or pick up</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
