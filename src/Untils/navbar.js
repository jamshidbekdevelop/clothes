// import About from "../Comonets/About";
// import Contact from "../Comonets/Contact";
// import Home from "../Comonets/Home";
// import Work from "../Comonets/Work";
import Generic from "../Components/Generic";
import profile from "../Assets/svg/profile.svg";
import like from "../Assets/svg/like.svg";
import shop from "../Assets/svg/shop.svg";
import home from "../Assets/svg/home2.svg";

export const navbar = [
  {
    id: 1,
    svg: home,
    path: "/home",
    element: <Generic />,
    search: "?",
    hidden: false,
    // private: false,
  },
  {
    id: 2,
    svg: profile,
    path: "/profile",
    element: <Generic />,
    search: "?",
    hidden: false,
    // private: false,
  },
  {
    id: 3,
    svg: like,
    path: "/like",
    element: <Generic />,
    search: "?",
    hidden: false,
    // private: false,
  },
  {
    id: 4,
    svg: shop,
    path: "/shop",
    element: <Generic />,
    search: "?",
    hidden: false,
    // private: false,
  },
];

export default navbar;
