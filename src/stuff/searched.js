
import React, { useState } from 'react'
import { Button,Col, Container, Row } from 'react-bootstrap'
import stuff from "./searched.json"
import '../App.css'
import comp from './company.json'
function parser(s,dostuff){ 
    if (s.click === "yes"){ 
        return (<a href = '/'>  {s.stuff} </a>)
    }
    else if(s.click === 'special'){
        return ( <Button onClick={() => dostuff(s.stuff)}>
           {s.stuff}
        </Button>)
    }
    else{ 
        
       return (<div>{s.stuff} </div> )


    }
}

export default function Searched() {
    const [count, setCount] = useState("");
  return (
<Container className = "box-Legend" style = {{'margin-top' : '5%', 'max-width' : "100%" , "padding" : "0px", "margin" : "0px" , "alignContent" : "center"}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" width="50" height="50"/>
    <h3>Apple:</h3>
    <body>Apple Inc. is an American multinational technology company that specializes in consumer electronics, software and online services. Apple is the largest information technology company by revenue (totaling US$365.8 billion in 2021) and, as of January 2021, it is the world's most valuable company, the fourth-largest personal computer vendor by unit sales and second-largest mobile phone manufacturer. It is one of the Big Five American information technology companies, alongside Alphabet, Amazon, Meta, and Microsoft.</body>
    <img src="https://cdn.sanity.io/images/eydex0le/production/12080a174ff9ad359811460e80cade845297f6ad-1304x425.png?w=1304&h=425&auto=format" alt="" />

    {stuff.title.map(k =>  ( 

    
    <Row style = {{"padding" : "0px" , "margin" : "0px" , "width" : "100%",'height' : "100%" , display: 'flex', justifyContent: 'center'}} noGutters={true}>
    <h1> {k} </h1>
    {stuff.legend.map(i => (
        <div className = "sudo">
            {i}
        </div>
    )) }

        {stuff[`${k}`].content.map(p => (
 
                <div style = {{"backgroundColor" : `${stuff[`${k}`].color}`}} className = "sudo">
                    {parser(p,setCount)}
                </div>
         
        ))}
    </Row>

    )) }
    {count ? (
        <>
    <Row>
    {comp[`${count}`].comp}
        </Row>

        {comp[`${count}`].contents.map(k => (
        <Row>
            {console.log(k.stuff)}
            {k.stuff.map(o => 
                           <div style = {{"backgroundColor" : `${k.color}`}} className = "smaller">
                           {o}
                         </div>)}
 
    
    </Row>
    ))}
            </>

        ):(<></>)}
        
</Container>
  )
}
