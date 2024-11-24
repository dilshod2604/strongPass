"use client";

import { links } from "@/constants/links";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between py-[27px]">
          <div className="flex items-center gap-[50px]">
            <h1>Logo</h1>

            <nav>
              <ul className="flex items-center gap-[31px]">
                <li className="relative">
                  <button onClick={toggleDropdown} className="text-left">
                    Продукты
                  </button>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu absolute bg-white shadow-lg p-4 mt-2 border rounded-[20px] min-w-[220px]">
                      <li className="border-b border-gray-300 py-2">
                        <Link href="/products/activeSecure">Проактивная защита</Link>
                      </li>
                      <li className="border-b border-gray-300 py-2">
                        <Link href="/products/selfcheck">Самопроверка</Link>
                      </li>
                      <li className="py-2">
                        <Link href="/products/almetibin">Almetibin</Link>
                      </li>
                    </ul>
                  )}
                </li>
                {links.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          

          <div className="flex gap-[20px]">
              <button className="border-2 border-green-500 bg-transparent text-green-500">Задать вопрос</button>
              <button>Стрелка</button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

