import React, { Fragment, useEffect, useRef, useState } from 'react'
import '../CSS/customStyle.css'
import { connect, useDispatch } from 'react-redux';
import { userActions } from '../action/UserActions'
import {users} from '../services/UserServices'
import {Button} from 'react-bootstrap';
import AddRec from './AddRec';
import {Route} from 'react-router-dom'
import {Modal} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import UserData from './UserData';


function HomePage(props) {

  
  if(props){
    console.log(props);
  }

  const [userData, setUsersData] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [searchQ, setsearchQ] = useState();
  const [searchData, setSearchData] = useState([]);
  const [isSearch, setIsSearch] = useState(true);


  
    useEffect(() =>{
      props.getUsers(); 
    },[])

    function searchOnchage(){
      const userDataSearch =  userData.filter(
        person => {
          console.log(person)
          return (
            person
            .first_name
            .toLowerCase()
            .includes(searchQ.toLowerCase()) ||
            person
            .email
            .toLowerCase()
            .includes(searchQ.toLowerCase())
          );
        }
      );      
        
      setSearchData(userDataSearch);
            
      console.log(userDataSearch);
      console.log(userData)
      if(userDataSearch.length > 0){
        setIsSearch(false)
      }
      
    }

    useEffect(()=>{
    //  const userDataSearch =  userData.filter(
    //     person => {
    //       console.log(person)
    //       return (
    //         person
    //         .first_name
    //         .toLowerCase()
    //         .includes(searchQ.toLowerCase()) ||
    //         person
    //         .email
    //         .toLowerCase()
    //         .includes(searchQ.toLowerCase())
    //       );
    //     }
    //   );

    //   if(userDataSearch > -1){
    //     // setSearchData(userDataSearch);
    //     searchData = userDataSearch;
    //   }

      
    //   console.log(userDataSearch);
    //   console.log(userData)

    searchOnchage()
    },[searchQ])

    setTimeout(()=>{
      if(props.user){
        setUsersData(props.user.user.data.data);
      }
    }, 0)

    const saveUpdate = (userProps)=>{
      
    }

    const deleteUser = ()=>{
      
    }


  return (
    <Fragment>
    <div className='container'>
        <div className='tableHead'>
          <span className='btnAdd'><a href='/addrec'>+ ADD BUTTON</a></span>
          <div className='search'><input 
          style={{padding:'5px'}}
          type="search"
          placeholder="search"
          value={searchQ}
          onChange={(e) => setsearchQ(e.target.value)}></input></div>
        </div>
        <div className='table'>
          <table>
            
            <tr className='thColor'>
              <th>#</th>
              <th>Frist Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>State</th>
              <th>City</th>
              <th>Pincode</th>
              <th>Action</th>
            </tr>
            
            {isSearch? (<tbody>
            {userData.map((items, index)=>
              <tr key={index}>
                <UserData item = {items} index ={index+1} />
              </tr>
            )}
            </tbody>) : (<tbody>
            {searchData.map((items, index)=>
              <tr key={index}>
                <UserData item = {items} index ={index+1} />
              </tr>
            )}
            </tbody>)}
            
            
          </table>
        </div>
    </div>
    
    </Fragment>
  )
}

const getUsersFromReducers =(state) =>{
  return{
      user : state,
  }
}

const actionCreators = {
  getUsers: userActions.getUsers,

};

export default connect(getUsersFromReducers, actionCreators)(HomePage);
