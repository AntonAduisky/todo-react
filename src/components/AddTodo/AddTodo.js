/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Col, Button, FormControl} from "react-bootstrap";
import uuid, {v4} from 'uuid';
import styles from './AddTodo.module.css'

function AddTodo({todo, setTodo}) {

  const [value, setValue] = React.useState('')

  function saveTodo() {
    if(value) {
      setTodo(
        [...todo, {
          id: v4,
          title: value,
          status: true
          }]
      ) 
      setValue('')
    }
}

  return(
    <Row>
      <Col className={styles.addTodoForm}>
        <FormControl placeholder="Введите задачу" value={value} onChange={(e)=> setValue(e.target.value)}/>
        <Button variant="primary" onClick={saveTodo} className={styles.btn}>Сохранить</Button>
      </Col>
    </Row>
  )
}

export default AddTodo;