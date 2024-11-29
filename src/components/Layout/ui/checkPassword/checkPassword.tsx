"use client";
import React, { useEffect, useState } from "react";
import checkBg from "../../../../assets/products/securePage/img/checkPasswordBg.png";
import checkBlock from "../../../../assets/products/securePage/img/checkPasswordBlock.png";
import topRight from "../../../../assets/products/securePage/img/toprightIcongreen.svg";
import Image from "next/image";
import StrengthPassword from "../strengthPassword/strengthPassword";
import useToggleStore from "@/zustand/useToggleStore";
import { useRouter } from "next/navigation";

const CheckPassword = () => {
  const { isToggled, setToggle } = useToggleStore();
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const openModal = () => {
    if (isMobile) {
      router.push("/mobile/checkPassword");
    } else {
      setToggle(true);
    }
  };
  return (
    <>
      <div className="my-[100px]">
        <div className="container">
          <div className="w-[100%] p-[40px] flex items-center justify-between rounded-[40px] bg-[#262F33] max-lg:flex-col gap-y-[37px]">
            <div className="flex items-start flex-col gap-[20px] w-full">
              <h2 className="text-[35px] max-w-[545px] text-white max-sm:text-[28px]">
                Проверьте пароль на надежность и соответствие требованиям
                парольных политик
              </h2>
              <h6 className="text-[15px] text-gray-300">
                Технологии Strongpass доступны онлайн.
              </h6>
              <div className="flex items-center mt-[20px]">
                <button
                  className="py-[10px] px-[30px] text-white rounded-[10px] border-2 border-solid border-white  hover:bg-[#408077] hover:text-white transition-all hover:border-[#408077]"
                  onClick={ openModal}
                >
                  Проверить пароль
                </button>
                <button className="bg-white w-[47px] h-[47px] flex items-center justify-center rounded-[10px]">
                  <Image src={topRight} alt="" width={14} height={14} />
                </button>
              </div>
            </div>
            <div className="relative w-full  ">
              <Image
                src={checkBlock}
                alt="checkBlock"
                className="absolute top-[40px] left-[-40px]  max-sm:w-[125px]"
              />
              <Image
                src={checkBg}
                alt=""
                width={480}
                height={320}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      {isToggled ? (
        <div
          className="fixed top-0 left-0 w-[100%] h-[100vh] z-[100] flex items-center justify-center"
          style={{
            background: "rgba(0, 0, 0, 0.662)",
          }}
        >
          (
          <StrengthPassword />)
        </div>
      ) : null}
    </>
  );
};

export default CheckPassword;
