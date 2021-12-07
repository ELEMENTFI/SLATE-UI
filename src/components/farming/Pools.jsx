import { Card, Col, Row, Button } from "reactstrap";
import PoolCardTabs from "./PoolCardTabs";
import icon from "../../assets/img/icon.PNG";
import icon1 from "../../assets/img/icon1.PNG";
import { Link,useHistory } from "react-router-dom";
const Pools = () => {
    let history=useHistory();
    return (
        <Row className="m-3 m-md-5">
            <Col xl="4" md="6" className="mb-4">
                <Card className="custom-card mt-2 mb-2 ml-0 mr-0 p-2">
                    <div className="d-flex" style={{ padding: "12px" }}>
                        <img
                            className="pool-card-image"
                            src={icon}
                            alt="Card image cap"
                        />
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div
                            className=" pl-2 pr-2 align-item-center"
                            style={{
                                marginRight: "10px",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p style={{ fontWeight: "600", margin: "auto" }}>
                                Slate
                            </p>
                        </div>
                    </div>
                    <div style={{ padding: "12px" }}>
                        <PoolCardTabs />
                    </div>
                    <div className="d-flex pl-3 pr-3 mt-2 mb-2">
                        <div
                            style={{
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p
                                style={{ fontWeight: "600", fontSize: "12px" }}
                                className="text-muted"
                            >
                                APR
                            </p>
                        </div>
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div style={{ marginLeft: "auto" }}>
                            <p>
                                <img
                                    left
                                    width="15px"
                                    style={{
                                        marginTop: "auto",
                                        marginBottom: "auto",
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                    }}
                                    //   style={{ marginButtom: "auto" }}
                                    src={icon}
                                    alt="Card image cap"
                                />
                                <b>14.5%</b>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
                        <div
                            style={{
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p
                                style={{ fontWeight: "600", fontSize: "12px" }}
                                className="text-muted"
                            >
                                slate daily rewards
                            </p>
                        </div>
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div style={{ marginLeft: "auto" }}>
                            <p style={{ fontWeight: "600", textAlign: "center" }}>
                                <img
                                    left
                                    width="15px"
                                    //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                                    //   style={{ marginButtom: "auto" }}
                                    src={icon}
                                    alt="Card image cap"
                                />
                                1,428.5714
                            </p>
                        </div>
                    </div>
                    <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
                        <div
                            style={{
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p
                                style={{ fontWeight: "600", fontSize: "12px" }}
                                className="text-muted"
                            >
                                Slate rewards left
                            </p>
                        </div>
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div style={{ marginLeft: "auto" }}>
                            <p style={{ fontWeight: "600", textAlign: "center" }}>
                                <img
                                    left
                                    width="15px"
                                    //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                                    //   style={{ marginButtom: "auto" }}
                                    src={icon}
                                    alt="Card image cap"
                                />
                                61,458.6806
                            </p>
                        </div>
                    </div>
                    <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
                        <div
                            style={{
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p
                                style={{ fontWeight: "600", fontSize: "12px" }}
                                className="text-muted"
                            >
                                Pool balance
                            </p>
                        </div>
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div style={{ marginLeft: "auto" }}>
                            <p style={{ fontWeight: "600", textAlign: "center" }}>
                                <img
                                    left
                                    width="15px"
                                    //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                                    //   style={{ marginButtom: "auto" }}
                                    src={icon}
                                    alt="Card image cap"
                                />
                                90,467,215.0188
                            </p>
                        </div>
                    </div>
                    <Button className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2
                        `} color="site-primary" width="full" onClick={e => {history.push("/slate-stake")}}>View pool</Button>
                </Card>
            </Col>
           
 

        </Row>
    );
}

export default Pools;