import React from "react";
import homeSectioPhoto from "../../../assets/homePage/img/homeSection-photo.svg";
import Image from "next/image";

const Welcome = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-[10px]">
          <h1 className="text-[72px] text-[#262F33] leading-tight font-bold max-lg:text-[62px] max-md:text-[52px] max-sm:text-[42px]">
            Ваша безопасность <br /> начинается с паролей
          </h1>
          <div className=" h-[560px] rounded-[36px] relative overflow-hidden">
            <Image
              className=" rounded-[36px] "
              src={homeSectioPhoto}
              alt="header-logo" 
              width={1200}
              height={560}
            />
            <span className="p-[32px] rounded-br-[36px] bg-white absolute  top-0 left-0 ">
              <p className="text-[18px] font-normal w-full text-start text-[#262F33]">
                Снизьте риска взлома инфраструктуры из-за слабых или украденных
                паролей.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
