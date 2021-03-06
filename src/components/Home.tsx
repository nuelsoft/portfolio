import React, {useState} from "react";
import {Box, Grid} from "@material-ui/core";
import {basic} from "../__constants/basic";
import Preview from "./preview";

const Home = (): JSX.Element => {
    const [preview, setPreview] = useState<boolean>(false)

    const changePreviewState = (state: boolean) => {
        setPreview(state)
    }
    return (
        <Box className="console-parent">
            <Box className={"console"} padding="17px">
                <Grid container>
                    <Grid item>
                        <Box className={"control"} bgcolor="#FE7D7D"/>
                    </Grid>
                    <Grid item>
                        <Box className={"control"} bgcolor="#FFCB65"/>
                    </Grid>
                    <Grid item>
                        <Box className={"control"} bgcolor="#CEFD96"/>
                    </Grid>
                </Grid>
                <Box className="code-block" color="white">
                    <span className="code-block">$</span> curl -X GET https://nuel.dev/_.json
                    <Box className="code-response" color="white">
                        &#123;<span className="code-detail-title">name</span>: <span
                        className="code-detail-value">{basic.name}</span>,<br/>
                        <span className="code-detail-title">role</span>: <span
                        className="code-detail-value">{basic.role}</span>,<br/>

                        <span className="code-detail-title">projects</span>: <a
                        href={`${basic.projects}`}><span
                        className="code-detail-value">{basic.projects}</span></a>,<br/>


                        <span className="code-detail-title">email</span>: <a href={`mailto:${basic.email}`}><span
                        className="code-detail-value">{basic.email}</span></a>,<br/>

                        <span className="code-detail-title">linkedIn</span>: <a
                        href={`https://linkedIn.com${basic.linkedIn}`} target={"_blank"} rel={"noreferrer"}><span
                        className="code-detail-value">{basic.linkedIn}</span></a>,<br/>

                        <span className="code-detail-title">github</span>: <a
                        href={`https://github.com${basic.github}`} target={"_blank"} rel={"noreferrer"}><span
                        className="code-detail-value">{basic.github}</span></a>,<br/>

                        <span className="code-detail-title">photo</span>:
                        <span className="code-detail-value"
                              onMouseLeave={() => changePreviewState(false)}
                              onMouseEnter={() => changePreviewState(true)}>{basic.photo}
                            {preview && <Preview img={basic.photo}/>}

                    </span>,<br/>
                        <span className="code-detail-title">location</span>: <span
                        className="code-detail-value">{basic.location}</span>&#125;
                    </Box>
                </Box>


            </Box>
        </Box>

    )
}
export default Home;