import React, {useState} from 'react'
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import AddRec from './AddRec';
import { deleteUser } from '../services/UserServices'
import {useNavigate} from 'react-router-dom';


function UserData(item, index) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [deleteShow, setDeleteShow] = useState(false);
    
    const deleteHandleClose = () => setDeleteShow(false);
    const deleteHandleShow = () => setDeleteShow(true);
    const navigate = useNavigate();

  //Deleting User record ********************//

  const deleteUserOne = ()=>{
        const userData = `param1=${item.item.email}`
        deleteUser(userData).then(res =>{
            console.log(res);
            if(res.data.Success){
                // alert(res.data.Message)
                window.location.reload()
              }else{
                alert(res.data.Message)
                window.location.reload()
              }
        })
  }
   
  return (
    <>
                <td>{item.index}</td>
                <td>{item.item.first_name}</td>
                <td>{item.item.last_name}</td>
                <td>{item.item.email}</td>
                <td>{item.item.states}</td>
                <td>{item.item.city}</td>
                <td>{item.item.pincode}</td>
                <td>
                <Button variant="primary"  onClick={handleShow}> Edit
                </Button>
                <Button variant="primary" style={{marginLeft:'10px', backgroundColor : 'red', border : 'none'}} onClick={deleteHandleShow}>
                  DEL
                </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddRec data ={item.item} />
                </Modal.Body>
            </Modal>

        <Modal show={deleteShow} onHide={deleteHandleClose}>
            
            <Modal.Body>Are You Sure to Delete {item.item.first_name} {item.item.last_name}!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={deleteHandleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={deleteUserOne}>
                YES
            </Button>
            </Modal.Footer>
      </Modal>

            
        </td> 
    </>
  )
}

export default UserData
