import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

interface RoutePathProps {
  route?: string;
}

const RoutePath: React.FC<RoutePathProps> = ({ route }) => {
  return (
    <Breadcrumb w="100%">
      <BreadcrumbItem>
        <BreadcrumbLink href="#" color="gray.400">
          Page
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#" color="blackAlpha.900">
          {route}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default RoutePath;
