import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Total de articulos",
    value: "12,433",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "mas que el mes pasado",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Usuarios en el sistema ",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "mas que el mes pasado",
    },
  },

  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Total acumulado",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "",
      label: "",
    },
  },
];

export default statisticsCardsData;
