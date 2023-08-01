import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const homeItems = [
    {
      title: "Program Schedule",
      link: "/schedule",
    },
    {
      title: "Speaker Bios",
      link: "/speakers",
    },
    {
      title: "Giving",
      link: "/giving",
    },
    {
      title: "Session Translation Zoom Links",
      link: "/translation",
    },
    {
      title: "Helpful Resources",
      link: "/helpful-resources",
    },
  ];

  return (
    <div className="flex bg-white rounded-2xl shadow-lg navbar">
      <div className="navbar-start">
        {location.pathname !== "/" && (
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => navigate(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 6L3 12L11 18M3 12L21 12"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="navbar-center">
        <Link
          to="/"
          className="text-lg text-orange-500 font-heading btn btn-ghost"
        >
          <img src="/public/logo.svg" width={36} height={36} />
          <p className="hidden sm:block">Arise Asia 2023 Info</p>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="z-10 gap-2 py-4 px-2 mt-4 -mr-2 w-max bg-white rounded-lg shadow menu menu-sm dropdown-content"
          >
            {homeItems &&
              homeItems.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    onClick={() => document.activeElement.blur()}
                    className="font-heading"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
