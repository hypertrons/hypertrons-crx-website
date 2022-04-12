import React, { Fragment } from "react";
import { Layout, Icon } from "antd";

const { Footer } = Layout;
class FooterView extends React.Component {
    render() {
        return (
          <Footer style={{ textAlign: "center" }}>
              <br />
              <Fragment>
                  Technology spreads civilization, practices synchronize world.   <Icon type="copyright" />   2022 X-lab
              </Fragment>
              <br />
              { /*<a href="http://www.miitbeian.gov.cn">沪ICP备18019397号</a>*/ }
          </Footer>
        );
    }
}

export default FooterView;
