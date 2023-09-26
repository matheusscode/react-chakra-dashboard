import { IconType } from "react-icons";

export interface RouteLink {
  id: number;
  text: string;
  href: string;
  icon: IconType;
}

export interface RoutesListProps {
  title?: string;
  routesLinks: RouteLink[];
  isOpen: boolean
}
