import React, { Fragment } from "react";
import Images from "../../Assets/meals2.jpg";
import Styler1 from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={Styler1.header}>
        <h1>AddemyMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={Styler1["main-image"]}>
        <img src={Images} alt="Table of different food delicacies!" />
      </div>
    </Fragment>
  );
};
export default Header;
