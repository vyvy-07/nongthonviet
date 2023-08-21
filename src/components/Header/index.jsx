import React from "react";
import HeaderCpn from "./HeaderCpn";
import useHeader from "./useHeader";
import "./header.css";
import Headermidle from "../HeaderMidle/Headermidle";
const Header = () => {
  const { headerMidle } = useHeader() || {};
  return (
    <div>
      <HeaderCpn headerMidle={headerMidle} />
    </div>
  );
};
// listCategory={listCategory}
export default Header;
