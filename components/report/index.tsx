import React from "react";
import styled from "./report.module.scss";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

export const Overview: React.FC<any> = (): any => {
  const submitBtnHandler = (e: any) => {
    e.preventDefault();
  };

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

      <div className={styled.chartContainer}>
        <div className={styled.chart}></div>
      </div>

      <div className={styled.dataSetsContainer}>
        <div className={styled.dataSetsLeft}>
          <div className={styled.dataTable}>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataTitle}>Browers</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataTitle}>Clicks</p>
              </Col>
            </Row>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataText}>Firefox</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataText}>823</p>
              </Col>
            </Row>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataText}>Other</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataText}>162</p>
              </Col>
            </Row>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataText}>Chrome</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataText}>22</p>
              </Col>
            </Row>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataText}>Internet Explorer</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataText}>12</p>
              </Col>
            </Row>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataText}>Safari</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataText}>12</p>
              </Col>
            </Row>
          </div>

          <div className={styled.dataTable}>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataTitle}>Refferers</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataTitle}>Clicks</p>
              </Col>
            </Row>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataText}>Direct</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataText}>977</p>
              </Col>
            </Row>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataText}>www.freshnewsasia.com</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataText}>25</p>
              </Col>
            </Row>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataText}>freshnewsasia.com</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataText}>19</p>
              </Col>
            </Row>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataText}>image.freshnewsasia.com:81</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataText}>10</p>
              </Col>
            </Row>
          </div>
        </div>

        <div className={styled.dataSetsRight}>
          <div className={styled.dataTable}>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataTitle}>Platforms</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataTitle}>Clicks</p>
              </Col>
            </Row>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataText}>Desktop</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataText}>1022</p>
              </Col>
            </Row>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataText}>Mobile</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataText}>9</p>
              </Col>
            </Row>
          </div>

          <div className={styled.dataTable}>
            <Row className={styled.dataItem}>
              <Col xs={8}>
                <p className={styled.dataTitle}>Platform OS</p>
              </Col>
              <Col xs={4}>
                <p className={styled.dataTitle}>Clicks</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
