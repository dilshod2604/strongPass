import React from 'react';
import homeSectioPhoto from "../../../assets/homePage/img/homeSection-photo.svg"
import Image from 'next/image';

const Welcome = () => {
  return (
    <section>
      <div className='container'>
        <div className='mt-[10px]'>
          <h1 className='text-[72px] text-[#262F33] leading-tight font-[700]'>Ваша безопасность <br /> начинается с паролей</h1>
          <p className='text-[#262F33] text-[18px] font-[400] py-[15px]'>Снизьте риска взлома инфраструктуры из-за слабых или украденных паролей.</p>

          <Image
                className='mt-[15px] rounded-[40px]'
                src={homeSectioPhoto}
                alt="header-logo"
                width={1200}
                height={560}
              />
        </div>
      </div>
    </section>
  );
};

export default Welcome;