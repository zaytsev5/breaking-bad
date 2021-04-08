import React, { Component } from 'react';
import {useState} from 'react'

const Search = ({changeValue})=>{
    const [value,setValue] = useState('')
    const handleChange = (val) =>{
      //  setValue(val)
        changeValue(val)
    }
    return (
        <input 
        placeholder="Searching characters..."
        onChange={(e)=>handleChange(e.target.value)}
        />
    )
}

export default Search;