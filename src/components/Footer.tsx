import Link from "next/link";
import * as React from "react";

export default function Footer() {
  const companyLinks = [
    "About Savory Spice",
    "Store Locations",
    "Press Room",
    "Become an Affiliate",
    "Foodservice",
    "Contact Us",
  ];
  const resourceLinks = [
    "FAQs",
    "Loyalty Club",
    "Terms & Conditions",
    "Return Policy",
    "Privacy Policy",
    "Gift Balance & Policy",
    "Accessibility Statement",
  ];

  return (
    <div>
      <section
        title="site-footer-wrapper"
        className="bg-[#153961] bg-[url('https://www.savoryspiceshop.com/cdn/shop/files/illustration-footer.png?v=1631640818')] bg-no-repeat md:bg-[position:90%_90%] bg-[position:80%_30%] bg-[length:50%_auto] md:p-[58.5px_0_56.25px] mx-auto mt-4 relative text-white">
        <div title="custom-newslater-wrapper" className="w-[95vw] max-w-[1380px] md:py-[50px] py-5 mx-auto">
          <div title="custom-newsletter-txt" className="font-bold text-base leading-[22px] max-md:mx-4">
            Join our email list and Loyalty Club to earn points and save 10% on your first order!
          </div>
          <div title="form" className="my-[27px] max-w-[520px] ">
            <div title="needs-click" className="flex border-0 rounded-md overflow-hidden">
              <div className="grow">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  name=""
                  id=""
                  className="h-[50px] w-full pl-4 bg-white outline-none text-[#4d4d4d]"
                />
              </div>
              <div className="h-[50px] bg-[#a24b5a] text-white px-7 flex items-center whitespace-nowrap">Sign Up</div>
            </div>
          </div>
        </div>
        <div title="site-footer-item" className="px-[25px] mx-auto max-w-[1440px]">
          <div title="site-footer-block" className="flex md:flex-row flex-nowrap md:justify-start flex-col">
            <div
              title="company-link"
              className=" flex-[0_0_auto] w-full md:w-[calc(25%-1.40625rem*3/4)] pr-[1.40625rem] mr-[1.40625rem] border-b-0">
              <div className="py-[18px] block font-bold underline text-[1.265625rem]">
                <h2>Company</h2>
              </div>
              <div>
                {companyLinks.map((item: string, index: number) => {
                  return (
                    <Link
                      href=""
                      key={index}
                      className={`text-base block hover:underline ${index !== 0 ? "mt-[5px]" : ""}`}>
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div
              title="resources-link"
              className=" flex-[0_0_auto] md:w-[calc(25%-1.40625rem*3/4)] pr-[1.40625rem] mr-[1.40625rem] border-b-0">
              <div className="py-[18px] block font-bold underline text-[1.265625rem]">
                <h2>Resources</h2>
              </div>
              <div>
                {resourceLinks.map((item: string, index: number) => {
                  return (
                    <Link
                      href=""
                      key={index}
                      className={`text-base block hover:underline ${index !== 0 ? "mt-[5px]" : ""}`}>
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div
              title="followus-link"
              className=" flex-[0_0_auto] md:w-[calc(25%-1.40625rem*3/4)] pr-[1.40625rem] mr-[1.40625rem] border-b-0">
              <div className="py-[18px] block font-bold underline text-[1.265625rem]">
                <h2>Follow Us</h2>
              </div>
              <div>
                {resourceLinks.map((item: string, index: number) => {
                  return (
                    <Link
                      href=""
                      key={index}
                      className={`text-base block hover:underline ${index !== 0 ? "mt-[5px]" : ""}`}>
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div title="copyright" className="px-[25px] mx-auto max-w-[1440px]">
          <div title="footer-information" className="flex mt-[70px] flex-nowrap">
            <div title="left" className="min-w-[60%] pr-[12.5px] text-left order-1"></div>
            <div title="right" className="w-[40%] pl-[12.5px] ">
              <div className="pr-[12.5px] mt-[20px] text-[18px]">
                Copyright © 2025 Savory Spice. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
