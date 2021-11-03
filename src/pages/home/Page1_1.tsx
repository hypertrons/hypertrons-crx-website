import React from 'react';
import { Row, Col } from 'antd';

class Page1 extends React.PureComponent {
    render() {
        return (
            <div
                className="home-page-wrapper page1"
                // style={{height: '770px'}}
            >
                {/*<div*/}
                {/*  style={{*/}
                {/*      width: '120%',*/}
                {/*      height: '700px',*/}
                {/*      background: '#063A5D',*/}
                {/*      position: 'absolute',*/}
                {/*      bottom: '-345px',*/}
                {/*      left: '-18px',*/}
                {/*      transformOrigin: '0',*/}
                {/*      transform: 'rotate(-13deg)',*/}
                {/*  }}*/}
                {/*>*/}
                {/*</div>*/}
                <div className="indexPage">
                  <span
                      style={{
                          fontFamily: 'PingFangSC-Medium',
                          fontSize: '34px',
                          color: 'black',
                          lineHeight: '34px',
                      }}
                  >
                      <p
                          style={{
                              marginTop:'5%',
                              // marginLeft:'100px',
                              textAlign: 'center',
                          }}
                      >
                          What is Hypercrx?
                      </p>
                      {/*橘色横杠*/}
                      <p
                          style={{
                              marginTop: '1%',
                              marginLeft: '47.2%',
                              marginBottom: '60px',
                              background: '#F46E09',
                              borderRadius: '100px',
                              height: '4px',
                              width: '66px',
                          }}
                      >
                          {' '}
                      </p>
                      <Col>
                          <p style={{textAlign: 'center'}}>
                              <img src={"https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/opengalaxy_full.png"} height="50%" width="50%" alt="img" />
                          </p>
                            <p style={{
                                marginTop: '2%',
                                marginBottom: '2%',
                                marginLeft: '10%',
                                 marginRight: '10%',
                                fontSize: '24px',
                                textAlign: 'center',
                            }}>'Hypercrx' project aims at tracing, digging and gaining insight into the projects and developers you're interested in. We do this by inserting useful dashboards into GitHub pages. 'Hypercrx' provides an effective way for digital operations and analysis of open source community.
                            </p>
                      </Col>
                  </span>
                </div>
                <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <p
                        style={{
                            marginTop:'5%',
                            // marginBottom: '30px',
                            // marginLeft:'100px',
                            textAlign: 'center',
                            fontFamily: 'PingFangSC-Medium',
                            fontSize: '34px',
                            color: 'black',
                            lineHeight: '34px',
                        }}
                    >
                        Hypercrx Dashboards
                    </p>
                    <p
                        style={{
                            marginTop: '1%',
                            marginLeft: '47.2%',
                            marginBottom: '60px',
                            background: '#F46E09',
                            borderRadius: '100px',
                            height: '4px',
                            width: '66px',
                        }}
                    >
                        {' '}
                    </p>
                    <Row
                        type="flex"
                        justify="space-around"
                        align="middle"
                        style={{
                            height: '500px',
                        }}
                    >
                        <Col span={12}
                             style={{ paddingRight: '5%'}}
                        >
                          <span>
                              <img src={"https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/readme-prn.gif"} height="100%" width="100%" alt="gif" />
                          </span>
                            <Row
                                // type="flex"
                                justify="space-around"
                                align="middle"
                                style={{
                                    height: '300px',
                                    marginTop: '30px',
                                }}
                            >
                                <Col span={4}>
                                    <p>
                                        <img src='https://hsd-kfcoding.oss-cn-shanghai.aliyuncs.com/temp/images/newui/ICON%2010%402x.png' height="60px" width="60px" alt="img"
                                        style={{marginTop: '20px',}}
                                        />
                                    </p>
                                </Col>
                                <Col span={18}>
                                    <p
                                        style={{
                                            fontFamily: 'PingFangSC-Medium',
                                            fontSize: '20px',
                                            color: 'black',
                                            // marginTop:'5%',
                                        }}
                                    >
                                        Project Correlation Network
                                    </p>
                                    <p
                                        style={{
                                            opacity: '0.8',
                                            fontFamily: 'PingFangSC',
                                            fontSize: '14px',
                                            color: 'black',
                                            lineHeight: '26px',
                                        }}
                                    >
                                        Project Correlation Network shows the correlation between projects for a given time period. From this graph you can find the projects that are related to the given project.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}
                             style={{ paddingLeft: '5%'}}
                        >
                          <span>
                              <img src={"https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/readme-dcnp.gif"} height="100%" width="100%" alt="gif" />
                          </span>
                            <Row
                                // type="flex"
                                justify="space-around"
                                // align="middle"
                                style={{
                                    height: '300px',
                                    marginTop: '30px',
                                }}
                            >
                                <Col span={4}>
                                    <p>
                                        <img src='https://hsd-kfcoding.oss-cn-shanghai.aliyuncs.com/temp/images/newui/ICON%2012%402x.png' height="60px" width="60px" alt="img"
                                             style={{marginTop: '20px',}}
                                        />
                                    </p>
                                </Col>
                                <Col span={18}>
                                    <p
                                        style={{
                                            fontFamily: 'PingFangSC-Medium',
                                            fontSize: '17px',
                                            color: 'black',
                                            // marginTop:'5%',
                                        }}
                                    >
                                        Developer Collabration Network within project
                                    </p>
                                    <p
                                        style={{
                                            opacity: '0.8',
                                            fontFamily: 'PingFangSC',
                                            fontSize: '14px',
                                            color: 'black',
                                            lineHeight: '22px',
                                        }}
                                    >
                                        Developer Collabration Network within project shows the collaboration between active developers within the project for a given time period. From this graph you can find the active developers in the given project and the collaborative relationships between these developers.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row
                        type="flex"
                        justify="space-around"
                        align="middle"
                        style={{
                            height: '700px',
                            paddingTop: '4%',
                        }}
                    >
                        <Col span={12}
                             style={{ paddingRight: '5%'}}
                        >
                          <span>
                              <img src={"https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/readme-dcn.gif"} height="100%" width="100%" alt="gif" />
                          </span>
                            <Row
                                // type="flex"
                                justify="space-around"
                                align="middle"
                                style={{
                                    height: '300px',
                                    marginTop: '30px',
                                }}
                            >
                                <Col span={4}>
                                    <p>
                                        <img src='https://hsd-kfcoding.oss-cn-shanghai.aliyuncs.com/temp/images/newui/ICON%2010%402x.png' height="60px" width="60px" alt="img"
                                             style={{marginTop: '20px',}}
                                        />
                                    </p>
                                </Col>
                                <Col span={18}>
                                    <p
                                        style={{
                                            fontFamily: 'PingFangSC-Medium',
                                            fontSize: '20px',
                                            color: 'black',
                                            // marginTop:'5%',
                                        }}
                                    >
                                        Developer Collabration Network
                                    </p>
                                    <p
                                        style={{
                                            opacity: '0.8',
                                            fontFamily: 'PingFangSC',
                                            fontSize: '14px',
                                            color: 'black',
                                            lineHeight: '26px',
                                        }}
                                    >
                                        Developer Collaboration Network shows the collaboration between developers for a given time period. From this graph you can find other developers who are closet to a given developer.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}
                             style={{ paddingLeft: '5%'}}
                        >
                          <span>
                              <img src={"https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/readme-dmpr.gif"} height="100%" width="100%" alt="gif" />
                          </span>
                            <Row
                                // type="flex"
                                justify="space-around"
                                // align="middle"
                                style={{
                                    height: '300px',
                                    marginTop: '30px',
                                }}
                            >
                                <Col span={4}>
                                    <p>
                                        <img src='https://hsd-kfcoding.oss-cn-shanghai.aliyuncs.com/temp/images/newui/ICON%2012%402x.png' height="60px" width="60px" alt="img"
                                             style={{marginTop: '20px',}}
                                        />
                                    </p>
                                </Col>
                                <Col span={18}>
                                    <p
                                        style={{
                                            fontFamily: 'PingFangSC-Medium',
                                            fontSize: '20px',
                                            color: 'black',
                                            // marginTop:'5%',
                                        }}
                                    >
                                        Developer's Most Participated Repos
                                    </p>
                                    <p
                                        style={{
                                            opacity: '0.8',
                                            fontFamily: 'PingFangSC',
                                            fontSize: '14px',
                                            color: 'black',
                                            lineHeight: '26px',
                                        }}
                                    >
                                        Developer's Most Participated Repos shows the active projects of developers in a given time period. From this graph you can find out the most active repositories for a given developer.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Page1;
