"use client"
import { allProducts } from '@/features/vars/allProducts';
import { IDisplayProducts } from '@/features/vars/displayProducts';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { BsBasket3 } from 'react-icons/bs';

export default function AllProductsPage() {
  const [selectedPrice, setSelectedPrice] = React.useState<Record<number, number>>({});
  return (
    <main>
      <div title='hero'>
        <div title='hero-container' className='bg-[#f6f6f6]'>
          <div title='container-wrapper' className='max-w-[2200px] mx-auto'>
            <div className='flex justify-between gap-[80px] items-center max-w-[1440px] mx-auto md:p-[75px_100px] p-[20px_40px] '>
              <div title='hero-text' className='w-full'>
                <h1 className='text-black text-4xl font-semibold leading-[43px]'>
                  All Seasoning, Herbs, and Spices (A-Z)
                </h1>
                <div>
                  <p className='md:text-lg text-base leading-[22px] my-[18px]'>
                    {`Browse our collection of spices, seasonings, and herbs alphabetically from A-Z. Easy shopping from a
                    giant selection of herbs and spices. Delivered right to your door in no time! Need a quicker way to
                    find the spice blend you're looking for? Use the search bar above to find what you need.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <header>
            <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>Product Collection</h2>

            <p className='mt-4 max-w-md text-gray-500'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt
              est ipsam, officia dolor fugit natus?
            </p>
          </header>

          <div className='mt-8 block lg:hidden'>
            <button className='flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'>
              <span className='text-sm font-medium'> Filters & Sorting </span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='size-4 rtl:rotate-180'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </button>
          </div>

          <div className='mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8'>
            <div className='hidden space-y-4 lg:block'>
              <div>
                <label htmlFor='SortBy' className='block text-xs font-medium text-gray-700'>
                  {' '}
                  Sort By{' '}
                </label>

                <select id='SortBy' className='mt-1 rounded-sm border-gray-300 text-sm'>
                  <option>Sort By</option>
                  <option value='Title, DESC'>Title, DESC</option>
                  <option value='Title, ASC'>Title, ASC</option>
                  <option value='Price, DESC'>Price, DESC</option>
                  <option value='Price, ASC'>Price, ASC</option>
                </select>
              </div>

              <div>
                <p className='block text-xs font-medium text-gray-700'>Filters</p>

                <div className='mt-1 space-y-2'>
                  <details className='overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition'>
                      <span className='text-sm font-medium'> Availability </span>

                      <span className='transition group-open:-rotate-180'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='size-4'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                        </svg>
                      </span>
                    </summary>

                    <div className='border-t border-gray-200 bg-white'>
                      <header className='flex items-center justify-between p-4'>
                        <span className='text-sm text-gray-700'> 0 Selected </span>

                        <button type='button' className='text-sm text-gray-900 underline underline-offset-4'>
                          Reset
                        </button>
                      </header>

                      <ul className='space-y-1 border-t border-gray-200 p-4'>
                        <li>
                          <label htmlFor='FilterInStock' className='inline-flex items-center gap-2'>
                            <input type='checkbox' id='FilterInStock' className='size-5 rounded-sm border-gray-300' />

                            <span className='text-sm font-medium text-gray-700'> In Stock (5+) </span>
                          </label>
                        </li>

                        <li>
                          <label htmlFor='FilterPreOrder' className='inline-flex items-center gap-2'>
                            <input type='checkbox' id='FilterPreOrder' className='size-5 rounded-sm border-gray-300' />

                            <span className='text-sm font-medium text-gray-700'> Pre Order (3+) </span>
                          </label>
                        </li>

                        <li>
                          <label htmlFor='FilterOutOfStock' className='inline-flex items-center gap-2'>
                            <input
                              type='checkbox'
                              id='FilterOutOfStock'
                              className='size-5 rounded-sm border-gray-300'
                            />

                            <span className='text-sm font-medium text-gray-700'> Out of Stock (10+) </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>

                  <details className='overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition'>
                      <span className='text-sm font-medium'> Price </span>

                      <span className='transition group-open:-rotate-180'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='size-4'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                        </svg>
                      </span>
                    </summary>

                    <div className='border-t border-gray-200 bg-white'>
                      <header className='flex items-center justify-between p-4'>
                        <span className='text-sm text-gray-700'> The highest price is $600 </span>

                        <button type='button' className='text-sm text-gray-900 underline underline-offset-4'>
                          Reset
                        </button>
                      </header>

                      <div className='border-t border-gray-200 p-4'>
                        <div className='flex justify-between gap-4'>
                          <label htmlFor='FilterPriceFrom' className='flex items-center gap-2'>
                            <span className='text-sm text-gray-600'>$</span>

                            <input
                              type='number'
                              id='FilterPriceFrom'
                              placeholder='From'
                              className='w-full rounded-md border-gray-200 shadow-xs sm:text-sm'
                            />
                          </label>

                          <label htmlFor='FilterPriceTo' className='flex items-center gap-2'>
                            <span className='text-sm text-gray-600'>$</span>

                            <input
                              type='number'
                              id='FilterPriceTo'
                              placeholder='To'
                              className='w-full rounded-md border-gray-200 shadow-xs sm:text-sm'
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </details>

                  <details className='overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition'>
                      <span className='text-sm font-medium'> Colors </span>

                      <span className='transition group-open:-rotate-180'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='size-4'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                        </svg>
                      </span>
                    </summary>

                    <div className='border-t border-gray-200 bg-white'>
                      <header className='flex items-center justify-between p-4'>
                        <span className='text-sm text-gray-700'> 0 Selected </span>

                        <button type='button' className='text-sm text-gray-900 underline underline-offset-4'>
                          Reset
                        </button>
                      </header>

                      <ul className='space-y-1 border-t border-gray-200 p-4'>
                        <li>
                          <label htmlFor='FilterRed' className='inline-flex items-center gap-2'>
                            <input type='checkbox' id='FilterRed' className='size-5 rounded-sm border-gray-300' />

                            <span className='text-sm font-medium text-gray-700'> Red </span>
                          </label>
                        </li>

                        <li>
                          <label htmlFor='FilterBlue' className='inline-flex items-center gap-2'>
                            <input type='checkbox' id='FilterBlue' className='size-5 rounded-sm border-gray-300' />

                            <span className='text-sm font-medium text-gray-700'> Blue </span>
                          </label>
                        </li>

                        <li>
                          <label htmlFor='FilterGreen' className='inline-flex items-center gap-2'>
                            <input type='checkbox' id='FilterGreen' className='size-5 rounded-sm border-gray-300' />

                            <span className='text-sm font-medium text-gray-700'> Green </span>
                          </label>
                        </li>

                        <li>
                          <label htmlFor='FilterOrange' className='inline-flex items-center gap-2'>
                            <input type='checkbox' id='FilterOrange' className='size-5 rounded-sm border-gray-300' />

                            <span className='text-sm font-medium text-gray-700'> Orange </span>
                          </label>
                        </li>

                        <li>
                          <label htmlFor='FilterPurple' className='inline-flex items-center gap-2'>
                            <input type='checkbox' id='FilterPurple' className='size-5 rounded-sm border-gray-300' />

                            <span className='text-sm font-medium text-gray-700'> Purple </span>
                          </label>
                        </li>

                        <li>
                          <label htmlFor='FilterTeal' className='inline-flex items-center gap-2'>
                            <input type='checkbox' id='FilterTeal' className='size-5 rounded-sm border-gray-300' />

                            <span className='text-sm font-medium text-gray-700'> Teal </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            <div className='lg:col-span-3'>
              <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {allProducts.map((item: IDisplayProducts, index: number) => (
                  <div className='w-full max-w-sm' key={index}>
                    <Link href='#' className='w-full relative aspect-[290/202] object-cover flex justify-center'>
                      <Image
                        className='p-8 rounded-t-lg transition-opacity hover:opacity-0 duration-300 ease-in-out'
                        src={item.imgUrl1}
                        alt={item.name}
                        width={290}
                        height={202}
                        objectFit='responsive'
                      />
                      <Image
                        className='p-8 rounded-t-lg absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out'
                        src={item.imgUrl2}
                        alt={item.name}
                        width={290}
                        height={202}
                        objectFit='responsive'
                      />
                    </Link>
                    <div className='px-5 pb-5'>
                      <Link href='#'>
                        <h5 className='text-xl font-semibold tracking-tight text-gray-900'>{item.name}</h5>
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
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
