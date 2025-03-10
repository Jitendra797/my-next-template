import {
  Anchor,
  Box,
  Group,
  LayoutGrid,
  LucideIcon,
  NotebookTabs,
  NotepadText,
  Ship,
  Users,
  Users2,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: [],
        },
        {
          href: "/clients",
          label: "Clients",
          icon: Users2,
          submenus: [],
        },
        {
          href: "/enquiries",
          label: "Enquiries",
          icon: NotebookTabs,
          submenus: [],
        },
        {
          href: "/orders",
          label: "Orders",
          icon: Box,
          submenus: [],
        },
        {
          href: "/reports",
          label: "Reports",
          icon: NotepadText,
          submenus: [],
        },
        {
          href: "/ports-of-supply",
          label: "Ports of Supply",
          icon: Anchor,
          submenus: [],
        },
        {
          href: "/vessels",
          label: "Vessels",
          icon: Ship,
          submenus: [],
        },
        {
          href: "/traders",
          label: "Traders",
          icon: Users,
          submenus: [],
        },
      ],
    },
  ];
}
