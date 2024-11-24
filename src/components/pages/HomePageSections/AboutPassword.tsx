import React from "react";
import aboutPassword from '../../../assets/homePage/img/AboutPhotoPassword.svg'
import Image from "next/image";
import dotted from "../../../assets/homePage/img/dotted.svg";

const AboutPassword = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-[100px] w-[100%] h-[920px] bg-[#F2F5F4] rounded-[24px] px-[50px] py-[60px]">
          {/* BLOCK1  */}
          <div className="flex items-center justify-between">
            <p className="text-[28px] font-[400] text-[#262F33]]">
              Использование слабых и скомпрометированных <br /> паролей - один из
              основных способов <br /> проникновения злоумышленников <br /> в инфраструктуру.
              Внедрение надежной <br /> парольной политики и безопасной работы <br />
              с паролями снижает вероятность взлома <br />
              на 60% <span className="text-[#408077] underline">по данным Лаборатории Касперского.</span>
            </p>

            <Image
                src={aboutPassword}
                alt="header-logo"
                width={380}
                height={400}
              />
          </div>
          {/* BLOCK2  */}


          {/* MAIN MIN BLOCKS  */}
          <div className="flex items-center justify-between mt-[90px]">
            {/* MIN BLOCK  */}
            <div className="w-[350px] h-[310px] border border-solid border-[#00000025] rounded-[18px] py-[35px] px-[35px]">
              <h2 className="text-[30px] font-[500] text-[#262F33]">Быстрое <br /> развертывание</h2>
              <p className="text-[#262F33] text-[17px] font-[400] mt-[14px]">Защита начинает работать сразу <br /> после установки.</p>

              <div className="flex items-center justify-between mt-[65px]">
              <Image src={dotted} alt="header-logo" width={24} height={6} />
              <p className="text-[18px] font-[600] text-[#408077]">001</p>
              </div>
            </div>
            {/* MIN BLOCK  */}

            {/* MIN BLOCK  */}
            <div className="w-[350px] h-[310px] border border-solid border-[#00000025] rounded-[18px] py-[35px] px-[35px]">
              <h2 className="text-[30px] font-[500] text-[#262F33]">Поддержка <br /> Windows и Linux</h2>
              <p className="text-[#262F33] text-[17px] font-[400] mt-[14px]">Поддерживаются каталоги Active <br /> Directory, FreeIPA, ALD Pro.</p>

              <div className="flex items-center justify-between mt-[65px]">
              <Image src={dotted} alt="header-logo" width={24} height={6} />
              <p className="text-[18px] font-[600] text-[#408077]">001</p>
              </div>
            </div>
            {/* MIN BLOCK  */}

            {/* MIN BLOCK  */}
            <div className="w-[350px] h-[310px] border border-solid border-[#00000025] rounded-[18px] py-[35px] px-[35px]">
              <h2 className="text-[30px] font-[500] text-[#262F33]">Сделано в России</h2>
              <p className="text-[#262F33] text-[17px] font-[400] mt-[14px]">Strongpass включен в Реестр <br /> российского программного <br /> обеспечения Минцифры.</p>

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