import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, isRed, active, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } `}
    >
      <CardContent>
        {/* Title >>> Coronavirus cases */}
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>

        {/* Number of cases .>> +120K */}
        <h2 className={`infoBox_cases ${!isRed && "infoBox_cases--green"}`}>
          {cases}
        </h2>

        {/* Total >>> 1.2M*/}
        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
