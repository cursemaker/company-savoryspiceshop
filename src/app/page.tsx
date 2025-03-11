import Image from "next/image";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className="max-w-screen">
      {/* banner */}
      <div className="h-[560px] w-full">
        <div className="flex items-stretch flex-wrap">
          <div className="max-w-[65%]">
            <Image
              src="https://www.savoryspiceshop.com/cdn/shop/files/Mar7_Web2_994x560_crop_center.jpg"
              alt=""
              width={994}
              height={560}
              style={{ width: "65vw", height: "auto" }}
            />
          </div>
          <div className="px-20 max-w-[35%] flex flex-col items-start justify-center w-full min-h-full bg-[#B4BA74]">
            <h1 className="font-black text-4xl leading-[43px] text-white">Use Promo Code SPRING20</h1>
            <h2 className="m-[13.5px_0_20px] font-light text-2xl text-white">
              Shop bold spices, fresh blends, and vibrant flavors perfect for kicking off springtime cooking.
            </h2>
            <div className="text-2xl p-[10px_20px] text-white">
              <Button variant="outlined">Shop Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
