import useGlobalGif from "../../hooks/useGlobalGif";
import Gif from '../../components/Gif'

export default function Detail ({params}) {
    const gifs = useGlobalGif()
    
    const gif = gifs.find(singleGif => 
        singleGif.id === params.id
    )

    return <Gif {... gif} />
}