import React from "react";
import {Button, ButtonGroup, Row, Col} from "react-bootstrap";
import styles from './TodoList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrash, faEdit, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

function TodoList({todo, setTodo}) {

  const [edit, setEdit] = React.useState(null)
  const [value, setValue] = React.useState('')
  const [filtered, setFiltered] = React.useState(todo)

  React.useEffect( () => {
    setFiltered(todo)
  }, [todo])

  function todoFilter(status) {
    if(status === 'all') {
      setFiltered(todo)
    } else {
      let newTodo = [...todo].filter(item => item.status === status)
      setFiltered(newTodo)
    }
  }

 function deleteTodo(id) {
  let newTodo = [...todo].filter(item => item.id !== id)
  setTodo(newTodo)
 }

 function statusTodo(id) {
   let newTodo = [...todo].filter(item => {
     if(item.id === id) {
       item.status = !item.status
     }
     return item
   })
   setTodo(newTodo)
 }

 function editTodo(id, title) {
    setEdit(id)
    setValue(title)
  }

function saveTodo(id) {
let newTodo = [...todo].map(item  => {
  if(item.id === id) {
    item.title = value
  }
  return item
 })
 setTodo(newTodo)
 setEdit(null)
}

  return(
    <div>
      <Row>
        <Col className={styles.filter}>
          <ButtonGroup aria-label="Basic example" className={styles.btns}>
            <Button variant="secondary" onClick={() => todoFilter('all')}>Все</Button>
            <Button variant="secondary" onClick={() => todoFilter(true)}>Открытые</Button>
            <Button variant="secondary" onClick={() => todoFilter(false)}>Закрытые</Button>
          </ButtonGroup>
        </Col>
      </Row>
      {
        filtered.map(item => (
          <div key={item.id} className={styles.listItems}>
            {
              edit === item.id ? 
              <div>
                 <input onChange={e => setValue(e.target.value)} value={value}/>
              </div>
              :
              <div className={!item.status ? styles.close : ''}>{item.title}</div>  
            }
            
            {
              edit === item.id ?
              <div>
                <Button onClick={() => saveTodo(item.id)} size="sm"><FontAwesomeIcon icon={faSave}/></Button>
              </div> :
              <div>
                <Button onClick={ () => deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash} size="sm"/></Button>
                <Button onClick={ () => editTodo(item.id, item.title)} className={styles.btn} size="sm"><FontAwesomeIcon icon={faEdit}/> </Button>
                <Button onClick={ () => statusTodo(item.id)} className={styles.btn} size="sm">
                  {
                    item.status ? <FontAwesomeIcon icon={faLock}/> : <FontAwesomeIcon icon={faLockOpen}/>
                  }
                  </Button>
              </div>
            }
          </div>
        ))
      }
    </div>
  )
}

export default TodoList;