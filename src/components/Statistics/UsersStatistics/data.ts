import { IoWalletSharp } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { IconType } from "react-icons";

export interface ActiveUsersCardProps {
  id: number;
  title: string;
  value: string;
  icon: IconType;
}

export const ACTIVE_USERS_CARDS: ActiveUsersCardProps[] = [
  {
    id: 1,
    title: "Today´s Money",
    value: "$53,000",
    icon: IoWalletSharp,
  },
  {
    id: 2,
    title: "Today´s Users",
    value: "+2,300",

    icon: BsGlobe,
  },
  {
    id: 3,
    title: "New Clients",
    value: "+3,052",

    icon: AiOutlineFileText,
  },
  {
    id: 4,
    title: "Total Sales",
    value: "$173,000",

    icon: FaShoppingCart,
  },
];
