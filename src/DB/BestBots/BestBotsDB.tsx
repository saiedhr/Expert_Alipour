const BestBotsDB = () => {
  const bestBots = [
    {
      Id: 1,
      Title: "آترئوس",
      Description: "این ربات آترئوس میباشد.",
      Price: 5000000,
      Img: require("../../assests/images/forex-robot.jpg"),
      Comments: [],
    },
    {
      Id: 2,
      Title: "آترئوس پرو",
      Description: "این ربات آترئوس پرو میباشد.",
      Price: 6000000,
      Img: require("../../assests/images/forex-bot-02.jpg"),
      Comments: [],
    },
    {
      Id: 3,
      Title: "زئوس",
      Description: "این ربات زئوس میباشد.",
      Price: 7000000,
      Img: require("../../assests/images/forex-bot-03.jpg"),
      Comments: [],
    },
    {
      Id: 4,
      Title: "زئوس پرو",
      Description: "این ربات زئوس پرو میباشد.",
      Price: 8000000,
      Img: require("../../assests/images/forex-bot-04.jpg"),
      Comments: [
        {
          Id:1,
          Title: "",
          Content: "یک بات پرسود",
          UserName: "ایمان",
        },
        {
          Id:2,
          Title: "",
          Content: "دستتون درد نکنه واقعا عالی بود",
          UserName: "رضا",
        },
        {
          Id:3,
          Title: "",
          Content: "از چه اندیکاتورهایی استفاده شده؟",
          UserName: "میلاد",
        },
        {
          Id:4,
          Title: "",
          Content: "این بهتره یا دانته پرو",
          UserName: "نسیم",
        },
      ],
    },
    {
      Id: 5,
      Title: "دانته",
      Description: "این ربات دانته میباشد.",
      Price: 9000000,
      Img: require("../../assests/images/forex-bot-05.jpg"),
      Comments: [],
    },
    {
      Id: 6,
      Title: "دانته پرو",
      Description: "این ربات دانته پرو میباشد.",
      Price: 10000000,
      Img: require("../../assests/images/forex-bot-06.jpg"),
      Comments: [
        {
          Id:5,
          Title: "",
          Content: "این بات بی نظیره",
          UserName: "احسان",
        },
      ],
    },
  ];
  return bestBots;
};

export default BestBotsDB;
