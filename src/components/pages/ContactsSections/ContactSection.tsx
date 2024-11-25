import Image from "next/image";
import React from "react";
import rightArrow from "../../../assets/header-logos/img/strongpass-right-logo.svg";

const ContactSection = () => {
  return (
    <section className="mt-[37px] mb-[50px]">
      <div className="container">
        {/* MAIN  */}
        <div className="flex flex-col items-center">
          {/* HEAD  */}
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-[70px] font-[600] text-[#262F33]">Контакты</h1>
            <p className="text-[18px] font-[400] text-[#262F33] mt-[30px] text-center">
              Мы будем благодарны за любую обратную связь и предложения! <br />{" "}
              Вы можете связаться с нами по контактам или заполнив форму.
            </p>

            <div className="flex items-center gap-x-[20px] mt-[30px] max-sm:flex-col gap-y-[20px]">
              <div className="flex items-center justify-center flex-col gap-[8px] px-[20px]">
                <span className="text-[15px] font-[400] text-[#7A7E80]">
                  Коммерческие вопросы:
                </span>
                <p className="text-[19px] font-[600] text-[#262F33]">
                  contact@strongpass.ru
                </p>
              </div>
              <div className="flex items-center justify-center flex-col gap-[8px] px-[20px]">
                <span className="text-[15px] font-[400] text-[#7A7E80] ">
                  Техническая поддержка:
                </span>
                <p className="text-[19px] font-[600] text-[#262F33]">
                  support@strongpass.ru
                </p>
              </div>
            </div>
          </div>
          {/* HEAD  */}

          {/* FORM FEEDBACK */}
          <div className="flex items-center justify-center flex-col mt-[70px] max-w-[580px]  ">
            <h4 className="text-[32px] font-[600] text-[#262F33]">
              Форма обратной связи
            </h4>

            <form className="bg-white pt-[40px] px-[28px]">
              <div className="mb-[10px]">
                <input
                  type="text"
                  placeholder="Фамилия Имя Отчество"
                  className="w-full border border-gray-300 rounded-[12px] px-4 py-3 focus:outline-none  "
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Электронная почта"
                  className="w-full border border-gray-300 rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#407F77]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full border border-gray-300 rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#407F77]"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Комментарий"
                  className="w-full h-[160px] border border-gray-300 rounded-[12px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#407F77] resize-none"
                ></textarea>
              </div>
              <div className="flex items-center justify-between mt-[-15px]">
                <button
                  type="submit"
                  className=" w-full flex items-center justify-center bg-transparent border border-[#407F77] text-[#407F77] rounded-lg px-6 py-[10px] hover:bg-[#407F77] hover:text-white transition-colors"
                >
                  Отправить
                </button>
                <button className="bg-[#408077] w-[47px] h-[47px] flex items-center justify-center rounded-[13px]">
                  <Image
                    src={rightArrow}
                    alt="header-logo"
                    width={14}
                    height={14}
                  />
                </button>
              </div>
              <p className="text-[15px] font-[400] text-gray-500 mt-[30px] text-center">
                Нажимая кнопку «Отправить», вы даете свое конкретное,
                информированное и сознательное согласие на обработку и хранение
                ваших персональных данных и соглашаетесь{" "}
                <span className="text-[#408077] underline">
                  с Политикой конфиденциальности.
                </span>
              </p>
            </form>
          </div>
          {/* FORM FEEDBACK */}
        </div>
        {/* MAIN  */}
      </div>
    </section>
  );
};

export default ContactSection;
