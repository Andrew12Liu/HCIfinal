import React, { useState } from "react";
import { Accordion, Button, Col, Container, Row, Table } from "react-bootstrap";
import logo from './insiderChart.png';
import file from './file.png';
import BootstrapTable from 'react-bootstrap-table-next';

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

  const rows = [
  {
    formpic: <a href = "https://www.sec.gov/Archives/edgar/data/320193/000032019322000025/xslF345X03/wf-form4_164427662367600.xml"><img src={file} width="36px" height="36px"/></a>,
    filetype: "",
    filedate: "2022-02-07 18:30:37",
    tradedate: "2022-02-03",
    ticker: "AAPL",
    insider: "Adams Katherine L.",
    title: "SVP, GC, Secretary",
    tradetype: "S - Sale",
    price: "$174.78",
    quantity: "-25,000",
    owned: "419,715",
    deltaown: "-6%",
    value: "-$4,369,548"
  },{
    formpic: <a href = "https://www.sec.gov/Archives/edgar/data/320193/000032019322000025/xslF345X03/wf-form4_164427662367600.xml"><img src={file} width="36px" height="36px"/></a>,
    filetype: "D",
    filedate: "2022-02-03 18:35:50",
    tradedate: "2022-02-01",
    ticker: "AAPL",
    insider: "Levinson Arthur D",
    title: "Dir",
    tradetype: "S - Sale+OE",
    price: "$173.29",
    quantity: "-1,986",
    owned: "4,588,724",
    deltaown: "0%",
    value: "-$344,154"
  },{
    formpic: <a href = "https://www.sec.gov/Archives/edgar/data/320193/000032019322000025/xslF345X03/wf-form4_164427662367600.xml"><img src={file} width="36px" height="36px"/></a>,
    filetype: "",
    filedate: "2021-11-16 18:30:25",
    tradedate: "2021-11-12",
    ticker: "AAPL",
    insider: "Kondo Chris",
    title: "Principal Accounting Officer",
    tradetype: "S - Sale",
    price: "$150.00",
    quantity: "-9,005",
    owned: "37,197",
    deltaown: "-19%",
    value: "-$1,350,750"
  }]

  const columns = [{
    dataField: "formpic",
    text: "SEC Form"
  }, {
    dataField: "filetype",
    text: "Filing Type",
    sort: true
  }, {
    dataField: "filedate",
    text: "Filing Date",
    sort: true
  }, {
    dataField: "tradedate",
    text: "Trade Date",
    sort: true
  }, {
    dataField: "ticker",
    text: "Ticker",
    sort: true
  }, {
    dataField: "insider",
    text: "Insider Name",
    sort: true
  }, {
    dataField: "title",
    text: "Title",
    sort: true
  }, {
    dataField: "tradetype",
    text: "Trade Type",
    sort: true
  }, {
    dataField: "price",
    text: "Price",
    sort: true
  }, {
    dataField: "quantity",
    text: "Qty",
    sort: true
  }, {
    dataField: "owned",
    text: "Owned",
    sort: true
  }, {
    dataField: "deltaown",
    text: "ΔOwn",
    sort: true
  }, {
    dataField: "value",
    text: "Value",
    sort: true
  }];

  const defaultSorted = [{
    dataField: "filedate",
    order: "desc"
  }]

  return (
    <Container
      style={{
        "margin-top": "5%",
        "max-width": "100%",
        padding: "0px",
        margin: "0px",
        alignContent: "center",
      }}
    >
      <Accordion alwaysOpen>
        <Accordion.Item eventKey = "1">
          <Accordion.Header>Company Overview</Accordion.Header>
          <Accordion.Body>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt=""
                width="50"
                height="50"
              />
              <h3>Apple:</h3>
              <p>
                Apple Inc. is an American multinational technology company that
                specializes in consumer electronics, software and online services. Apple
                is the largest information technology company by revenue (totaling
                US$365.8 billion in 2021) and, as of January 2021, it is the world's
                most valuable company, the fourth-largest personal computer vendor by
                unit sales and second-largest mobile phone manufacturer. It is one of
                the Big Five American information technology companies, alongside
                Alphabet, Amazon, Meta, and Microsoft.
              </p>
              <img
                src="https://cdn.sanity.io/images/eydex0le/production/12080a174ff9ad359811460e80cade845297f6ad-1304x425.png?w=1304&h=425&auto=format"
                alt=""
              />
              <h2>Trading Trends</h2>
              <img
                src={logo}
                alt=""
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Insider Trades</Accordion.Header>
          <Accordion.Body>
            <div>
              <BootstrapTable
                keyField="filedate"
                data = { rows }
                columns = { columns }
                defaultSorted = { defaultSorted }
                striped
                hover
                condensed
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

// const Box = styled.div`
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   /* padding: 8px; */
// `;

// const Graph = () => {
//   const data = [
//     {
//       name: "Page A",
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: "Page B",
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: "Page C",
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: "Page D",
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: "Page E",
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: "Page F",
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: "Page G",
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];

//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <LineChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 24,
//           right: 24,
//           left: 24,
//           bottom: 24,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line
//           type="monotone"
//           dataKey="pv"
//           stroke="#8884d8"
//           activeDot={{ r: 8 }}
//         />
//         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// };
