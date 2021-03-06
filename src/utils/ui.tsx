import {Box} from "@material-ui/core";
import React from "react";

type Measurement = "vh" | "px";

export const SpaceX = (props: {width: number, unit?: Measurement }): JSX.Element => {
    return (<Box width={`${props.width}${props.unit ?? "px"}`} />);
}

export const SpaceY = (props: {height: number, unit?: Measurement}): JSX.Element => {
    return (<Box height={`${props.height}${props.unit ?? "px"}`}/>)
}