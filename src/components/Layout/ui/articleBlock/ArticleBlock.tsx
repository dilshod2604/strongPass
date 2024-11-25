import React from "react";
import arrowLeft from "../../../../assets/homePage/img/ArticleLeft.svg";
import arrowRight from "../../../../assets/homePage/img/Article-right.svg";
import artArrowRight from "../../../../assets/homePage/img/Article-arrow-right.svg";
import image1 from "../../../../assets/homePage/img/Article-image1.svg";
import image2 from "../../../../assets/homePage/img/Article-image2.svg";
import Image from "next/image";
import Link from "next/link";

const ArticleBlock = () => {
  return (
    <section>
      <div className="container">
        {/* MAIN  */}
        <div className="mt-[100px]">
          {/* HEAD ARTICLE  */}
          <div className="flex items-center justify-between mb-[40px]">
            <h1 className="text-[64px] font-[600] text-[#262F33]">Статьи</h1>

            <div className="flex items-center gap-[10px] max-sm:hidden">
              <button className="text-[18px] font-[500] text-[#408077] border-2 border-[#40807776] bg-transparent rounded-[9px] px-[30px] py-[14px]  hover:bg-[#408077] hover:text-white transition-all duration-500">
                Смотреть все
              </button>
              <button className="border-2 border-[#40807776] bg-transparent rounded-[9px] px-[17px] py-[16px]">
                <Image
                  src={arrowLeft}
                  alt="header-logo"
                  width={10}
                  height={6}
                />
              </button>
              <button className="border-2 border-[#40807776] bg-transparent rounded-[9px] px-[17px] py-[16px]">
                <Image
                  src={arrowRight}
                  alt="header-logo"
                  width={10}
                  height={6}
                />
              </button>
            </div>
          </div>
          {/* HEAD ARTICLE  */}

          {/* BLOCKS  */}
          <div className="flex items-center gap-x-[20px] max-lg:flex-col ">
            {/* BLOCK  */}
            <div className="relative w-full ">
              <Image
                className="rounded-[30px] w-full"
                src={image1}
                alt="header-logo"
                width={580}
                height={280}
              />
              <div className="w-full bg-[#F2F5F4] px-[35px] py-[29px] rounded-[30px] relative bottom-[50px]">
                <p className="text-[16px] font-[400] text-[#7A7E80]">
                  20 сентября 2024
                </p>
                <h3 className="text-[24px] font-[600] text-[#262F33] mt-[5px] max-w-[408px] line-clamp-2">
                  Создание легко запоминаемых и надежных паролей
                </h3>
                <p className="text-[18px] font-[400] text-[#7A7E80] mt-[14px] line-clamp-2">
                  Сегодня исследовательская группа Specops публикует новые
                  данные о паролях VPN, украденных вредоносным
                </p>
                <Link
                  href="/article/2"
                  className="text-[18px] font-[400] text-[#408077] flex items-center gap-[11px] mt-[27px]"
                >
                  Читать статью{" "}
                  <Image
                    src={artArrowRight}
                    alt="header-logo"
                    width={16}
                    height={10}
                  />
                </Link>
              </div>
            </div>
            {/* BLOCK  */}

            {/* BLOCK  */}
            <div className="relative  w-full max-lg:hidden">
              <Image
                className="rounded-[30px] w-full"
                src={image2}
                alt="header-logo"
                width={580}
                height={280}
              />
              <div className="w-full bg-[#F2F5F4] px-[35px] py-[29px] rounded-[30px]  relative bottom-[50px]">
                <p className="text-[16px] font-[400] text-[#7A7E80]">
                  20 сентября 2024
                </p>
                <h3 className="text-[24px] font-[600] text-[#262F33] mt-[5px] line-clamp-2">
                  Как создать слабый пароль или типовые шаблоны в паролях и как
                  с ними бороться
                </h3>
                <p className="text-[18px] font-[400] text-[#7A7E80] mt-[14px] line-clamp-2">
                  Сегодня исследовательская группа Specops публикует новые
                  данные о паролях VPN, украденных вредоносным
                </p>
                <Link
                  className="text-[18px] font-[400] text-[#408077] flex items-center gap-[11px] mt-[27px]"
                  href="/article/2"
                >
                  Читать статью{" "}
                  <Image
                    src={artArrowRight}
                    alt="header-logo"
                    width={16}
                    height={10}
                  />
                </Link>
              </div>
            </div>
            {/* BLOCK  */}
            <div className=" hidden  items-center gap-[10px] max-sm:flex">
              <button className=" text-[18px] font-[500] text-[#408077] border-2 border-[#40807776] bg-transparent rounded-[9px] px-[30px] py-[14px]  hover:bg-[#408077] hover:text-white transition-all duration-500">
                Смотреть все
              </button>
              <button className="border-2 border-[#40807776] bg-transparent rounded-[9px] px-[17px] py-[16px]">
                <Image
                  src={arrowLeft}
                  alt="header-logo"
                  width={10}
                  height={6}
                />
              </button>
              <button className="border-2 border-[#40807776] bg-transparent rounded-[9px] px-[17px] py-[16px]">
                <Image
                  src={arrowRight}
                  alt="header-logo"
                  width={10}
                  height={6}
                />
              </button>
            </div>
          </div>
          {/* BLOCKS  */}
        </div>
        {/* MAIN  */}
      </div>
    </section>
  );
};

export default ArticleBlock;
