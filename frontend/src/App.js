import './App.css';
import NavBarLeft from "./components/NavBarLeft";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Col, Row} from "antd";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Row>
              <Col span={18} push={6}>
                  <AppRouter />
              </Col>
              <Col span={6} pull={18}>
                  <NavBarLeft />
              </Col>
          </Row>
      </BrowserRouter>
  );
}

export default App;
