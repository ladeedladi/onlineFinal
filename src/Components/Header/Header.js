import React,{useContext,useEffect} from 'react';
import Firebase from 'firebase';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useHistory } from 'react-router';
import {AddContext} from '../../context'

function Header() {
  const history=useHistory()
  const {user,setUser}=useContext(AddContext)
useEffect(() => {
 
    Firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
 
}, [])
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user? user.displayName:'login'}</span>
          <hr />
          <span onClick={()=>{
            Firebase.auth().signOut()
          }} >{user && 'logout'}</span>
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>history.push('/create')}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
