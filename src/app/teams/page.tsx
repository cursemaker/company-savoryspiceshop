'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

interface IRandomTeamMember {
  name: {
    first: string;
    last: string;
  };
  picture: { large: string };
  job: string;
  description: string;
}

export default function TeamPage() {
  const [teamMember, setTeamMember] = React.useState([]);
  const jobTitles = [
    'Founder & CEO',
    'Co-Founder',
    'CTO',
    'Marketing Director',
    'Product Manager',
    'Sales Manager',
    'Operations Manager',
    'Software Engineer',
  ];
  const jobDescriptions = [
    'Visionary leader driving company strategy and growth, setting the foundation for innovation and success.',
    'Key strategic partner in establishing and growing the company, bringing expertise in business development.',
    'Technical mastermind overseeing all aspects of technology infrastructure and innovation roadmap.',
    'Creative strategist leading brand development and market expansion initiatives.',
    'Expert in product strategy and development, translating customer needs into innovative solutions.',
    'Revenue growth specialist building and maintaining key client relationships.',
    'Efficiency expert ensuring smooth day-to-day operations and process optimization.',
    'Technical innovator crafting robust solutions and cutting-edge applications.',
  ];
  const fetchTeamMember = React.useCallback(async () => {
    try {
      const teamMemberResponse = await axios.get('https://randomuser.me/api/?results=8');
      const teamMembersWithJobs = teamMemberResponse.data.results.map((member: IRandomTeamMember, index: number) => ({
        ...member,
        job: jobTitles[index],
        description: jobDescriptions[index],
      }));
      setTeamMember(teamMembersWithJobs);
      console.log(teamMemberResponse.data.results);
    } catch (error) {
      console.error('Error fetching team member:', error);
    }
  }, [jobTitles, jobDescriptions]);

  React.useEffect(() => {
    fetchTeamMember();
  }, [fetchTeamMember]);
  return (
    <div>
      <section className='text-gray-600 body-font md:p-[75px_100px] p-[20px_40px]'>
        <div className='container px-5 md:py-24 pt-6 mx-auto'>
          <div className='flex flex-col text-left w-full mb-20'>
            <h1 className='text-2xl font-medium title-font md:mb-4 mb-2 text-gray-900'>OUR TEAM</h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Our team of passionate spice experts brings together decades of culinary experience and a deep love for
              global flavors. From sourcing the finest ingredients to crafting unique blends, each member contributes
              their expertise to ensure you get the highest quality spices for your kitchen. We take pride in sharing
              our knowledge and helping you discover the perfect seasonings for your cooking adventures.
            </p>
          </div>
          <div className='flex flex-wrap -m-4'>
            {teamMember.map((member: IRandomTeamMember, index) => (
              <div className='p-4 lg:w-1/4 md:w-1/2' key={index}>
                <div className='h-full flex flex-col items-center text-center'>
                  <Image
                    alt='team'
                    className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4'
                    src={member.picture.large}
                    width={0}
                    height={224}
                    sizes='100vw'
                    style={{
                      width: '100%',
                      height: '14rem', // or '224px' or 'auto'
                    }}
                  />
                  <div className='w-full'>
                    <h2 className='title-font font-medium text-lg text-gray-900'>
                      {member.name.first} {member.name.last}
                    </h2>
                    <h3 className='text-gray-500 mb-3'>{member.job}</h3>
                    <p className='mb-4'>{member.description}</p>
                    <span className='inline-flex'>
                      <Link href='' className='text-gray-500'>
                        <svg
                          fill='none'
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          className='w-5 h-5'
                          viewBox='0 0 24 24'>
                          <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                        </svg>
                      </Link>
                      <Link href='' className='ml-2 text-gray-500'>
                        <svg
                          fill='none'
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          className='w-5 h-5'
                          viewBox='0 0 24 24'>
                          <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                        </svg>
                      </Link>
                      <Link href='' className='ml-2 text-gray-500'>
                        <svg
                          fill='none'
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          className='w-5 h-5'
                          viewBox='0 0 24 24'>
                          <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                        </svg>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
