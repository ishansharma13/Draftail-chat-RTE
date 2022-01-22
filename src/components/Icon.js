import React from "react";
/**
 * Icon as SVG element. Can optionally render a React element instead.
 */
const Icon = ({ icon, title, className }) => {
  let children;
  console.log("Here");
  if (typeof icon === "string") {
    if (icon.includes("#")) {
      children = <use xlinkHref={icon} />;
    } else {
      children = <path d={icon} />;
    }
  } else if (Array.isArray(icon)) {
    
    children = icon.map((d, i) => <path key={i} d={d} />);
  } else {
    return icon;
  }
  // console.log(children);
  return (
    
    <svg
      width="16"
      height="16"
      viewBox="0 0 1024 1024"
      className={`Draftail-Icon ${className || ""}`}
      aria-hidden={title ? null : true}
      role={title ? "img" : null}
      aria-label={title || null}
    >
      {children}
    </svg>
  );
};

Icon.defaultProps = {
  title: null,
  className: null
};

export default Icon;
