import { Link } from "react-router-dom";
import PropTypes from "prop-types";

MobileNav.propTypes = {
  isLargeScreen: PropTypes.bool,
  isOpenNav: PropTypes.bool,
  setIsOPenNav: PropTypes.func,
};

function MobileNav({ isLargeScreen, isOpenNav, setIsOPenNav }) {
  if (isLargeScreen) return;

  return (
    <div className=" absolute inset-0 flex justify-end ">
      <nav
        style={
          isOpenNav
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-75%)" }
        }
        className="bg-black z-10 bg-opacity-10 backdrop-blur-lg w-[75%] h-full px-6 py-32 transition-transform duration-300 animate-slideIn"
      >
        <ul className=" flex flex-col gap-4">
          <li
            onClick={() => setIsOPenNav(false)}
            className=" text-white text-lg uppercase"
          >
            <Link to="/">
              <span className=" mr-2 font-bold text-xl">01</span>Home
            </Link>
          </li>
          <li
            onClick={() => setIsOPenNav(false)}
            className=" text-white text-lg uppercase"
          >
            <Link to="/destination">
              <span className=" mr-2 font-bold text-xl">02</span>Destination
            </Link>
          </li>
          <li
            onClick={() => setIsOPenNav(false)}
            className=" text-white text-lg uppercase"
          >
            <Link to="/crew">
              <span className=" mr-2 font-bold text-xl">03</span>Crew
            </Link>
          </li>
          <li
            onClick={() => setIsOPenNav(false)}
            className=" text-white text-lg uppercase"
          >
            <Link to="/technology">
              <span className=" mr-2 font-bold text-xl">04</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;
