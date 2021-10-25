import React from "react";
import WeatherCard from "../../../components/WheterCard";
import TimeCard from "@src/components/TimeCard";
import MainContainer from "@src/components/MainContainer";
import CriptoCard from "@src/components/CryptoCard";

const Home = ()=>{

    return(
        <MainContainer>
            <WeatherCard/>
            <TimeCard/>
            <CriptoCard/>
        </MainContainer>
    )
}

export default Home