import React from "react";
import aboutPassword from "../../../assets/homePage/img/AboutPhotoPassword.svg";
import Image from "next/image";
import dotted from "../../../assets/homePage/img/dotted.svg";

const AboutPassword = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-[100px] w-[100%]  bg-[#F2F5F4] rounded-[24px] px-[50px] py-[60px]">
          {/* BLOCK1  */}
          <div className="flex items-center justify-between max-lg:flex-col gap-y-[48px]">
            <p className="text-[28px] font-[400] text-[#262F33] max-w-[680px] max-sm:text-[18px]">
              Использование слабых и скомпрометированных паролей - один из
              основных способов проникновения злоумышленников в инфраструктуру.
              Внедрение надежной парольной политики и безопасной работы
              с паролями снижает вероятность взлома на 60% 
              <span className="text-[#408077] underline">
                по данным Лаборатории Касперского.
              </span>
            </p>

            <Image
              src={aboutPassword}
              alt="header-logo"
              width={380}
              height={400}
              className="max-lg:w-full"
            />
          </div>
          {/* BLOCK2  */}

          {/* MAIN MIN BLOCKS  */}
          <div className="flex items-center justify-center gap-x-[20px] mt-[90px] max-lg:flex-col  gap-y-[20px] ">
            {/* MIN BLOCK  */}
            <div className="w-full border border-solid border-[#00000025] rounded-[18px] py-[35px] px-[35px]">
              <h2 className="text-[30px] font-[500] text-[#262F33] max-sm:text-[20px]">
                Быстрое развертывание
              </h2>
              <p className="text-[#262F33] text-[17px] font-[400] mt-[14px]">
                Защита начинает работать сразу после установки.
              </p>

              <div className="flex items-center justify-between mt-[65px]">
                <Image src={dotted} alt="header-logo" width={24} height={6} />
                <p className="text-[18px] font-[600] text-[#408077]">001</p>
              </div>
            </div>
            {/* MIN BLOCK  */}

            {/* MIN BLOCK  */}
            <div className="w-full border border-solid border-[#00000025] rounded-[18px] py-[35px] px-[35px]">
              <h2 className="text-[30px] font-[500] text-[#262F33] max-sm:text-[20px]">
                Поддержка <br /> Windows и Linux
              </h2>
              <p className="text-[#262F33] text-[17px] font-[400] mt-[14px]">
                Поддерживаются каталоги Active <br /> Directory, FreeIPA, ALD
                Pro.
              </p>

              <div className="flex items-center justify-between mt-[65px]">
                <Image src={dotted} alt="header-logo" width={24} height={6} />
                <p className="text-[18px] font-[600] text-[#408077]">001</p>
              </div>
            </div>
            {/* MIN BLOCK  */}

            {/* MIN BLOCK  */}
            <div className="w-full  border border-solid border-[#00000025] rounded-[18px] py-[35px] px-[35px]">
              <h2 className="text-[30px] font-[500] text-[#262F33] max-sm:text-[20px]">
                Сделано в России
              </h2>
              <p className="text-[#262F33] text-[17px] font-[400] mt-[14px]">
                Strongpass включен в Реестр <br /> российского программного{" "}
                <br /> обеспечения Минцифры.
              </p>

              <div className="flex items-center justify-between mt-[85px]">
                <Image src={dotted} alt="header-logo" width={24} height={6} />
                <p className="text-[18px] font-[600] text-[#408077]">001</p>
              </div>
            </div>
            {/* MIN BLOCK  */}
          </div>
          {/* MAIN MIN BLOCKS  */}
        </div>
      </div>
    </section>
  );
};

export default AboutPassword;
