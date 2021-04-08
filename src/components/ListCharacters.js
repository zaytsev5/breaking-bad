import React, { Component } from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import Search from './Search'
import Loading from './Loading'

const ListCharacters = () =>{
    const [items,setItems] = useState([]);
    const [isLoaded,setLoad] = useState(false);
    const [val,setVal] = useState('');
    useEffect(() => {
        const fetchItems = async () => {
          const result = await axios(
            `https://www.breakingbadapi.com/api/characters/?name=${val}`
          )
          setItems(result.data)
          setLoad(true)
        }
    
        fetchItems()
      }, [val])
      return (
        
          <div className="list">
            <Header />
            <Search changeValue={(val)=>setVal(val)} />
            {isLoaded ? 
              <div className="list-grid">
                {items.map(item =>(
                    <img src={item.img} width={270} height={230} key={item.char_id} title={item.name}/>
                ))}
              </div> :
            <Loading />
            }
          </div>
      )
    

}


export default ListCharacters;