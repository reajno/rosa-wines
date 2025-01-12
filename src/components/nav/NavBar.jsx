import NavMenuSmall from "./NavMenuSmall";
import NavMenuLarge from "./navMenuLarge";
import BrandLogo from "../BrandLogo";
import Cart from "./Cart";
import useWindowSize from "../../hooks/useWindowSize";

const NavBar = () => {
  const { width } = useWindowSize();

  return (
    <nav className=" fixed w-full bg-bittersweet-400 z-50">
      <div className="p-5 relative flex justify-between items-center">
        {width > 768 ? <NavMenuLarge /> : <NavMenuSmall />}

        <BrandLogo
          className={
            "absolute left-0 right-0 mx-auto max-w-20 flex justify-center"
          }
        />

        <Cart />
      </div>
    </nav>
  );
};
export default NavBar;
