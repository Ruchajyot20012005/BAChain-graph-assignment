import React from "react";
import "./ContainerSecond.css";
import LoansMatrics from "./LoansMatrics";

function ContainerSecond() {
  return (
    <div className="loan-matrics">
      <div className="heading">
        <span className="main-heading">Loans matrics</span>
        <span className="sub-heading">Loans owners</span>
        <span className="text-underline"></span>
      </div>
      <div className="graph-2">
        <LoansMatrics />
      </div>
    </div>
  );
}

export default ContainerSecond;
