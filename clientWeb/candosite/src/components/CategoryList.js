import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { editCategoryName } from '../store/actions/kanbanActions'
import Card from '../components/Card'


export default function CategoryList({ data }) {

    const [isEditCategory, setIsEditCategory] = useState(false)
    const [editedCategory, setEditedCategory] = useState(data.name)
    const departmentId = useSelector(state => state.kanban.departmentId)
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()

    function categoryEdit() {
        setIsEditCategory(!isEditCategory)
    }

    function submitEdit(id) {
        let payload = {
            id,
            departmentId,
            editedCategory, token

        }
        dispatch(editCategoryName(payload))
        setIsEditCategory(!isEditCategory)
    }
    return (
        <>
            <div className="kanban-board">
                {
                    isEditCategory == false ?
                        <div className="kanban-title">
                            <p>{data.name}</p>
                            <span style={{ color: 'grey', marginTop: '2px' }}>
                                <i onClick={() => categoryEdit()} class="fas fa-ellipsis-h cursor"></i>
                            </span>

                        </div> : <div className="kanban-title-edit">

                            <Form.Group controlId="exampleForm.ControlInput1" style={{ padding: '0px' }}>

                                <Form.Control size="sm" type="text" defaultValue={editedCategory} onChange={(event) => setEditedCategory(event.target.value)} />
                            </Form.Group>
                            <span>
                                <Button onClick={() => submitEdit(data.id)} variant="primary" size="sm" className="mb-3">Edit</Button>
                            </span>


                        </div>
                }

                <div className="kanban-body">
                    {
                        data.todos && data.todos.map((todo,idx) => (
                            <Card key={idx} data={todo}></Card>
                        ))

                    }

                    {/* <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card> */}
                </div>
            </div>

        </>
    )
}

