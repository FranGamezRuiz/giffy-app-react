import { useEffect, useState } from 'react'
import getGifs from '../../services/getGifs'
import Gif from '../Gif'

export default function ListOfGifs ({keyword}) {
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(function () {
        setLoading(true)
        getGifs({keyword})
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    return (loading)
        ?   <i>Cargando ...</i>
        :   <div>
                {
                    gifs.map(({id, title, url}) => 
                        <Gif 
                        id={id} 
                        key={id}  
                        title={title} 
                        url={url} 
                        />
                    )
                }
            </div>
}