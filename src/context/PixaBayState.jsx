import React, { useEffect, useState } from 'react'
import PixaBayContext from './PixaBayContext'

const PixaBayState = (props) => {
    const api_key = "48006169-ee147746a1217e1a91c474973"
    const [imageData,setImageData] = useState([])
    const [search,setSearch] = useState("india")
    const [loading,setLoading] = useState(false)
    console.log("search ele: ",search);
    
    useEffect(()=>{
        const fetchData = async() =>{
            setLoading(true)
            const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${search}&image_type=photo&pretty=true&per_page=100`)

            const res = await api.json()
            setImageData(res.hits);
            console.log(res.hits);
            setLoading(false)
            
            
        }
        fetchData()
    },[search])
  return (
    <PixaBayContext.Provider value={{imageData,setSearch,loading}}>{props.children}</PixaBayContext.Provider>
  )
}

export default PixaBayState