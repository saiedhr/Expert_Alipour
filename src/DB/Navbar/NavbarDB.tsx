const NavbarDB = () => {
  const navbar = [
    { Id: 1, Title: "سایت پارس رباتس", Href: "/" },
    { Id: 2, Title: "بلاگ", Href: "blog" },
    {
      Id: 3,
      Title: "ربات‌ها",
      Href: "bots",
      subMenu: {
        menu: [
          { Title: "ربات‌های نیمه اتوماتیک" },
          { Title: "ربات‌های اتوماتیک" },
        ],
      },
    },
    {
      Id: 4,
      Title: "آموزش‌ها",
      Href: "tutorials",
      subMenu: {
        menu: [{ Title: "آموزش‌های رایگان" }],
      },
    },
    { Id: 5, Title: "آشنایی با ربات‌ها", Href: "learn-bots" },
    { Id: 6, Title: "درباره ما", Href: "about-us" },
    { Id: 7, Title: "تماس با ما", Href: "contact-us" },
    { Id: 8, Title: "پنل ادمین", Href: "admin/panel" },
  ];
  return navbar;
};

export default NavbarDB;
