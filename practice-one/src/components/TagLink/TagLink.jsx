import React, { useState } from "react";
import styles from "./TagLink.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TagLink = ({ icon, name, path, iconStyle, nameStyle }) => {
  const [changeColor, setChangeColor] = useState(false);
  const handleChangeColor = () => {
    setChangeColor(!changeColor);
  };

  return (
    <a
      href={path}
      className={`${cx("link__wrapper")} ${changeColor ? styles.active : ""}`}
      onClick={handleChangeColor}
      role="button"
    >
      <img className={cx("link__icon")} src={icon} alt={name} style={iconStyle}/>
      <span className={cx("link__name")} style={nameStyle}>{name}</span>
    </a>
  );
};

export default TagLink;
