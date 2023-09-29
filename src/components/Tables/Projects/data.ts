import chakraSoftUiLogo from "../../../../public/assets/companies/adobexd-logo.svg"
import addProgressTrackLogo from "../../../../public/assets/companies/progresstrack-logo.svg"
import fixPlatformErrosLogo from "../../../../public/assets/companies/slacknew-logo.svg"
import launchOurMobileAppLogo from  "../../../../public/assets/companies/spotify-logo.svg"
import addTheNewPricingPageLogo from  "../../../../public/assets/companies/jira-logo.svg"
import redesignNewOnlineShopLogo from  "../../../../public/assets/companies/invision-logo.svg"

type Member = {
  id: number;
  avatar: string;
  name: string;
};

type Company = {
  brand: string;
  brand_description: string;
  company_name: string;
};

type CompanyData = {
  id: number;
  company: Company;
  members: Member[];
  budget: number;
  completion: number;
};

export type TableData = {
  id: number;
  columns: string[];
  datas: CompanyData[];
};

export const tableData: TableData[] = [
  {
    id: 1,
    columns: ["Companies", "Members", "Budget", "Completion"],
    datas: [
      {
        id: 1,
        company: {
          brand: chakraSoftUiLogo,
          brand_description:
            "Chakra Soft UI Version Logo: A visual representation of a stylized circle in soft shades of blue and green, symbolizing harmony and innovation in user interface design.",
          company_name: "Chakra Soft UI Version",
        },
        members: [
          {
            id: 1,
            avatar: "",
            name: "Alice Johnson",
          },
          {
            id: 2,
            avatar: "",
            name: "Bob Smith",
          },
          {
            id: 3,
            avatar: "",
            name: "Eva Martinez",
          },
          {
            id: 4,
            avatar: "",
            name: "David Lee",
          },
          {
            id: 5,
            avatar: "",
            name: "Grace Brown",
          },
        ],
        budget: 14000,
        completion: 60,
      },
      {
        id: 2,
        company: {
          brand: addProgressTrackLogo,
          brand_description:
            "Add Progress Track Logo: A dynamic visual representation embodying progress and growth, with vibrant colors and forward-moving elements, reflecting our commitment to continuous improvement.",
          company_name: "Add Progress Track",
        },
        members: [
          {
            id: 1,
            avatar: "",
            name: "Linda Anderson",
          },
          {
            id: 2,
            avatar: "",
            name: "Michael Wilson",
          },
        ],
        budget: 3000,
        completion: 10,
      },
      {
        id: 3,
        company: {
          brand: fixPlatformErrosLogo,
          brand_description:
            "Fix Platform Errors Logo: A symbolic representation of precision and problem-solving, with interconnected elements forming a cohesive and stable structure. Reflecting our commitment to resolving errors and providing reliable solutions for a seamless experience.",
          company_name: "Fix Platform Errors",
        },
        members: [
          {
            id: 1,
            avatar: "",
            name: "Olivia Moore",
          },
          {
            id: 2,
            avatar: "",
            name: "Daniel Clark",
          },
        ],
        budget: 0,
        completion: 100,
      },
      {
        id: 4,
        company: {
          brand: launchOurMobileAppLogo,
          brand_description:
            "Launch our Mobile App Logo: A symbolic representation of precision and problem-solving, with interconnected elements forming a cohesive and stable structure. Reflecting our commitment to resolving errors and providing reliable solutions for a seamless experience.",
          company_name: "Launch our Mobile App",
        },
        members: [
          {
            id: 1,
            avatar: "",
            name: "Sophia Walker",
          },
          {
            id: 2,
            avatar: "",
            name: "James Hill",
          },
          {
            id: 3,
            avatar: "",
            name: "Emma Young",
          },
          {
            id: 4,
            avatar: "",
            name: "William White",
          },
        ],
        budget: 32000,
        completion: 100,
      },
      {
        id: 5,
        company: {
          brand: addTheNewPricingPageLogo,
          brand_description:
            "Add the New Pricing Page Logo: A creative visual representation embodying innovation and simplicity, designed to enhance user experience. Reflecting our dedication to transparent pricing and user-friendly design for our customers.",
          company_name: "Add the New Pricing Page",
        },
        members: [
          {
            id: 1,
            avatar: "",
            name: "Ava Davis",
          },
          {
            id: 2,
            avatar: "",
            name: "Noah King",
          },
          {
            id: 3,
            avatar: "",
            name: "Mia Turner",
          },
          {
            id: 4,
            avatar: "",
            name: "Logan Wright",
          },
          {
            id: 5,
            avatar: "",
            name: "Chloe Johnson",
          },
        ],
        budget: 400,
        completion: 25,
      },
      {
        id: 6,
        company: {
          brand: redesignNewOnlineShopLogo,
          brand_description:
            "Redesign New Online Shop Logo: A visual representation of creativity and modernity, blending innovative design elements to offer a fresh and engaging online shopping experience. Reflecting our commitment to redefining digital retail with style and functionality.",
          company_name: "Redesign New Online Shop",
        },
        members: [
          {
            id: 1,
            avatar: "",
            name: "Ethan Evans",
          },
          {
            id: 2,
            avatar: "",
            name: "Aria Harris",
          },
        ],
        budget: 7600,
        completion: 40,
      },
    ],
  },
];
