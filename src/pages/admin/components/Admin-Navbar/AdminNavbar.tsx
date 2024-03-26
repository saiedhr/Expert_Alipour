import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AdminNavbarDB from "../../../../DB/AdminNavbar/AdminNavbarDB";
import "./AdminNavbar.scss";

const mnuBrClasses =
  " block py-1 md:py-3 pr-1 align-middle no-underline border-b-2 ";
const mnuIconClasses = " pl-0 md:pl-3 ";
const mnuSpanClassess =
  " pb-1 md:pb-0 text-xs md:text-base block md:inline-block ";
// "text-gray-400 md:text-gray-200"
const AdminNavbar = (props: any) => {
  const location = useLocation();
  //const setClr = () => Math.floor(Math.random() * 16777215).toString(16);
  const [mnuColor, setMnuColor] = useState<any[]>(AdminNavbarDB);

  useEffect(() => {
    setMnuColor(
      mnuColor.map((list) => {
        list.BrValue = mnuBrClasses;
        list.IconValue = mnuIconClasses + " text-gray-400 md:text-gray-200 ";
        list.SpanValue = mnuSpanClassess + " text-gray-400 md:text-gray-200 ";
        return list;
      })
    );
  }, []);

  const handleMnuMouseEnter = (list: any) => {
    setMnuColor(
      mnuColor.map((i) => {
        if (i.Id == list.Id) {
          i.BrValue = mnuBrClasses + i.BorderColor;
          i.IconValue = mnuIconClasses + i.TextColor;
          i.SpanValue = mnuSpanClassess + i.TextColor;
        }
        return i;
      })
    );
  };

  const handleMnuMouseLeave = (list: any) => {
    setMnuColor(
      mnuColor.map((i) => {
        i.BrValue = mnuBrClasses + " border-white";
        i.IconValue = mnuIconClasses + " text-white";
        i.SpanValue = mnuSpanClassess + " text-white";
        return i;
      })
    );
  };

  const handleClickMnuColor = (e: any) => {
    // setAdminMenu(
    //   adminMenu.map((list) => {
    //     list.BrValue = "deactive";
    //     return list;
    //   })
    // );
    // setActiveMnu("active");
    // if (e.target.children[0] && e.target.children[1]) {
    //   e.target.style.borderColor = "#E5E7EB";
    //   e.target.children[1].style.color = "#E5E7EB";
    //   e.target.children[1].style.color = "#E5E7EB";
    //   e.target.addClass("active");
    // }
  };

  return location.pathname.search("/admin/") == 0 ? (
    <>
      <header className="bg-gray-800 font-sans leading-normal tracking-normal mt-12 ">
        <nav
          aria-label="menu nav"
          className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
        >
          <div className="flex flex-wrap items-center">
            <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
              <a href="#" aria-label="Home">
                <span className="text-xl pr-2">
                  <i className="em em-grinning"></i>
                </span>
              </a>
            </div>

            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
              <span className="relative w-full">
                <input
                  aria-label="search"
                  type="search"
                  id="search"
                  placeholder="Search"
                  className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pr-10 appearance-none leading-normal"
                />
                <div
                  className="absolute search-icon"
                  style={{ top: "1rem", right: ".8rem" }}
                >
                  <svg
                    className="fill-current pointer-events-none text-white w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>
              </span>
            </div>

            <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
              <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                {/* <li className="flex-1 md:flex-none md:ml-3">
                  <a
                    className="inline-block py-2 px-4 text-white no-underline"
                    href="#"
                  >
                    Active
                  </a>
                </li> */}
                <li className="flex-1 md:flex-none md:ml-3">
                  <Link
                    className="inline-block py-2 px-4 text-white no-underline"
                    to="/"
                  >
                    سایت
                  </Link>
                  <Link
                    className="inline-block py-2 px-4 text-white no-underline"
                    to="/admin/panel"
                  >
                    پنل ادمین
                  </Link>
                  {/* <a
                    className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                    href="#"
                  >
                    Site
                  </a> */}
                </li>
                <li className="flex-1 md:flex-none md:ml-3">
                  <div className="relative inline-block">
                    <button className="drop-button text-white py-2 px-2">
                      {" "}
                      <span className="pl-2">
                        <i className="em em-robot_face"></i>
                      </span>{" "}
                      Hi, User{" "}
                      <svg
                        className="h-3 fill-current inline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                    <div
                      id="myDropdown"
                      className="dropdownlist absolute bg-gray-800 text-white left-0 mt-3 p-3 overflow-auto z-30 invisible"
                    >
                      <input
                        type="text"
                        className="drop-search p-2 text-gray-600"
                        placeholder="Search.."
                        id="myInput"
                      />
                      <a
                        href="#"
                        className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                      >
                        <i className="fa fa-user fa-fw"></i> Profile
                      </a>
                      <a
                        href="#"
                        className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                      >
                        <i className="fa fa-cog fa-fw"></i> Settings
                      </a>
                      <div className="border border-gray-800"></div>
                      <a
                        href="#"
                        className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                      >
                        <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="flex flex-col md:flex-row">
          <nav aria-label="alternative nav">
            <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 md:relative md:h-screen z-10 w-full md:w-48 content-center">
              <div className="md:mt-32 md:w-48 md:fixed md:right-0 md:top-0 content-center md:content-start text-right justify-between">
                <ul className="  list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-right">
                  {mnuColor.map((list) => (
                    <li className="ml-3 flex-1" key={list.Id}>
                      <Link
                        to={list.Href}
                        className={list.BrValue}
                        onMouseEnter={() => handleMnuMouseEnter(list)}
                        onMouseLeave={() => handleMnuMouseLeave(list)}
                      >
                        <i className={list.Icon + list.IconValue}></i>
                        <span className={list.SpanValue}>{list.Title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
          <section className="flex-1">
            <div
              id="main"
              className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
            >
              <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                  <h1 className="font-bold pr-2">{props.title}</h1>
                </div>
              </div>
              {props.children}
            </div>
          </section>
        </div>
      </main>
    </>
  ) : null;
};

export default AdminNavbar;
