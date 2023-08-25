import React, { useState } from "react";
import styles from "./TagLink.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TagLink = ({ icon, name }) => {
  const [changeColor, setChangeColor] = useState(false);
  const handleChangeColor = () => {
    setChangeColor(!changeColor);
  };

  return (
    <a
      className={`${cx("link__wrapper")} ${changeColor ? styles.active : ""}`}
      onClick={handleChangeColor}
    >
      <img className={cx("link__icon")} src={icon} alt="name" />
      <span className={cx("link__name")}>{name}</span>
    </a>
  );
};

export default TagLink;
