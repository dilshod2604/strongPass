"use client";
import { message } from "antd";
import React, { useState } from "react";
import { BiSolidCopy } from "react-icons/bi";

const CopyText = ({ copyText }: { copyText: string }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      message.success("Текст успешно скопирован!");
    } catch (error) {
      message.error("Ошибка при копировании");
    }
  };

  return (
    <div className="flex flex-col gap-y-4 px-[24px] py-[20px] rounded-lg bg-[#F2F5F4]">
      <p className="text-lg text-[#262F33] font-normal">{copyText}</p>
      <BiSolidCopy
        size={16}
        className="text-[#408077] hover:scale-105 transition-all cursor-pointer"
        onClick={handleCopy}
      />
    </div>
  );
};

export default CopyText;
