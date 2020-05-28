import React from "react";
import ReactLoading from "react-loading";

function Loader() {
  return (
    <div className="loader">
      <ReactLoading type="spokes" color="black" />
    </div>
  );
}

export default Loader;
