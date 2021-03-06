import React from "react";
import {Box, Container, Grid} from "@material-ui/core";
import {heightTimes, widthTimes} from "../utils/core";
import {basic} from "../__constants/basic";
import {nuel} from "../__constants/nuel";

const Home = (): JSX.Element => {
    return (
        <Box>
            <Container>
                <Box padding="50px" color="white">
                    <Grid container>
                        <Grid item xs={12} md={7} className="normalizeText">
                            <span className="codeBraces">&#123;</span>
                            <Box className="codeDetails">

                                {Object.keys(basic).map((key: string) => (
                                    <Box key={key} paddingBottom={.2} paddingTop={.2}>
                                        <span className="codeDetailTitle code">{key}: </span>
                                        <span className="codeDetailValue">"{basic[key]}"</span>
                                    </Box>))}


                            </Box>

                            <span className="codeBraces">&#125;</span>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <img src="./assets/me.jpg" alt={"me"} width={widthTimes(.2)} className="me"/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Box height={heightTimes(.025)} bgcolor={"#c8c5e2"}/>
            <Box bgcolor={"white"} padding={"50px"}>

                <Container>
                    <Box className="sectionHead">
                        <code>:</code>About <span className="sectionHeadHighlight">ME</span>
                    </Box>
                    <Box height={heightTimes(.025)} />
                    <Box className="bio">
                        {nuel.bio}
                    </Box>

                </Container>
            </Box>
            <Box height={heightTimes(.1)} bgcolor={"#c8c5e2"}/>
            <Box padding={"50px"}>
                <Container>
                    <Box className="sectionHead light" >
                        <code>:</code>I have <span className="sectionHeadHighlight lightHigh">WORKED</span> with
                    </Box>
                    <Box height={heightTimes(.05)}/>

                    <Box>
                        <Grid container justify="center" spacing={4}>
                           <Grid item>
                               <Box className={"Client-Image-varscon"} height={300} />

                           </Grid>
                            <Grid item>
                                <Box className={"Client-Image-skernel"} height={300} />

                            </Grid>
                            <Grid item>
                                <Box className={"Client-Image-rad5"} height={300} />

                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box height={heightTimes(.025)} bgcolor={"#c8c5e2"}/>


        </Box>

    )
}
export default Home;