import notificationIcon from "../../../../public/assets/icons/notification-icon.svg"
import HTMLIcon from "../../../../public/assets/icons/html-icon.svg"
import CartIcon from "../../../../public/assets/icons/cart-icon.svg"
import CardIcon from "../../../../public/assets/icons/card-icon.svg"
import dropBoxIcon from "../../../../public/assets/icons/dropbox-icon.svg"
import photoshopXDIcon from "../../../../public/assets/icons/photoshopxd-icon.svg"

export type Steps = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
};

export const steps: Steps[] = [
  {
    id: 1,
    src: notificationIcon,
    alt: "",
    title: "$2400, Design changes",
    description: "22 DEC 7:20 PM",
  },
  {
    id: 2,
    src: HTMLIcon,
    alt: "",
    title: "New order #4219423",
    description: "21 DEC 11:21 PM",
  },
  {
    id: 3,
    src: CartIcon,
    alt: "",
    title: "Server Payments for April",
    description: "21 DEC 9:28 PM",
  },
  {
    id: 4,
    src: CardIcon,
    alt: "",
    title: "New card added for order #3210145",
    description: "20 DEC 3:52 PM",
  },
  {
    id: 5,
    src: dropBoxIcon,
    alt: "",
    title: "Unlock packages for Development",
    description: "19 DEC 11:35 PM",
  },
  {
    id: 6,
    src: photoshopXDIcon,
    alt: "",
    title: "New order #9851258",
    description: "18 DEC 4:41 PM",
  },
];
