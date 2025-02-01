import { Link } from "react-router-dom";

function NavPage() {
  return (
    <div className=" hidden sm:flex lg:w-[55%]">
      <nav className=" sm:bg-white sm:bg-opacity-10 backdrop-blur-md sm:p-6 lg:p-4 sm:flex lg:w-full">
        <ul className=" flex gap-4 justify-end lg:w-full">
          <li className=" text-white text-lg uppercase">
            <Link to="/">
              <span className=" mr-2 font-bold text-xl">01</span>Home
            </Link>
          </li>
          <li className=" text-white text-lg uppercase">
            <Link to="/destination">
              <span className=" mr-2 font-bold text-xl">02</span>Destination
            </Link>
          </li>
          <li className=" text-white text-lg uppercase">
            <Link to="/crew">
              <span className=" mr-2 font-bold text-xl">03</span>Crew
            </Link>
          </li>
          <li className=" text-white text-lg uppercase">
            <Link to="/technology">
              <span className=" mr-2 font-bold text-xl">04</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavPage;
