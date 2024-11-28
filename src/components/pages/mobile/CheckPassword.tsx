"use client";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { Progress } from "antd";

const CheckPassword = () => {
  const [eyes, setEyes] = useState(false);
  const [password, setPassword] = useState("");

  const [criteria, setCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const validatePassword = () => {
    setCriteria({
      length: password.length >= 9,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  };

  const calculateScore = () => {
    const values = Object.values(criteria);
    const trueCount = values.filter(Boolean).length;
    return trueCount * 20;
  };

  const getStrokeColor = (percent: number): string => {
    if (percent <= 20) return "red";
    if (percent <= 40) return "orange";
    if (percent <= 60) return "yellow";
    if (percent <= 80) return "yellowgreen";
    return "green";
  };

  const percent = calculateScore();

  return (
    <div className="flex items-center justify-center">
      <div className="container px-5">
        <div className="w-full flex items-center justify-between flex-col  scroll-hidden gap-y-[20px] ">
          <div className="flex items-start flex-col gap-[20px] max-w-[640px] ">
            <h2 className="font-[600] text-[25px]">
              Проверка надежности пароля
            </h2>
            <p className="text-[20px] w-full">
              Публичная версия сервиса предназначена для быстрой и удобной
              проверки пароля на надежность, а так же демонстрации возможностей
              решения Strongpass для проактивной борьбы со слабыми паролями.
            </p>
            <div className="flex items-center gap-[10px] flex-col w-full ">
              <div className="h-[45px] rounded-[10px] border-2 border-solid border-gray-400 flex items-cemter  gap-[10px] px-[10px] w-full ">
                <input
                  type={eyes ? "text" : "password"}
                  placeholder="Ваш пароль"
                  className="w-full  bg-transparent"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <a className="text-[20px] flex items-center justify-center">
                  {eyes ? (
                    <FaRegEye onClick={() => setEyes(false)} />
                  ) : (
                    <FaRegEyeSlash onClick={() => setEyes(true)} />
                  )}
                </a>
              </div>
              <button
                className="py-[10px] px-[30px] rounded-[10px] bg-[#408077] text-white w-full"
                onClick={validatePassword}
              >
                Проверить
              </button>
            </div>
            <div className="flex items-center gap-[10px] max-sm:flex-col max-sm:w-full border  rounded-2xl p-2">
              <div className=" w-full h-[250px] bg-[#F2F5F4] flex items-center justify-center flex-col gap-[10px] rounded-[10px] ">
                <Progress
                  type="circle"
                  percent={percent}
                  format={() => `${percent / 20} / 5`}
                  strokeColor={getStrokeColor(percent)}
                  trailColor="#e9e9e9"
                  size={100}
                />
                <h5 className="text-[20px] font-[600] text-center w-[200px] ">
                  {percent === 0
                    ? "Введите пароль"
                    : percent <= 60
                    ? "Пароль ненадежный!"
                    : percent <= 80
                    ? "Пароль почти надежный!"
                    : "Хороший пароль! Поздравляем!"}
                </h5>
                <h6 className="text-[17px] text-gray-500 w-[200px] text-center">
                  {percent === 0
                    ? "Проверьте журнал приложения"
                    : percent <= 60
                    ? "Пароль достаточно легко угадать."
                    : percent <= 80
                    ? "Пароль почти завершен"
                    : "Ваш пароль достаточно надежный."}
                </h6>
              </div>
              <div className="w-[250px] h-[250px] p-[10px] gap-[5px]  flex items-start flex-col">
                <h5 className="text-[20px] font-[600] mb-[10px]">
                  Требования к паролю:
                </h5>
                <h6 className="flex items-center gap-[10px] text-[20px]">
                  <span>
                    {criteria.length ? (
                      <IoMdCheckmark className="text-[#408077] text-[20px]" />
                    ) : (
                      <MdOutlineClear className="text-red-600 text-[20px]" />
                    )}
                  </span>
                  Не менее 9 символов
                </h6>
                <h6 className="flex items-center gap-[10px] text-[20px]">
                  <span>
                    {criteria.uppercase ? (
                      <IoMdCheckmark className="text-[#408077] text-[20px]" />
                    ) : (
                      <MdOutlineClear className="text-red-600 text-[20px]" />
                    )}
                  </span>
                  Заглавная буква
                </h6>
                <h6 className="flex items-center gap-[10px] text-[20px]">
                  <span>
                    {criteria.lowercase ? (
                      <IoMdCheckmark className="text-[#408077] text-[20px]" />
                    ) : (
                      <MdOutlineClear className="text-red-600 text-[20px]" />
                    )}
                  </span>
                  Строчная буква
                </h6>
                <h6 className="flex items-center gap-[10px] text-[20px]">
                  <span>
                    {criteria.number ? (
                      <IoMdCheckmark className="text-[#408077] text-[20px]" />
                    ) : (
                      <MdOutlineClear className="text-red-600 text-[20px]" />
                    )}
                  </span>
                  Цифра
                </h6>
                <h6 className="flex items-center gap-[10px] text-[20px]">
                  <span>
                    {criteria.specialChar ? (
                      <IoMdCheckmark className="text-[#408077] text-[20px]" />
                    ) : (
                      <MdOutlineClear className="text-red-600 text-[20px]" />
                    )}
                  </span>
                  Спецсимвол{" "}
                </h6>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-col gap-[20px] max-w-[640px]  bg-[#F2F5F4] rounded-[26px] p-[20px] scroll-hidden mt-[50px] ">
            <h5 className="text-[20px] font-[600] flex items-start gap-[10px]">
              <span className="text-[20px] text-red-600 mt-[5px]">
                <MdErrorOutline />
              </span>
              Мы никак не собираем и не храним пароли, которые вы вводите.
            </h5>
            <p className="text-[18px]">
              Если у вас есть сомнения относительно использования общедоступной
              версии сервиса, вы можете развернуть его в своей инфраструктуре.
              Все проверки проводятся локально. Доступ в интернет не требуется.
            </p>
            <p className="text-[18px]">
              В зависимости от целей и задач требования к паролю могут быть
              разными. Настройки публичной версии сервиса предъявляют следующие
              требования:
            </p>
            <div className="flex items-start flex-col pl-[20px]">
              <h6 className="text-[18px] flex items-start gap-[10px]">
                <span className="text-[#408077]">01.</span>Длина пароля должна
                быть не менее 9 символов.
              </h6>
              <h6 className="text-[18px] flex items-start gap-[10px]">
                <span className="text-[#408077]">02.</span>Пароль должен
                включать в себя символы из всех следующих наборов:
              </h6>
              <div className="scroll flex items-start flex-col pl-[30px] text-[18px] gap-[4px]">
                <h6>- Латинские заглавные буквы (от A до Z).</h6>
                <h6>- Латинские строчные буквы (от a до z).</h6>
                <h6>- Цифры (от 0 до 9).</h6>
                <h6>- Спецсимволы ( !@#$%^&*(),.?":{}|)</h6>
                <h6>- Длина должно состоять более 9 символов</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckPassword;