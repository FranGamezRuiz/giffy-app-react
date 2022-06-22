import React, { useState } from "react";
import { useLocation } from "wouter";

const RATINGS = ['g','pg','pg-13','r']

export default function SearchForm ({initialKeyWord = '', initialRating = 'g'}) {
    const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyWord))
    const [rating, setRating] = useState(initialRating)
    const [time,setTime] = useState(0)

    const [path, pushLocation] = useLocation()
    
   

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
        setTime(time + 1)
    }

    const handleChangeRating = evt => {
        setRating(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <button>Buscar</button> 
            <input placeholder='Search a gif here...' onChange={handleChange} type='text' value={keyword}></input>
            <select onChange={handleChangeRating} value={rating}>
                <option disabled>Rating type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
            <small>{time}</small>
        </form>
    )
}
