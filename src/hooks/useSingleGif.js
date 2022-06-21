import { useEffect, useState } from 'react'
import getSingleGif from '../services/getSingleGif'
import {useGifs} from './useGifs'

export default function useSingleGif ({id}) {
    const {gifs} = useGifs()
    const gifFromCache = gifs.find(singleGif => singleGif.id === id)

    const [gif, setGif] = useState(gifFromCache)

    useEffect(function () {
        if (!gif) {
            getSingleGif({ id })
                .then(gif => {
                    setGif(gif)
                })
        }
    }, [id, gif])

    return {gif}
}