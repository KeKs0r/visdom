import React from "react";
import Header from "../../components/Header";
import classes from "./CoreLayout.scss";


export const CoreLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <div className={classes.mainContainer}>
        {children}
      </div>
    </div>
  )
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
}

export default CoreLayout
