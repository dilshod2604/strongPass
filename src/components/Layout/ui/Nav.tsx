"use client";

import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/constants/links";
import downArrow from "../../../assets/header-logos/img/strongpass-down.svg"
import Image from "next/image";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <nav>
        <ul className="flex items-center gap-[37px]">
          <li className="relative">
            <button onClick={toggleDropdown} className="text-left text-[17px] flex items-center gap-[7px]">
              Продукты
              <Image
                src={downArrow}
                alt="header-logo"
                width={10}
                height={6}
              />
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
              <Link className="text-[17px]" href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
