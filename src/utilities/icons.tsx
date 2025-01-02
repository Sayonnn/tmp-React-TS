import { IoMenu } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { SiTask } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { SiRedragon } from "react-icons/si";
import { IoCloseCircle } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { TiWarning } from "react-icons/ti"; 
import { FaCheckCircle } from "react-icons/fa";
import { SiCoffeescript } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiHostinger } from "react-icons/si";

const smIcon:number = 20;
const mdIcon:number = 30;

export const icons = {
    iLightFill: <FaLightbulb size={mdIcon}/>,
    iDarkFill: <MdDarkMode size={mdIcon}/>,
    iMenuFill: <IoMenu size={mdIcon}/>,
    iAddFill:<MdAddBox size={mdIcon}/>,
    iDashFill:<MdDashboard size={mdIcon}/>,
    iTaskFill:<SiTask size={mdIcon}/>,
    iContactFill:<BsTelephoneFill size={mdIcon}/>,
    iAboutFill:<IoIosInformationCircle size={mdIcon}/>,
    iDragonFill:<SiRedragon size={mdIcon}/>,
    iCloseFill:<IoCloseCircle size = {mdIcon} />,
    iToastClose:<IoClose size={mdIcon}/>,
    iToastInfo:<FaCircleInfo size = {mdIcon}/>,
    iToastSuccess:<FaCheckCircle size = {mdIcon}/>,
    iToastError:<IoCloseCircle size = {mdIcon}/>,
    iToastWarning:<TiWarning size = {mdIcon}/>,
    iCoffeeFill:<SiCoffeescript size = {mdIcon}/>,
    iFEmailFill:<MdEmail size = {mdIcon}/>,
    iFContactFill:<BsTelephoneFill size={mdIcon}/>,
    iFDragonFill:<SiRedragon size={mdIcon}/>,
    iBDragonFill:<SiRedragon size={mdIcon}/>,

    iLink:<FaLink size={smIcon}/>,
    iLinkedIn:<FaLinkedin size={smIcon}/>,
    iFacebook:<FaFacebook size={smIcon}/>,
    iGmail:<SiGmail size={smIcon}/>,
    iHostinger:<SiHostinger size={smIcon}/>,


}