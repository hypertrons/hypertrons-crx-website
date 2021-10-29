import React from 'react';
import { Row, Col } from 'antd';
import './index.css';

class Page2 extends React.PureComponent {
    render() {
        return (
          <div className="home-page-wrapper page1">
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
                            marginTop:'70px',
                            textAlign: 'center',
                        }}
                      >
                          Installation Guide
                      </p>
                      <p
                        style={{
                            marginTop: '16px',
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
                  </span>
              </div>
              <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                  <Row style={{ textAlign:'center' }}>
                      <Col span={12}>
                          <p>
                              <img src={"https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/installation-cws.png"} height="100%" width="100%" alt="img" />
                          </p>
                          <p>
                              <img  style={{marginTop: '10%'}} src={"https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/installation-edge.png"} height="100%" width="100%"  alt="img" />
                          </p>
                      </Col>
                      <Col span={12} style={{paddingLeft: '5%'}}>
                          {/*<p>*/}
                          {/*    <img src={"https://hypertrons.oss-cn-shanghai.aliyuncs.com/images/installation-edge-1.png"} height="180px" width="620px" alt="img" />*/}
                          {/*</p>*/}
                          <p
                              style={{
                                  marginTop:'20px',
                                  fontFamily: 'PingFangSC-Medium',
                                  fontSize: '24px',
                                  color: '#353535',
                                  textAlign: 'center',
                                  lineHeight: '16px',
                              }}
                          >
                              <img src={"https://raw.githubusercontent.com/alrra/browser-logos/90fdf03c/src/chrome/chrome.svg"}
                                   style={{
                                       height: '30px',
                                       paddingRight: '10px',
                                   }}/>
                              Chrome
                          </p>
                          <p
                              style={{
                                  marginTop:'20px',
                                  fontFamily: 'PingFangSC-Medium',
                                  fontSize: '20px',
                                  color: '#353535',
                                  textAlign: 'center',
                                  lineHeight: '20px',
                              }}
                          >
                              Visit
                              <a href={"https://chrome.google.com/webstore/detail/hypertrons-crx/ijchfbpdgeljmhnhokmekkecpbdkgabc"}> Chrome Web Store </a>
                              , and click "Add to Chrome".
                          </p>
                          <p
                            style={{
                                marginTop:'120px',
                                fontFamily: 'PingFangSC-Medium',
                                fontSize: '24px',
                                color: '#353535',
                                textAlign: 'center',
                                lineHeight: '16px',
                            }}
                          >
                              <img src={"https://raw.githubusercontent.com/alrra/browser-logos/90fdf03c/src/edge/edge.svg"}
                                   style={{
                                       height: '30px',
                                       paddingRight: '10px',
                                   }}/>
                              Edge
                          </p>
                          <p
                              style={{
                                  marginTop:'20px',
                                  fontFamily: 'PingFangSC-Medium',
                                  fontSize: '20px',
                                  color: '#353535',
                                  textAlign: 'center',
                                  lineHeight: '20px',
                              }}
                          >
                              Visit
                              <a href={"https://microsoftedge.microsoft.com/addons/search/hypertrons-crx"}> Edge Extensions Home </a>
                                  , and click "Get".
                          </p>
                      </Col>
                  </Row>
              </div>
              <div>
                  <p
                      style={{
                          marginTop:'70px',
                          fontFamily: 'PingFangSC-Medium',
                          fontSize: '20px',
                          color: '#353535',
                          textAlign: 'center',
                          lineHeight: '20px',
                      }}
                  >For more information, please refer to {''}
                  <a
                      href={"https://github.com/hypertrons/hypertrons-crx/blob/master/INSTALLATION.md"}
                  >Installation Guide
                  </a>
                  </p>
              </div>
          </div>
        );
    }
}

export default Page2;
