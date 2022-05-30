import React from "react";
import CenterMenu from "./CenterMenu";

const Header = () => {
  const btnStyle =
    "border-[2px] rounded-[10px] border-[#232a4e] px-[25px] py-[7px]";
  return (
    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[.8rem]">
      {/* logo */}
      <img
        src={require("../img/MuzicLogo.png")}
        alt=""
        className="logo w-[42px] w=[42px] h-[42px]"
      />
      {/* side menu */}
      <CenterMenu />
      {/* buttons */}
      <div className="buttons flex">
        <button className={`mr-[35px] hover:bg-[#232a4e] ` + btnStyle}>
          Sign up
        </button>
        <button className={btnStyle + ` bg-[#232a4e] `}>Log in</button>
      </div>
    </div>
  );
};

export default Header;
