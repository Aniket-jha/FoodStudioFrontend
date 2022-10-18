import React,{useState} from 'react'
import classes from "./Search.module.css"
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import HeaderNavbar from '../components/Navbar'
const Search = () => {
        const navigate = useNavigate()
    const [keyword, setKeyword] = useState("")

   const searchSubmitHandler = (e)=>{
    e.preventDefault();
    if(keyword.trim()){
        navigate(`/products/${keyword}`)
    }
    else{
        navigate("/products");
    }
   }

  return (
    <>
       
     <HeaderNavbar/>
     <div>
      <form className={classes.searchBox}  onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
        <div >
        <Link to='/'>
            <button style={{marginLeft:"10px",borderRadius:"50%",padding:"10px 20px",border:"none", backgroundColor:"black",color:"white"}}>
                X
            </button>
            </Link>
        </div>
      </form>
    </div>
       
    </>
  )
}

export default Search