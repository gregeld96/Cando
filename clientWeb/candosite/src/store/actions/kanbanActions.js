import { SET_KANBAN_DETAILS } from './type'
import axios from 'axios'

let baseUrl = `http://localhost:3001/data`


export const setKanban = (data, id) => {
    return (dispatch) => {
        // console.log(data)


        dispatch({
            type: SET_KANBAN_DETAILS,
            payload: { data, id }
        })
    }
}

export const getKanbanData = (id, token) => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: `${baseUrl}/${id}`,
            headers: {
                token
            }
        })
            .then(data => {
                dispatch(setKanban(data, id))
            })
            .catch(err => console.log)
    };

}

export const editCategoryName = (payload) => {
    return (dispatch) => {
        let { id,
            departmentId,
            editedCategory, token } = payload
        console.log(payload)
        axios({
            method: 'put',
            url: `${baseUrl}/category/${id}`,
            headers: {
                token
            },
            data: {
                name: editedCategory,
                departmentId
            }
        })
            .then(data => {
                dispatch(getKanbanData(departmentId, token))
                // console.log(data)
            })
            .catch(err=>{
                alert('TIDAK BISA EDIT CATEGORY')
            })
    }
}

export const editTodo = (payload) => {
    return (dispatch) => {
        // console.log(payload)
        let { id,
            departmentId,
            todoData, token } = payload
        let { title,
            deadline,
            priority,
            description,
            categoryId,
            userId } = todoData
        console.log(todoData, id, departmentId)
        axios({
            method: 'put',
            url: `${baseUrl}/todo/${id}`,
            headers: {
                token
            },
            data: {
                title,
                deadline,
                priority,
                description,
                categoryId,
                userId
            }
        })
            .then(data => {
                dispatch(getKanbanData(departmentId, token))
                // console.log(data)
            })
            .catch(err=>{
                alert('TIDAK BISA EDIT')
            })
    }
}


export const deleteTodoData = (payload) => {
    return (dispatch) => {
        // console.log(payload)
        let { id,
            departmentId, token } = payload

        console.log(id, departmentId)
        axios({
            method: 'delete',
            url: `${baseUrl}/todo/${id}`,
            headers: {
                token
            }

        })
            .then(data => {
                dispatch(getKanbanData(departmentId, token))
                alert(data.data)
            })
            .catch(err=>{
                // console.log(`TIDAK BISA DELETE`)
                alert('TIDAK BISA DELETE')
            })
    }
}
