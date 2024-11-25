import Image from "next/image";
import Nav from "./ui/Nav";
import headerLogo from "../../assets/header-logos/img/strongpass-logo.svg";
import rightArrow from "../../assets/header-logos/img/strongpass-right-logo.svg";
import Link from "next/link";
import BurgerButton from "./ui/BurgerButton/BurgerButton";
import messageIcon from "../../assets/header-logos/img/message.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between py-[27px]">
          <div className="flex items-center gap-[80px] ">
            <BurgerButton />
            <Link href="/">
              <Image
                src={headerLogo}
                alt="header-logo"
                width={60}
                height={60}
              />
            </Link>
            <Nav />
          </div>

          <div className="flex max-sm:hidden">
            <button className="border-2 border-[#408077] bg-transparent text-[#408077] py-[10px] px-[30px] rounded-[13px] hover:bg-[#408077] hover:text-white transition-all duration-500">
              Задать вопрос
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
          <div className="hidden items-center justify-center w-[46px] h-[46px] rounded-lg bg-[#F2F5F4] max-sm:flex ">
            <Image src={messageIcon} alt="message" width={18} height={13.5} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
