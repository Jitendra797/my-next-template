export interface NavItem {
  href: string;
  label: string;
  // icon?: React.ComponentType;
}

export const navitems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  // { href: "/docs", label: "Docs", icon: DocsIcon },
  // { href: "/blog", label: "Blog", icon: BlogIcon },
  // { href: "/news", label: "News", icon: NewsIcon },
  // { href: "/events", label: "Events", icon: EventsIcon },
  // { href: "/community", label: "Community", icon: CommunityIcon },
  // { href: "/careers", label: "Careers", icon: CareersIcon },
  // { href: "/donate", label: "Donate", icon: DonateIcon },
  // { href: "/profile", label: "Profile", icon: ProfileIcon },
  // { href: "/settings", label: "Settings", icon: SettingsIcon },
  // { href: "/logout", label: "Logout", icon: LogoutIcon },
  // { href: "/admin", label: "Admin", icon: AdminIcon },
  // { href: "/admin/users", label: "Users", icon: UsersIcon },
  // { href: "/admin/settings", label: "Settings", icon: SettingsIcon },
  // { href: "/admin/logs", label: "Logs", icon: LogsIcon },
  // { href: "/admin/reports", label: "Reports", icon: ReportsIcon },
  // { href: "/admin/roles", label: "Roles", icon: RolesIcon },
];
