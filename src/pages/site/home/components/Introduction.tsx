import React, { useRef } from "react";
import "../HomePage.scss";

const Introduction = () => {
  const section1 = useRef(null);
  return (
    <>
      <div className="container flex justify-center mx-auto mt-48">
        <div className="flex flex-wrap introductionW rounded-2xl overflow-hidden shadow-xl p-10">
          <div className="flex-auto w-64 p-10">
            <h1 className="text-gray-700 text-3xl font-medium">
              چرا دوره‌های آموزشی پارس روبوتس؟
            </h1>
            <p className="text-gray-700 text-base mt-3">
              آیا تابحال در بازارهای مالی ضررهای جبران‌ناپذیر را تجربه کرده‌اید؟
              انجام معاملات در بازارهای مالی نیازمند دانش روز و استفاده از
              ابزارهای مدرن است. آموزش‌های پارس روبوتس بر اساس جدیدترین متدهای
              روز دنیا، سرمایه‌گذاری شما را متحول می‌کند. پارس روبوتس با ترکیب
              هوش‌مصنوعی و دانش معامله‌گری، نوآوری‌ هایی را در دوره‌های آموزشی
              خود در سطح کشور ارائه می‌کند.
            </p>
          </div>
          <div className="flex-auto w-32 m-auto">
            <img
              className="max-w-96 m-auto"
              src={require("../../../../assests/images/Introduction01.jpg")}
              alt="Sunset in the mountains"
            />
          </div>
        </div>
      </div>

      <div
        ref={section1}
        className="container flex justify-center mx-auto mt-36 mb-36"
      >
        <div className="flex flex-wrap introductionW rounded-2xl overflow-hidden shadow-xl p-10">
          <div className="flex-auto w-32 m-auto">
            <img
              className="max-w-96 m-auto"
              src={require("../../../../assests/images/Introduction02.jpg")}
              alt="Sunset in the mountains"
            />
          </div>
          <div className="flex-auto w-64 p-10">
            <h1 className="text-gray-700 text-3xl font-medium">
              سرمایه‌گذاری به کمک ربات‌های معامله‌گر
            </h1>
            <p className="text-gray-700 text-base mt-3">
              آدر دنیای امروز ، سرمایه‌گذاری به روش‌های سنتی کارایی خود را از
              دست داده است. با گسترش روش‌های نوین کامپیوتری بر‌اساس هوش‌مصنوعی،
              افراد بیشتری در بازارهای مالی متضرر می‌شوند. ربات‌های معامله‌گر
              می‌توانند خطاهای انسانی و احساسات را از معاملات حذف کنند و به کمک
              تحلیل‌های پیشرفته، سودآوری مستمر داشته باشند.
            </p>
          </div>
        </div>
      </div>

      <div className="container flex justify-center mx-auto mt-36 mb-36">
        <div className="flex flex-wrap introductionW rounded-2xl overflow-hidden shadow-xl p-10">
          <div className="flex-auto w-64 p-10">
            <h1 className="text-gray-700 text-3xl font-medium">
              تفاوت الگوتریدینگ و اتوتریدینگ
            </h1>
            <p className="text-gray-700 text-base mt-3">
              عمده افراد در سطح دنیا(85 درصد افراد) که در زمینه ی برنامه نویسی
              مالی فعالیت می کنند اتوتریدینگ انجام می دهند و حتی جالب است بدانید
              حتی کسانی هم که دارند ادعا می کنند الگوتریدینگ انجام می دهند در
              اصل دارند همان اتوتریدینگ را انجام می دهند.(حتی در موارد زیادی
              افراد فرق این دو را متوجه نیستند)
            </p>
          </div>
          <div className="flex-auto w-32 m-auto">
            <img
              className="max-w-96 m-auto"
              src={require("../../../../assests/images/Introduction03.png")}
              alt="Sunset in the mountains"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
