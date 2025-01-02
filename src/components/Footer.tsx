import React from "react";
import logo from "../assets/images/Logo_2.png";
import { icons } from "../utilities/icons";

function Footer() {
  return (
    <footer className="flex justify-between items-center  px-40 py-4">
      <span>
        <img src={logo} className={`object-contain w-[100px] h-[auto] `} />
      </span>
      <div className="flex flex-col gap-2 justify-end">
        <span className="text-sm text-end">
          Created by: <span className="text-emerald-300">Laud Zion • Zitech</span>
        </span>
        <span className="font-bold flex gap-2">
          Deployed on: <span className="text-emerald-300 flex items-center flex-row whitespace-nowrap">{icons.iHostinger} ostinger</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
