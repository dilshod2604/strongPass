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
          <div className="flex items-center justify-between mb-[80px]">
            <h1 className="text-[64px] font-[600] text-[#262F33]">Статьи</h1>

            <div className="flex items-center gap-[10px]">
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
          <div className="flex items-center justify-around">
            {/* BLOCK  */}
            <div>
              <Image
                className="rounded-[30px] absolute z-[-1] mt-[-50px]"
                src={image1}
                alt="header-logo"
                width={580}
                height={280}
              />
              <div className="w-[580px] h-[280px] bg-[#F2F5F4] px-[35px] py-[29px] rounded-[30px] mt-[180px]">
                <p className="text-[16px] font-[400] text-[#7A7E80]">
                  20 сентября 2024
                </p>
                <h3 className="text-[24px] font-[600] text-[#262F33] mt-[5px]">
                  Создание легко запоминаемых <br /> и надежных паролей
                </h3>
                <p className="text-[18px] font-[400] text-[#7A7E80] mt-[14px]">
                  Сегодня исследовательская группа Specops публикует <br />{" "}
                  новые данные о паролях VPN, украденных вредоносным
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
            <div>
              <Image
                className="rounded-[30px] absolute z-[-1] mt-[-50px]"
                src={image2}
                alt="header-logo"
                width={580}
                height={280}
              />
              <div className="w-[580px] h-[280px] bg-[#F2F5F4] px-[35px] py-[29px] rounded-[30px] mt-[180px]">
                <p className="text-[16px] font-[400] text-[#7A7E80]">
                  20 сентября 2024
                </p>
                <h3 className="text-[24px] font-[600] text-[#262F33] mt-[5px]">
                  Как создать слабый пароль или типовые <br /> шаблоны в паролях
                  и как с ними бороться
                </h3>
                <p className="text-[18px] font-[400] text-[#7A7E80] mt-[14px]">
                  Сегодня исследовательская группа Specops публикует <br />{" "}
                  новые данные о паролях VPN, украденных вредоносным
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
          </div>
          {/* BLOCKS  */}
        </div>
        {/* MAIN  */}
      </div>
    </section>
  );
};

export default ArticleBlock;
