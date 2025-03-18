"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { displayProducts, IDisplayProducts } from "@/features/vars/displayProducts";
import { BsBasket3 } from "react-icons/bs";
import { mainCategories } from "@/features/vars/maincategory";
import { displayFeatured, IDisplayFeatured } from "@/features/vars/displayFeatured";
import { displayLogos } from "@/features/vars/displayLogos";
import { displayInstaFeeds } from "@/features/vars/displayInstaFeeds";

export default function Home() {
  const [selectedPrice, setSelectedPrice] = React.useState<Record<number, number>>({});

  return (
    <div className='max-w-screen overflow-hidden'>
      <section title='banner' className='h-[560px] w-full'>
        <div className='flex items-stretch flex-wrap max-md:flex-col'>
          <div className='md:max-w-[65%] w-full md:h-[560px] relative'>
            <Image
              src='https://www.savoryspiceshop.com/cdn/shop/files/Mar7_Web2_994x560_crop_center.jpg'
              alt=''
              width={994}
              height={560}
            />
          </div>
          <div className='md:px-20 px-8 md:max-w-[35%] flex flex-col items-start justify-center w-full md:h-[560px] h-full py-8 bg-[#B4BA74]'>
            <h1 className='font-black text-4xl leading-[43px] text-white'>Use Promo Code SPRING20</h1>
            <h2 className='m-[13.5px_0_20px] font-light text-2xl text-white'>
              Shop bold spices, fresh blends, and vibrant flavors perfect for kicking off springtime cooking.
            </h2>
            <div className='text-2xl p-[10px_20px] text-white'>
              <button className='inline-block rounded-sm border-4 border-white px-5 py-2.5 text-xl font-bold text-white hover:text-slate-200 hover:border-slate-200'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section title='shopify-section'>
        <div
          title='prduct-section-container'
          className='md:my-[4.78125rem] my-[1.875rem] sm:px-[25px] max-w-[1400px] mx-auto overflow-x-auto'>
          <div title='shopify-block' className='flex'>
            {displayProducts.map((item: IDisplayProducts, index: number) => (
              <div className='w-full max-w-sm' key={index}>
                <Link href='#' className='relative   flex justify-center'>
                  <Image
                    className='p-8 rounded-t-lg transition-opacity hover:opacity-0 duration-300 ease-in-out object-cover'
                    src={item.imgUrl1}
                    alt={item.name}
                    width={288}
                    height={240}
                  />
                  <Image
                    className='p-8 rounded-t-lg absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out object-cover'
                    src={item.imgUrl2}
                    alt={item.name}
                    width={288}
                    height={240}
                  />
                </Link>
                <div className='px-5 pb-5'>
                  <Link href='#'>
                    <h5 className='text-xl font-semibold tracking-tight max-md:h-[56px] text-gray-900'>{item.name}</h5>
                  </Link>
                  <div className='flex items-center mt-2.5 mb-5'>
                    <div className='flex items-center space-x-1 rtl:space-x-reverse'>
                      <svg
                        className='w-4 h-4 text-yellow-300'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'>
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        className='w-4 h-4 text-yellow-300'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'>
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        className='w-4 h-4 text-yellow-300'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'>
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        className='w-4 h-4 text-yellow-300'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'>
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                      <svg
                        className='w-4 h-4 text-gray-200 dark:text-gray-600'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 22 20'>
                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                      </svg>
                    </div>
                    <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3'>
                      5.0
                    </span>
                    <span className='text-xs text-green-600 font-light px-2'>{`${item.review} reviews`}</span>
                  </div>
                  <div className='px-2'>
                    <select
                      name='product-option'
                      id={`productOption${index}`}
                      className='my-1.5 w-full h-8 bg-white rounded-sm border border-gray-300 text-gray-700 sm:text-sm'
                      onChange={(e) => {
                        setSelectedPrice((prev) => ({
                          ...prev,
                          [index]: item.price[e.target.selectedIndex].price,
                        }));
                      }}>
                      {item.price.map((type, index) => (
                        <option key={index} value={type.size}>
                          {`${type.size} (Net: ${type.weight} oz)`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Link href='' className='flex items-center justify-between '>
                    <span className='w-full text-white text-gray-90 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-bas px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                      <span className='pr-2 inline-block'>
                        <BsBasket3 />
                      </span>
                      {`Add to Cart - $${selectedPrice[index] || item.price[0].price}`}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section title='category'>
        <div title='container-wrapper' className='max-w-[2200px] mx-auto'>
          <div
            title='container-grid-wrapper'
            className='max-w-[1440px] max-md:flex max-md:flex-col max-md:justify-center md:p-[75px_100px] p-[20px_36px] mx-auto'>
            <h2 className='font-bold text-black text-4xl text-center block'>
              Shop Spices, Herbs & Seasonings Online by category
            </h2>
            <div title='category-cards' className='mt-[60px] flex flex-wrap justify-around md:gap-[70px_50px] gap-y-8'>
              {mainCategories.map((category, index) => (
                <Link
                  key={index}
                  href=''
                  className='flex flex-col items-center justify-center gap-[30px] transform-gpu ease duration-[400] transition-[opacity,transform]'>
                  <div className='w-[350px] h-[292px] text-center'>
                    <Image src={category.categoryImgUrl} alt={category.categoryName} width={350} height={292}></Image>
                  </div>
                  <span className='font-bold text-[26px] leading-8 text-center'>{category.categoryName}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section title='view-all'>
        <div title='custom-container-wrapper' className='bg-[#88a53d] max-w-[2200px] mx-auto'>
          <div className="flex md:flex-row flex-col items-center justify-between w-full md:p-[45px_100px] p-[20px_36px] bg-[url('https://www.savoryspiceshop.com/cdn/shop/files/veggies.png?v=1627593766')] bg-center bg-no-repeat">
            <h2 className='font-bold md:text-[30px] text-2xl leading-9 text-white md:w-[42%]'>
              {`Browse our online spice store of high-quality seasonings, herbs & blends — from Adobo to Za'atar.`}
            </h2>
            <Link
              href=''
              className='font-bold md:text-[30px] text-2xl  max-md:mt-8 leading-9 text-white md:W-[40%] underline'>
              Shop All Spices, from A-Z
            </Link>
          </div>
        </div>
      </section>
      <div title='featured-collection'>
        <section
          title='featured-collection'
          className='max-w-[2200px] md:p-[75px_100px] p-[20px_36px] flex max-md:flex-col justify-between relative overflow-x-auto'>
          <div title='custom-cook-section-info-container' className='md:w-[40%] md:pr-[120px] flex md:flex-end'>
            <div title='custom-cook-section-info' className='w-[450px]'>
              <h2 className='font-bold text-black text-4xl leading-[43px] md:mb-[1.96875rem] mt-[30px] my'>
                Spicy & Meal: Meal Starter Spice Mixes
              </h2>
              <div>
                <p className='text-left text-[18px] leading-[22px] my-[18px]'>
                  For cooks of all levels of experience! With Spice & Easy, making gourmet dinners is easy! Just open,
                  spice and serve. Each spice packet includes a pre-measured spice kit for a quick and simple recipe.
                  Mix up appetizers, soups, chicken dinners, global cuisine, and homemade takeout favorites, using just
                  a few kitchen staples already on-hand.
                </p>
              </div>
              <Link
                href=''
                className='border-[3px] border-black w-full block bg-transparent font-bold text-2xl leading-[1.4] p-[10px_20px] rounded-[5px] text-center mt-[22.5px] mb-[4.5px]'>
                Shop Meal Starters
              </Link>
            </div>
          </div>
          <div
            title='featured-collection-content'
            className='md:w-[60%] cursor-grab md:mt-[1.96875rem] mb-[16px] max-md:overflow-x-auto'>
            <div title='flickity-viewport' className='touch-pan-y min-h-[419.25px] w-full relative'>
              <div
                title='flickity-slider-wrapper'
                className='lg:px-[5px] lg:w-[calc(100%+10px)] ml-[-5px] absolute top-0 left-0 h-full flex'>
                {displayFeatured.map((item: IDisplayFeatured, index: number) => (
                  <div className=' w-[calc(100%/3-16px)] h-full mr-[20px]' key={index}>
                    <div title='product-item-container' className='h-full flex flex-col justify-between'>
                      <Link href='#' className='relative block'>
                        <Image
                          className='p-2 rounded-t-lg transition-opacity hover:opacity-0 duration-300 ease-in-out'
                          src={item.imgUrl1}
                          alt={item.name}
                          width={250}
                          height={208}
                        />
                        <Image
                          className='p-2 rounded-t-lg absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out'
                          src={item.imgUrl2}
                          alt={item.name}
                          width={250}
                          height={208}
                        />
                      </Link>
                      <div className='px-5 pb-5'>
                        <Link href='#' className="max-md:min-h-[56px]">
                          <h5 className='text-lg font-semibold tracking-tight text-gray-900 min-h-[56px] text-center'>
                            {item.name}
                          </h5>
                        </Link>
                        <div className='flex items-center mt-2.5 mb-5'>
                          <div className='flex items-center space-x-1 rtl:space-x-reverse'>
                            <svg
                              className='w-4 h-4 text-yellow-300'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 22 20'>
                              <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                            </svg>
                            <svg
                              className='w-4 h-4 text-yellow-300'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 22 20'>
                              <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                            </svg>
                            <svg
                              className='w-4 h-4 text-yellow-300'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 22 20'>
                              <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                            </svg>
                            <svg
                              className='w-4 h-4 text-yellow-300'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 22 20'>
                              <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                            </svg>
                            <svg
                              className='w-4 h-4 text-gray-200 dark:text-gray-600'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 22 20'>
                              <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                            </svg>
                          </div>
                          <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3'>
                            5.0
                          </span>
                          <span className='text-xs text-green-600 font-light px-2'>{`${item.review} reviews`}</span>
                        </div>
                        <div className='px-2'>
                          <select
                            name='product-option'
                            id={`productOption${index}`}
                            className='my-1.5 w-full h-8 bg-white rounded-sm border border-gray-300 text-gray-700 sm:text-sm'
                            onChange={(e) => {
                              setSelectedPrice((prev) => ({
                                ...prev,
                                [index]: item.price[e.target.selectedIndex].price,
                              }));
                            }}>
                            {item.price.map((type, index) => (
                              <option key={index} value={type.size}>
                                {`${type.size})`}
                              </option>
                            ))}
                          </select>
                        </div>
                        <Link href='' className='flex items-center justify-between '>
                          <span className='w-full text-white text-gray-90 hover:bg-[#c8808c] bg-[#a24b5a] focus:ring-4 focus:outline-none font-semibold rounded-lg text-base px-2 py-3 text-center '>
                            <span className='pr-2 inline-block'>
                              <BsBasket3 />
                            </span>
                            {`Add to Cart - $${selectedPrice[index] || item.price[0].price}`}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div title='featured-recipe'>
        <div title='custom-container-wrapper' className='flex w-full max-md:flex-col flex-wrap max-w-[2200px] mx-auto'>
          <div
            title='custom-img'
            className='md:w-[60%] max-h-[560px] aspect-[6/5] relative flex items-center justify-center'>
            <Image
              src='https://www.savoryspiceshop.com/cdn/shop/files/sun-dried-tomato-minestrone-overhead-finish_web-crop.jpg'
              alt='recipe-image'
              loading='lazy'
              width={1200}
              height={1000}
              className='object-cover w-full h-full'
            />
          </div>
          <div title='custom-info' className='md:w-[40%] bg-[#a24b5a] md:pl-[60px] p-[20px_36px] flex'>
            <div title='custom-info-wrapper' className='max-w-[470px] flex flex-col justify-center text-white'>
              <span className='uppercase text-base leading-5'>
                <strong className='font-bold'>Keep Up With Your Resolutions With Healthy Recipes</strong>
              </span>
              <h2 className='text-left font-black text-4xl leading-[43px] my-[0.83em]'>Sun-Dried Tomato Minestrone</h2>
              <div title='custom-info-description' className='font-bold text-lg leading-[22px] text-white'>
                <p>
                  {`Did you know it's been said that the world's longest-lived family ate a version of minestrone every
                  day? With this quick soup mix, all you need to add is butter, diced tomatoes, and your favorite pasta
                  and seasonal vegetables. An easy, healthy meal for the whole family!`}
                </p>
              </div>
              <Link
                href={''}
                className='mt-[25px] border-[3px] border-white w-full block bg-transparent font-black text-2xl leading-[140%] p-[10px_20px] rounded-[5px] text-center'>
                Make This Recipe
              </Link>
              <Link
                href={''}
                className='mt-[25px] border-[3px] border-white w-full block bg-transparent font-black text-2xl leading-[140%] p-[10px_20px] rounded-[5px] text-center'>
                Explore More Recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div title='home-story'>
        <div title='custom-container-wrapper' className='max-w-[2200px] mx-auto'>
          <div
            title='home-story-content'
            className='flex max-md:flex-col md:flex-wrap max-w-[1440px] md:p-[75px_100px] p-[20px_36px] mx-auto'>
            <div title='home-story-info' className='md:w-[45%] md:p-[0_30px_0_40px] text-black order-2'>
              <h2 className='text-left font-black text-4xl leading-[43px] my-[0.83em]'>
                Live Life Full with Savory Spice
              </h2>
              <div className='md:pr-5 font-bold text-lg leading-[22px] '>
                <p className='my-[1em] block'>
                  We are Mike and Janet Johnston, and we founded Savory Spice in 2004 in Denver, CO.
                </p>
                <p className='my-[1em] block'>
                  {`Welcome to the Savory Spice family, where we make exploring new & unique spices and flavors in the
                  kitchen surprisingly simple, so cooks of all levels can say, "I've got this!"`}
                </p>
              </div>
              <Link
                href={''}
                className='block md:w-[90%] mt-5 bg-[#a24b5a] md:font-black font-bold text-2xl leading-[1.4] p-[10px_20px] rounded-[5px] text-center !text-white'>
                Learn More About Us
              </Link>
            </div>
            <div title='home-story-img' className='md:w-[50%] aspect-square md:pl-10 relative order-1'>
              <Image
                src={'https://www.savoryspiceshop.com/cdn/shop/files/homestory.jpg?v=1738713707'}
                alt='home-story-img'
                loading='lazy'
                width={500}
                height={500}
                layout='responsive'
              />
            </div>
          </div>
        </div>
      </div>
      <div title='home-logos' className='w-full'>
        <div title='custom-container-wrapper' className='flex flex-wrap max-w-[2200px] mx-auto bg-[#f6f6f6]'>
          <div
            title='custom-container-wrapper-grid'
            className='w-full max-w-[1440px] md:p-[75px_100px] p-[20px_36px] mx-auto'>
            <h2 className='text-left font-black text-4xl leading-[43px] my-[0.83em]'>{`Who's Talking About Us`}</h2>
            <div
              title='home-logo-wrapper'
              className='md:mt-[60px] max-md:grid max-md:grid-cols-2 max-md:gap-5 flex justify-between min-w-full'>
              {displayLogos.map((item, index) => (
              <div title='home-logo-img' className='relative max-md:flex max-md:justify-center' key={index}>
                <Image
                src={item.imgUrl}
                alt={item.imgAlt}
                loading='lazy'
                width={item.width}
                height={item.height}
                className='block'
                />
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div title='testimonials'>
        <div
          title='custom-container-wrapper'
          className="max-w-[2200px] mx-auto bg-[#323232] bg-[url('https://www.savoryspiceshop.com/cdn/shop/files/corn.png?v=1627593778')] bg-no-repeat">
          <div
            title='custom-container-wrapper-grid'
            className='flex justify-between flex-wrap max-w-[1440px] md:p-[75px_100px] p-[20px_36px] mx-auto text-white'>
            <div title='testimonials-left' className='md:w-[30%]'>
              <h2 className='text-4xl font-bold leading-[43px] mt-[5px] mb-[20px]'>Reviews of our best spices</h2>
              <Image
                src='https://cdn.shopify.com/s/files/1/0564/3904/6331/files/stars.png?v=1627593778'
                alt='stars'
                width={210}
                height={36}
              />
            </div>
            <div
              title='testimonials-right'
              className="font-medium text-lg leading-[29px] relative md:w-[55%] before:content-['\201c'] before:absolute before:text-white before:font-lato before:font-bold before:text-[72px] before:leading-[86px] md:before:left-[-45px] md:before:top-0">
              <div title='testimonials-description' className=''>
                <p className='md:py-6 mt-12 mb-6'>
                  Black Truffle Parmesan Seasoning is delicious. I sprinkle it on everything from fried eggs in the
                  morning to grilled steak and shrimp for dinner. It has replaced my salt shaker.
                </p>
              </div>
              <div title='testimonials-author' className='mt-[50px]'>
                <span className=''>{`Doren F. on`} </span>
                <Link href='' className='underline'>
                  Black Truffle Parmesan Seasoning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div title='insta-home'>
        <div title='custom-container-wrapper' className='max-w-[2200px] mx-auto'>
          <div
            title='custom-container-wrapper-grid'
            className='max-w-[1440px] md:p-[75px_100px] p-[20px_36px] mx-auto text-center'>
            <Link
              href=''
              className='underline text-center mx-auto text-black font-bold md:text-4xl text-2xl leading-[43px] bg-transparent'>
              Follow us @savoryspiceshop
            </Link>
          </div>
        </div>
      </div>
      <div title='insta-post'>
        <div
          title='insta-feed'
          className='md:w-[85%] w-full relative text-center mx-auto md:overflow-x-hidden overflow-x-auto clear-both'>
          <div title='insta-feed-layout-container' className='w-[1300px] h-[250px] overflow-hidden relative'>
            <div
              title='insta-feed-layout-wrapper'
              className='flex gap-[13px] transition-transform duration-500 ease-in-out'>
              {displayInstaFeeds.map((item, index) => (
                <div title='instafeed-layout-item' key={index} className='relative w-[250px] h-[250px]'>
                  <Image src={item.imgUrl} alt='insta-feed-img' layout='fill' sizes='250px' className='object-cover' />
                  <div className='flex justify-center items-center absolute top-[50%] left-[50%] h-full w-full -translate-x-1/2 -translate-y-1/2 z-50'>
                    <div
                      title='instafeed-hover-layer'
                      className='relative bg-black/55 opacity-0 hover:opacity-100 w-full h-full transition-opacity duration-300 ease cursor-pointer'>
                      <div
                        title='instafeed-hover-icon'
                        className='text-white absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[15px] flex items-center z-[1000] pointer-events-none'>
                        <svg
                          className='h-4 w-4 overflow-hidden text-[15px]'
                          viewBox='0 0 512 512'
                          xmlns='http://www.w3.org/2000/svg'
                          preserveAspectRatio='xMidYMid meet' // Ensures proper scaling
                        >
                          <path
                            d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'
                            fill='white'></path>
                        </svg>
                        <span className='ml-[5px] pb-0.5'>{item.like}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
