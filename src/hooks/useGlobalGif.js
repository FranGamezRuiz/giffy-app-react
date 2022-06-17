import { useContext } from 'react'
import GifsContext from '../context/GifsContext'

export default function useGlobalGif () {
    const {gifs} = useContext(GifsContext)

    return gifs
}