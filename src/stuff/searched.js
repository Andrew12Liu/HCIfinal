import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import stuff from "./searched.json";
import "../App.css";
import comp from "./company.json";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import styled from "styled-components";

const GridRow = styled.div`
  display: grid;
  /* grid-template-columns: repeat(15, 92px); */
  grid-template-columns:
    92px 92px 92px 92px 92px 92px 92px 92px 92px
    92px 92px 92px 92px 92px 92px;
  grid-template-rows: repeat(4, auto);
  /* width: 100%; */
  grid-gap: 0px;

  p {
    margin: 0;
  }

  * {
    border: solid 1px black;
    padding: 4px;
  }
`;

function parser(s, dostuff) {
  if (s.click === "yes") {
    return <a href="/"> {s.stuff} </a>;
  } else if (s.click === "special") {
    return <Button onClick={() => dostuff(s.stuff)}>{s.stuff}</Button>;
  } else {
    return <div>{s.stuff} </div>;
  }
}

export default function Searched() {
  const [count, setCount] = useState("");
  return (
    <Container
      className="box-Legend"
      style={{
        "margin-top": "5%",
        "max-width": "100%",
        padding: "0px",
        margin: "0px",
        alignContent: "center",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
        alt=""
        width="50"
        height="50"
      />
      <h3>Apple:</h3>
      <body>
        Apple Inc. is an American multinational technology company that
        specializes in consumer electronics, software and online services. Apple
        is the largest information technology company by revenue (totaling
        US$365.8 billion in 2021) and, as of January 2021, it is the world's
        most valuable company, the fourth-largest personal computer vendor by
        unit sales and second-largest mobile phone manufacturer. It is one of
        the Big Five American information technology companies, alongside
        Alphabet, Amazon, Meta, and Microsoft.
      </body>
      <img
        src="https://cdn.sanity.io/images/eydex0le/production/12080a174ff9ad359811460e80cade845297f6ad-1304x425.png?w=1304&h=425&auto=format"
        alt=""
      />

    

      <Box>
        <GridRow style={{ backgroundColor: "lightblue" }}>
          {stuff.legend.map((entry, index) => {
            if (index === 0) {
              return <p></p>;
            }

            <p></p>;
          })}
        </GridRow>
        <GridRow>
          {stuff.legend.map((entry) => (
            <p>{entry}</p>
          ))}
        </GridRow>
        <GridRow>
          {stuff.legend.map((entry) => (
            <p>{entry}</p>
          ))}
        </GridRow>
        <GridRow>
          {new Array(15).fill(null).map((_, index) => (
            <p style={{ color: "black" }}>{index}</p>
          ))}
        </GridRow>
        <GridRow>
          {new Array(15).fill(null).map((i) => (
            <p style={{ color: "black" }}>test</p>
          ))}
        </GridRow>
      </Box>
      <div style={{ height: "400px", width: "800px" }}>
        <Graph />
      </div>
    </Container>
  );
}

const Box = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  /* padding: 8px; */
`;

const Graph = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 24,
          right: 24,
          left: 24,
          bottom: 24,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};
