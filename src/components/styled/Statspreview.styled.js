import styled from "styled-components";
import imagedesktop from '../images/image-header-desktop.jpg';
import imagemobile from '../images/image-header-mobile.jpg';
import Box from '@mui/material/Box';

export const Statsprevcardbox = styled(Box)`
    display:flex;
    flex-direction: row;
    width: 1000px;
    height: 400px;
    border-radius: 10px;
    margin:20px 20px;
    background-color:var(--Dark-desaturated-blue-card-background);
    @media screen and (max-width:960px){
        width:90%;
        height:80%
    }
    @media screen and (max-width:600px){
        flex-direction: column-reverse;
        width: auto;
        height: auto;
    }
`
export const StatsLeftCard = styled(Box)`
    margin:50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50%;
    @media screen and (max-width:960px){
        margin:30px 50px;
        width:40%;
    }
    @media screen and (max-width:600px){
        width: auto;
        margin: 20px;
    }
`
export const Statsinfo = styled(Box)`
    gap: 60px;
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    @media screen and (max-width:960px){
        margin-top: 20px;
        gap: 25px;
    }
    @media screen and (max-width:600px){
        flex-direction: column;
        gap: 1px;
        text-align: center;
        margin:auto;
    }
`
export const Statsdetail = styled(Box)`
    display:flex;
    flex-direction: column;
    margin:30px 0;
    gap:5px;
    @media screen and (max-width:960px){
        margin:5px 0;
        gap: 10px;
    }
    @media screen and (max-width:600px){
        gap: 5px;
        text-align: center;
        margin:15px auto;
    }
`
export const Statspreviewimage = styled.div`
    width: 60%;
    height:100%;
    border-radius: 0 10px 10px 0;
    background: url(${imagedesktop}),hsl(277, 64%, 61%);
    background-repeat:no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
    background-position: center;
    @media screen and (max-width: 960px) {
        width: 50%;
        height:100%;
        min-height: 416px;
        background-size: cover;
        border-radius: 0 5px 5px 0;
    }
    @media screen and (max-width: 600px) {
        background: url(${imagemobile}), hsl(277, 64%, 61%);
        min-height: 250px;
        width:auto;
        background-size: cover;
        background-position: top;
        border-radius: 5px 5px 0 0;
    }
`
export const Attribution = styled.div`
    display: flex;
    margin: 10px auto 10px;
    font-size: 11px;
    text-align: center;
    @media screen and (max-width:600px){
        flex-direction: column;
    }
`
export const AttributionA = styled(Attribution)`
    color: hsl(228, 45%, 44%);
`