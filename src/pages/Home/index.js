
import { useState } from 'react'
import {Link, useLocation} from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from '../../hooks/useGifs'

const POPULAR_GIFS =  ["pandas", "rick and morty", "gatos"]
export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    
    const {loading, gifs} = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)

    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <h3 className='App-title'>Los gifs más populares</h3>
            <form onSubmit={handleSubmit}>
                <input placeholder='Search a gif here...' onChange={handleChange} type='text' value={keyword}></input>
                <button>Buscar</button>
            </form>
            <h3>Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif} >
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}