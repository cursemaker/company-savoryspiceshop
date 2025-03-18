import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export default function AboutUsPage() {
  return (
    <div>
      <div title='home-story-1'>
        <div title='custom-container-wrapper' className='max-w-[2200px] mx-auto'>
          <div
            title='home-story-content'
            className='flex max-md:flex-col md:flex-wrap max-w-[1440px] md:p-[75px_100px] p-[20px_40px] md:mx-auto'>
            <div title='home-story-info' className='md:w-[50%] w-full md:p-[0_30px_0_40px] text-black max-md:order-2'>
              <h2 className='md:text-left text-center max-w-full font-extrabold text-2xl leading-[43px] my-[0.83em]'>
                Live Life Full with Savory Spice
              </h2>
              <div className='md:pr-5 font-base text-lg leading-[22px] '>
                <p className='my-[1em] block'>
                  We are Mike and Janet Johnston. As avid home cooks and bakers, we have always loved the idea of
                  creating new blends and recipes to share with our family and friends.
                </p>
                <p className='my-[1em] block'>
                  In 2004, we decided to combine our individual skills and experiences in marketing and in the retail
                  spice industry to open the very first Savory Spice location in Denver, Colorado. After the immediate
                  success of our shop, we decided to take our concept a step further and created a Savory Spice website,
                  allowing customers to purchase anything available in the store online.
                </p>
                <p className='my-[1em] block'>
                  Building on the positive response to our Denver store and internet marketing, we opened a second shop
                  in Littleton, Colorado, followed by shops in Boulder and East Denver two years later.
                </p>
                <p className='my-[1em] block'>
                  {`Since then, with the help of employees, family members and professional colleagues, our growth has
                  been amazing. Savory Spice and its franchisors now operate nearly 30 locations across the United
                  States, and we continue to bring creative flavor solutions to our customers, from our popular Spice 'n
                  Easy line to our ever-expanding new products, and of course, our customer favorites.`}
                </p>
                <p className='my-[1em] block'>Thank you for shopping with us!</p>
                <p className='my-[1em] block'>-Mike & Janet</p>
              </div>
              <Link
                href={''}
                className='block md:w-[90%] w-full mt-5 bg-[#a24b5a] md:font-extrabold font-bold md:text-2xl text-lg leading-[1.4] md:p-[10px_20px] p-[8px_14px] rounded-[5px] text-center !text-white'>
                {`See Where We're Featured`}
              </Link>
            </div>
            <div
              title='home-story-img'
              className='md:w-[50%] max-md:min-w-full aspect-square md:pl-10 relative max-md:order-1'>
              <Image
                src={
                  'https://www.savoryspiceshop.com/cdn/shop/files/mikejanet-about_426166a1-33e4-42b2-9b20-48f660a03850.jpg'
                }
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
      <div title='home-story-2'>
        <div title='custom-container-wrapper' className='max-w-[2200px] mx-auto'>
          <div
            title='home-story-content'
            className='flex max-md:flex-col md:flex-wrap max-w-[1440px] md:p-[75px_100px] p-[20px_40px] md:mx-auto'>
            <div title='home-story-img' className='md:w-[50%] max-md:min-w-full h-fit md:pl-10 relative'>
              <Image
                src={
                  'https://www.savoryspiceshop.com/cdn/shop/files/MicrosoftTeams-image_12_cb94f62a-9f85-4cc9-9720-71f36331dc4d.jpg'
                }
                alt='home-story-img'
                loading='lazy'
                width={500}
                height={500}
                layout='responsive'
              />
            </div>
            <div title='home-story-info' className='md:w-[50%] w-full md:p-[0_30px_0_40px] text-black'>
              <h2 className='md:text-left text-center max-w-full font-extrabold text-2xl leading-[43px] my-[0.83em]'>
                Mission
              </h2>
              <div className='md:pr-5 font-base text-lg leading-[22px] '>
                <p className='my-[1em] block'>
                  {`At Savory Spice, our mission is to deliver "wow" flavor experiences that bring you closer to your
                  loved ones. We make exploring in the kitchen surprisingly simple, so cooks of all levels can say,
                  "I've got this!"`}
                </p>
              </div>
              <Link
                href={''}
                className='block md:w-[90%] w-full mt-5 bg-[#a24b5a] md:font-extrabold font-bold md:text-2xl text-lg leading-[1.4] md:p-[10px_20px] p-[8px_14px] rounded-[5px] text-center !text-white'>
                {`Explore Our Best Sellers`}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div title='home-story-3'>
        <div title='custom-container-wrapper' className='max-w-[2200px] mx-auto'>
          <div
            title='home-story-content'
            className='flex max-md:flex-col md:flex-wrap max-w-[1440px] md:p-[75px_100px] p-[20px_40px] md:mx-auto'>
            <div title='home-story-info' className='md:w-[50%] w-full md:p-[0_30px_0_40px] text-black max-md:order-2'>
              <h2 className='md:text-left text-center font-extrabold text-2xl leading-[43px] my-[0.83em]'>Values</h2>
              <div className='md:pr-5 font-base text-lg leading-[22px] '>
                <p className='my-[1em]'>
                  <p className='font-semibold inline-block'>AUTHENTICITY- </p> We value building real relationships
                  inside and outside our four walls.
                </p>
                <p className='my-[1em]'>
                  <p className='font-semibold inline-block'>OPENNESS- </p> We celebrate cultures and people from around
                  the world. our four walls.
                </p>
                <p className='my-[1em]'>
                  <p className='font-semibold inline-block'>POSITIVITY- </p> We believe in the power of an easy smile
                  and a kind word.
                </p>
                <p className='my-[1em]'>
                  <p className='font-semibold inline-block'>ADVENTUROUSNESS- </p> We embrace the bold exploration of
                  flavor boundaries.
                </p>
                <p className='my-[1em]  '>
                  <p className='font-semibold inline-block'>APPROACHABILITY- </p> We encourage sharing ideas and a
                  spirit of collaboration.
                </p>
              </div>
              <Link
                href={''}
                className='block md:w-[90%] w-full mt-5 bg-[#a24b5a] md:font-extrabold font-bold md:text-2xl text-lg leading-[1.4] md:p-[10px_20px] p-[8px_14px] rounded-[5px] text-center !text-white'>
                {`Find A Savory Spice Near You`}
              </Link>
            </div>
            <div
              title='home-story-img'
              className='md:w-[50%] max-md:min-w-full md:pl-10 relative max-md:order-1'>
              <Image
                src={'https://www.savoryspiceshop.com/cdn/shop/files/low-countryBlogbody.jpg'}
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
      <div title='home-story-4'>
        <div title='custom-container-wrapper' className='max-w-[2200px] mx-auto'>
          <div
            title='home-story-content'
            className='flex max-md:flex-col md:flex-wrap max-w-[1440px] md:p-[75px_100px] p-[20px_40px] md:mx-auto'>
            <div title='home-story-img' className='md:w-[50%] max-md:min-w-full md:pl-10 relative'>
              <Image
                src={'https://www.savoryspiceshop.com/cdn/shop/files/asian-spice-blogbody4_blog.jpg'}
                alt='home-story-img'
                loading='lazy'
                width={500}
                height={500}
                layout='responsive'
              />
            </div>
            <div title='home-story-info' className='md:w-[50%] w-full md:p-[0_30px_0_40px] text-black'>
              <h2 className='md:text-left text-center max-w-full font-extrabold text-2xl leading-[43px] my-[0.83em]'>
                Live Life Full
              </h2>
              <div className='md:pr-5 font-base text-lg leading-[22px] '>
                <p className='my-[1em] block'>
                  As you may have guessed from our Mission and Values, we strive to help you{' '}
                  <p className='inline-block font-semibold italic'>{`"Live Life Full"`}</p> - of meaningful moments,
                  delightful experiences, and of course, flavorful food.
                </p>
              </div>
              <Link
                href={''}
                className='block md:w-[90%] w-full mt-5 bg-[#a24b5a] md:font-extrabold font-bold md:text-2xl text-lg leading-[1.4] md:p-[10px_20px] p-[8px_14px] rounded-[5px] text-center !text-white'>
                {`Explore Our Recipes`}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
