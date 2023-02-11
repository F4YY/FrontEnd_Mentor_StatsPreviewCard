import styled from "styled-components";

export const Container = styled.div`
    --Very-dark-blue-main-background: hsl(233, 47%, 7%);
    --Dark-desaturated-blue-card-background: hsl(244, 38%, 16%);
    --Soft-violet-accent: hsl(277, 64%, 61%);
    --White-main-heading-stats: hsl(0, 0%, 100%);
    --Slightly-transparent-white-main-paragraph: hsla(0, 0%, 100%, 0.75);
    --Slightly-transparent-white-stat-headings: hsla(0, 0%, 100%, 0.6);
    --Main-heading-font-family:Inter;
    --Main-heading-font-weight:700;
    --Main-paragrapgh-font-weight:200;
    --Stats-font-family:Lexend Deca;
    --Stats-heading-font-weight:700;
    --Stats-subheading-font-weight:400;
    display:flex;
    flex-direction: column;
    margin: auto;
    min-height: 100vh;
    width:100wh;
    font-size: 15px;
    align-items: center;
    justify-content: center;
    background-color: var(--Very-dark-blue-main-background);
    h1{
        font-size: 2.3em;
        font-family: var(--Main-heading-font-family);
        font-weight: var(--Main-heading-font-weight);
        color:var(--White-main-heading-stats);
        margin:10px 0;
        @media screen and (max-width:960px){
            font-size: 1.6em;
        }
        @media screen and (max-width:600px){
            text-align:center;
        }
    }

    span{
        color:var(--Soft-violet-accent);
    }

    h5{
        font-size: .9em;
        font-family: var(--Main-heading-font-family);
        font-weight: var(--Main-paragrapgh-font-weight);
        color:var(--Slightly-transparent-white-main-paragraph);
        line-height: 1.5em;
        letter-spacing: .04em;
        margin:20px 50px 30px 0;
        @media screen and (max-width:600px){
            text-align:center;
            margin:20px 20px;
        }
    }

    h4{
        font-size: 1.5em;
        font-family: var(--Main-heading-font-family);
        font-weight: var(--Stats-heading-font-weight);
        color:var(--White-main-heading-stats);
        margin:0;
        @media screen and (max-width:960px){
            font-size: 1.1em;
        }
        @media screen and (max-width:600px){
            font-size: 1.2em;
            text-align:center;
            margin:auto;
        }
    }

    p{
        font-size: .9em;
        font-family: var(--Stats-font-family);
        font-weight: var(--Stats-subheading-font-weight);
        color:var(--Slightly-transparent-white-stat-headings);
        text-transform: uppercase;
        margin:0;
        @media screen and (max-width:960px){
            font-size: .8em;
        }
        @media screen and (max-width:600px){
            font-size: .9em;
            text-align:center;
            margin:auto;
        }
    }
`