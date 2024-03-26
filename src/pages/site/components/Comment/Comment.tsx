import React from "react";

const Comment = (props: any) => {
  console.log(props.BestBot);
  return (
    <>
      <div className="w-fullbg-white rounded-lg border p-1 md:p-3 m-10">
        <h3 className="font-semibold p-1">گفتگو</h3>
        <div className="flex flex-col gap-5 m-3">
          {props?.BestBot?.Comments?.map((c: any) => (
            <div key={c.Id} className="flex w-full justify-between border rounded-md">
              <div className="p-3">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/22263436?v=4"
                    className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400"
                  />
                  <h3 className="font-bold">
                    {c.UserName}
                    <br />
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">{c.Content}</p>
                {/* <button className="text-right text-blue-500">پاسخ</button> */}
              </div>

              <div className="flex flex-col gap-3 p-3">
                <div>
                  <svg
                    className="w-6 h-6 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    className="w-6 h-6 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full px-3 mb-2 mt-6">
          <textarea
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
            name="body"
            placeholder="کامنت"
            required
          ></textarea>
        </div>

        <div className="w-full flex justify-end px-3 my-3">
          <input
            type="submit"
            className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500 text-lg"
            value="ارسال کامنت"
          />
        </div>
      </div>
    </>
  );
};

export default Comment;
