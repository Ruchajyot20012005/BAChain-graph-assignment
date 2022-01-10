import React from "react";
import Activity from "./Activity";
import "./ContainerFirst.css";
import MainMatrics from "./MainMatrics";

function ContainerFirst() {
  return (
    <div className="container-first">
      <div className="company-info-graph">
        <div className="info">
          <div className="heading">
            <span className="main-heading">Your company information</span>
            <span className="sub-heading">Main matrics</span>
            <span className="text-underline"></span>
          </div>
          <div className="claculations">
            <div className="total">
              <span className="element-1">Total Shares</span>
              <span className="element-2">3660</span>
            </div>
            <div className="total">
              <span className="element-1">Total Value</span>
              <span className="element-2">$ 3660</span>
            </div>
          </div>
        </div>
        <div className="graph-1">
          <MainMatrics />
        </div>
      </div>
      <div className="past-activity">
        <div className="info">
          <div className="heading">
            <span className="main-heading">Past activity</span>
            <span className="text-underline"></span>
          </div>
        </div>
        <div className="activity-list">
          <Activity title={"Company Creation"} date={"January 1, 2022"} />
          <Activity title={"Loans tokenised"} date={"February 1, 2022"} />
          <Activity title={"Company Creation"} date={"March 1, 2022"} />
        </div>
      </div>
    </div>
  );
}

export default ContainerFirst;
