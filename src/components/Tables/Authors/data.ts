const avatar1 = "https://avatars.githubusercontent.com/u/99546472?v=4";
const avatar2 = "https://avatars.githubusercontent.com/u/66514698?v=4";
const avatar3 = "https://avatars.githubusercontent.com/u/87918106?v=4";
const avatar4 = "https://avatars.githubusercontent.com/u/79425923?v=4";
const avatar5 = "https://avatars.githubusercontent.com/u/87545541?v=4";
const avatar6 = "https://avatars.githubusercontent.com/u/85084918?v=4";

type AuthorFunction = {
  function: string;
  area: string;
};

type Author = {
  id: number;
  avatar: string;
  name: string;
  function: AuthorFunction;
  status: "Online" | "Offline";
  date: string;
  github: string;
};

type AuthorData = {
  id: number;
  member: Author;
};

export type TableData = {
  id: number;
  columns: string[];
  datas: AuthorData[];
};

export const tableData: TableData[] = [
  {
    id: 1,
    columns: ["Author", "Function", "Status", "Employed"],
    datas: [
      {
        id: 1,
        member: {
          id: 1,
          avatar: avatar1,
          name: "Matheus Figueiredo",
          date: "17/08/2023",
          function: {
            area: "Organization",
            function: "CEO",
          },

          github: "matheusscode",
          status: "Online",
        },
      },
      {
        id: 2,
        member: {
          id: 2,
          avatar: avatar2,
          name: "Luciano Alves",
          date: "14/09/2023",
          function: {
            area: "Support",
            function: "CO-Funder",
          },

          github: "@luas10c",
          status: "Offline",
        },
      },
      {
        id: 3,
        member: {
          id: 3,
          avatar: avatar3,
          name: "Fernando Unger",
          date: "14/09/2023",
          function: {
            area: "Design",
            function: "UI / UX Designer",
          },

          github: "fernandounger",
          status: "Online",
        },
      },
      {
        id: 4,
        member: {
          id: 4,
          avatar: avatar4,
          name: "Erick Gabriel",
          date: "04/10/2023",
          function: {
            area: "Design Patters",
            function: "Systems Analyst",
          },
          github: "erickgcastro",
          status: "Online",
        },
      },
      {
        id: 5,
        member: {
          id: 5,
          avatar: avatar5,
          name: "Flavio Junior",
          date: "28/09/2023",
          function: {
            area: "Deployment",
            function: "DevOps Engineer",
          },
          github: "fpdsjr",
          status: "Offline",
        },
      },
      {
        id: 6,
        member: {
          id: 6,
          avatar: avatar6,
          name: "Thiago Marques",
          date: "25/06/2023",
          function: {
            area: "Developer",
            function: "CTO / Software engineer",
          },
          github: "zMarques",
          status: "Online",
        },
      },
    ],
  },
];
