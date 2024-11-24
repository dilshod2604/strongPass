"use client";
import React, { useState } from "react";
// import { BiSolidCopy } from "react-icons/bi";

const CopyText = () => {
  const [message, setMessage] = useState("");
  const text = `ldapsearch -h localhost -p 389 -D cn="Directory Manager" -W -b
      ou=people,dc=[ваш_домен],dc=[ваш_домен] "uid=*" uid | grep uid: | wc -l`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage("Текст успешно скопирован!");
    } catch (error) {
      setMessage("Ошибка при копировании");
      console.error("Ошибка:", error);
    }
  };
  return (
    <div className="flex  flex-col  gap-y-4 px-[24px] py-[20px] rounded-lg bg-[#F2F5F4] ">
      <p className="text-lg text-[#262F33] font-normal">{text}</p>
      {/* <BiSolidCopy
        size={16}
        className="text-[#408077] hover:scale-105 transition-all"
        onClick={handleCopy}
      /> */}
    </div>
  );
};

export default CopyText;
