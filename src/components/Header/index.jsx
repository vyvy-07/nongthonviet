import React from "react";
import HeaderCpn from "./HeaderCpn";
import Headermidle from "./Headermidle";
import useHeader from "./useHeader";
import "./header.css";
const Header = () => {
  const { headerMidle } = useHeader() || {};
  return (
    <div>
      <HeaderCpn headerMidle={headerMidle} />
      <Headermidle headerMidle={headerMidle} />
    </div>
  );
};
// listCategory={listCategory}
export default Header;
