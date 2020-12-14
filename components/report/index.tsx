import React from "react";
import styled from "./report.module.scss";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";

import { ResponsiveLine } from "@nivo/line";

// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

interface GraphProps {
  data: any;
}

const Graph = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export const Overview: React.FC<any> = (): any => {
  const submitBtnHandler = (e: any) => {
    e.preventDefault();
  };

  const graphBtnHandler = (e: any) => {
    e.preventDefault();
  };

  const data = [
    {
      id: "japan",
      color: "hsl(220, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 145,
        },
      ],
    },
  ];

  return (
    <div className={styled.reportContainer}>
      <div className={styled.reportFormContainer}>
        <h3 className={styled.textTitle}>
          Reports <span>Overview</span>
        </h3>

        <div className={styled.reportForm}>
          <Form onSubmit={(e) => submitBtnHandler(e)}>
            <div className={styled.reportFormUpper}>
              <FormGroup
                controlId="exampleForm.ControlSelect1"
                className={styled.ControlSelect1}
              >
                <FormLabel className={styled.formWorkLabel}>
                  Customer:
                </FormLabel>
                <FormControl
                  as="select"
                  defaultValue="Total"
                  className={styled.formWorkSelect}
                >
                  <option>Total 1</option>
                  <option>Total 2</option>
                  <option>Total 3</option>
                  <option>Total 4</option>
                  <option hidden>Total</option>
                </FormControl>
              </FormGroup>

              <FormGroup
                controlId="exampleForm.ControlSelect2"
                className={styled.ControlSelect2}
              >
                <FormLabel className={styled.formWorkLabel}>Banner:</FormLabel>
                <FormControl
                  as="select"
                  defaultValue="Banner"
                  className={styled.formWorkSelect}
                >
                  <option>Banner 1</option>
                  <option>Banner 2</option>
                  <option>Banner 3</option>
                  <option>Banner 4</option>
                  <option hidden>Banner</option>
                </FormControl>
              </FormGroup>
            </div>

            <div className={styled.reportFormLower}>
              <FormGroup
                controlId="exampleForm.ControlDate1"
                className={styled.ControlDate1}
              >
                <FormLabel className={styled.formWorkLabel}>
                  From (mm/dd/yyyy):
                </FormLabel>
                <FormControl
                  type="date"
                  name="ok"
                  placeholder="MM/DD/YYYY"
                  className={styled.formWorkSelect}
                ></FormControl>
              </FormGroup>

              <FormGroup
                controlId="exampleForm.ControlDate2"
                className={styled.ControlDate2}
              >
                <FormLabel className={styled.formWorkLabel}>
                  To (mm/dd/yyyy):
                </FormLabel>
                <FormControl
                  type="date"
                  name="ok"
                  placeholder="MM/DD/YYYY"
                  className={styled.formWorkSelect}
                ></FormControl>
              </FormGroup>

              <div className={styled.buttonContainer}>
                <Button type="submit" className={styled.submitBtn}>
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>

      <div className={styled.graphContainer}>
        <Form onSubmit={(e) => graphBtnHandler(e)}>
          <div className={styled.chartContainer}>
            <div className={styled.graphSelectContainer}>
              <FormGroup
                controlId="exampleForm.SelectGraph"
                className={styled.GraphSelect}
              >
                <FormControl
                  as="select"
                  defaultValue="Categories"
                  className={styled.graphFormSelect}
                >
                  <option>Impressions</option>
                  <option>Clicks</option>
                  <option hidden>Categories</option>
                </FormControl>

                <div className={styled.graphButtonContainer}>
                  <Button type="submit" className={styled.graphBtn}>
                    Submit
                  </Button>
                </div>
              </FormGroup>
            </div>

            <div className={styled.chart}>
              <Graph data={data} />
            </div>
          </div>
        </Form>
      </div>

      <div className={styled.dataSetsContainer}>
        <div className={styled.dataSetsLeft}>
          <Table className={styled.dataTable}>
            <thead className={styled.dataItem}>
              <tr>
                <th>
                  <p className={styled.dataTitle}>Browers</p>
                </th>
                <th>
                  <p className={styled.dataTitle}>Clicks</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={styled.dataItem}>
                <td>
                  <p className={styled.dataText}>Firefox</p>
                </td>
                <td>
                  <p className={styled.dataText}>823</p>
                </td>
              </tr>
              <tr className={styled.dataItem}>
                <td>
                  <p className={styled.dataText}>Other</p>
                </td>
                <td>
                  <p className={styled.dataText}>162</p>
                </td>
              </tr>
              <tr className={styled.dataItem}>
                <td>
                  <p className={styled.dataText}>Chrome</p>
                </td>
                <td>
                  <p className={styled.dataText}>22</p>
                </td>
              </tr>
              <tr className={styled.dataItem}>
                <td>
                  <p className={styled.dataText}>Internet Explorer</p>
                </td>
                <td>
                  <p className={styled.dataText}>12</p>
                </td>
              </tr>
              <tr className={styled.dataItem}>
                <td>
                  <p className={styled.dataText}>Safari</p>
                </td>
                <td>
                  <p className={styled.dataText}>12</p>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
