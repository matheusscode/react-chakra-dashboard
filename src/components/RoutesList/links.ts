import { RouteLink } from "../../types";
import { IoHome, IoStatsChart } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { BsFillCreditCardFill } from "react-icons/bs";
import { AiFillTool } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BiSolidLogOut } from "react-icons/bi";

export const dashboardLinks: RouteLink[] = [
  {
    id: 1,
    text: "Dashboard",
    href: "/",
    icon: IoHome,
  },

  {
    id: 2,
    text: "Tables",
    href: "/tables",
    icon: IoStatsChart,
  },
  {
    id: 3,
    text: "Billing",
    href: " /billing",
    icon: BsFillCreditCardFill,
  },
  {
    id: 4,
    text: "RTL",
    href: "",
    icon: AiFillTool,
  },
];

export const profileLinks: RouteLink[] = [
  {
    id: 1,
    text: "Profile",
    href: "/profile",
    icon: FaUser,
  },
  {
    id: 2,
    text: "Config",
    href: "",
    icon: IoMdSettings,
  },
  {
    id: 3,
    text: "Logout",
    href: "",
    icon: BiSolidLogOut,
  },
];
