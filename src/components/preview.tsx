import React from "react";
import {Box} from "@material-ui/core";

const Preview = (props: { img: string }) => {
    return <Box bottom="17px" left="30px"
                className="enter" position={"absolute"}>
        <img src={props.img} alt={"Me"} className="preview-box" />
    </Box>
}

export default Preview;