import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from './Header.module.css'

function Header() {
  return(
    <Row>
      <Col>
         <div className={styles.root}>Todo List</div>
      </Col>
    </Row>
  )
}

export default Header;
