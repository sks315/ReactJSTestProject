import React, { useState } from 'react'
import '../CSS/customStyle.css'
import {Form, Button, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import { userActions } from '../action/UserActions'
import { addUser, updateUser } from '../services/UserServices'
import {useNavigate} from 'react-router-dom';

function AddRec(props) {
  console.log(props)
  console.log(props.data?.city)
  const navigate = useNavigate();
  
  //const em = JSON.parse(props.data);

  
  
  const [editBtn, setEditBtn] = useState(true);
  const [fristName, setFristName] = useState(props.data?.first_name);
  const [lastName, setLastName] = useState(props.data?.last_name);
  const [emailID, setEmail] = useState(props.data?.email);
  const [state, setState] =useState(props.data?.states);
  const [city, setCity] =useState(props.data?.city);
  const [pincode, setPincode] = useState(props.data?.pincode);
  const [error, setError] = useState();

  useState(()=>{
    if(props.data !== undefined){
      setEditBtn(false)
    }
  })

  //Email validation ************************//
  const emailValidation = ()=>{
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!emailID || regex.test(emailID) === false){
        
        return false;
    }
    return true;
}

//pincode validation *******************//
const pincodeValidation = ()=>{
  const regex = /^[0-9][0-9][0-9][0-9][0-9][0-9]$/
  if(!pincode || regex.test(pincode) === false){
      
      return false;
  }
  return true;
}

//get params in function ***********//
const paramsGet =()=>{
  return `param1=${emailID}&param2=${fristName}&param3=${lastName}&param4=${pincode}&param5=${city}&param6=${state}`
}

//sumbiting user form with validation *************//
const sumbit = ()=>{
  if(!fristName){
    setError("Enter the frist Name")
    return
  }
  if(!lastName){
    setError("Enter the Last Name")
    return
  }
  if(!emailID){
    setError("Enter the Email")
    return
  }
  if(!emailValidation()){
    setError("Email is not Valid")
    return
  }
  if(!state){
    setError("select state")
    return
  }
  if(!city){
    setError("Enter the city")
    return
  }
  if(!pincode){
    setError("Enter the pincode");
    return
  }
  if(!pincodeValidation()){
    setError("Pincode is not Valid")
    return
  }

  props.addUserAction(paramsGet()).then((res)=>{
    console.log(res);
    console.log(res.data.Message)
    if(res.data.Message === "You have successfully added new client"){
      alert(res.data.Message)
      navigate('/')
    }else{
      alert(res.data.Message)
      navigate('/')
    }
  }).catch(error => console.log(error))

  navigate('/')



}

//update the user***************//
const saveUpdate = (e)=>{
  e.preventDefault();
  updateUser(paramsGet()).then(res=>{
    console.log(res.data);
    if(res.data.Success){
      alert(res.data.Message);
      window.location.reload();
    }else{
      alert(res.data.Message)
      window.location.reload();
    }
  })


}

  return (
    <div className='container'>
      <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Frist Name</Form.Label>
          <Form.Control type="text" placeholder="Frist Name"  value={fristName} onChange ={(e)=>setFristName(e.target.value)} />
        </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" value={lastName} onChange ={(e)=>setLastName(e.target.value)}  />
          </Form.Group>
        </Col>

        <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            {editBtn? (<Form.Control type="email" placeholder="Email" value={emailID} onChange ={(e)=>setEmail(e.target.value)}  />):
            (<Form.Control type="email" placeholder="Email" value={emailID} onChange ={(e)=>setEmail(e.target.value)}  disabled/>)}
            
            </Form.Group>
        </Col>

      </Row>
      

      <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>State</Form.Label>
              <Form.Select aria-label="Default select example" value={state} onChange ={(e)=>setState(e.target.value)}>
                <option>Please select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Goa">Goa</option>
                <option value="Gujrat">Gujrat</option>
                <option value="Delhi">Delhi</option>
              </Form.Select>
            </Form.Group>
        </Col>

        <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" value={city} onChange ={(e)=>setCity(e.target.value)}  />
            </Form.Group>
        </Col>

        <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type="number" placeholder="Enter pincode" value={pincode} onChange ={(e)=>setPincode(e.target.value)} />
          </Form.Group>
        </Col>
        <p style={{color : 'red'}}>{error}</p>
      </Row>
          {editBtn? (<Button variant="primary" onClick={sumbit}>
            Submit
          </Button>):(<Button variant="primary" onClick={saveUpdate}>
            Update
          </Button>)}

          {editBtn? (<Button variant="primary" style={{marginLeft:'10px', backgroundColor : 'gray', border : 'none'}} onClick={sumbit}>
            cancel
          </Button>)
          : null}
  </Form>
     
  </div>
  )
}


// const actionCreators = {
//   addUserAction: userActions.addUserAction,
// };

const addUserAction ={
  addUserAction: userActions.addUserAction,
}

export default connect(null, addUserAction)(AddRec);
