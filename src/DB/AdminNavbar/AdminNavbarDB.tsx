const AdminNavbarDB = () => {
  const adminNavbar = [
    {
      Id: 1,
      Title: "بات‌ها",
      Href: "/admin/bots",
      Icon: "fa fa-list",
      TextColor: "text-cyan-400",
      BorderColor: "border-cyan-400",
    },
    {
      Id: 2,
      Title: "تسک‌ها",
      Href: "/admin/bots",
      Icon: "fas fa-tasks",
      TextColor: "text-emerald-400",
      BorderColor: "border-emerald-400",
    },
    {
      Id: 5,
      Title: "پیام‌ها",
      Href: "/admin/bots",
      Icon: "fa fa-envelope",
      TextColor: "text-blue-400",
      BorderColor: "border-blue-400",
    },
    {
      Id: 6,
      Title: "آمار",
      Href: "/admin/bots",
      Icon: "fas fa-chart-area",
      TextColor: "text-purple-400",
      BorderColor: "border-purple-400",
    },
    {
      Id: 7,
      Title: "پرداخت",
      Href: "/admin/bots",
      Icon: "fa fa-wallet",
      TextColor: "text-rose-400",
      BorderColor: "border-rose-400",
    },
  ];
  return adminNavbar;
};

export default AdminNavbarDB;
