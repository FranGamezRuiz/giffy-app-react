import debounce from 'just-debounce-it'
import { useCallback, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import ListOfGifs from '../../components/ListOfGifs'
import SearchForm from '../../components/SearchForm'
import Spinner from '../../components/Spinner'
import {useGifs} from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen'

export default function SearchResults ({params}) {
    const {keyword, rating = 'g'} = params
    const {loading, gifs, setPage} = useGifs({keyword, rating})
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef: loading ? null : externalRef,
        once:false
    })

    const title = gifs 
        ? `${gifs.length} resultados de ${keyword}` : ''
    
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [])


    useEffect(function () {
        console.log(isNearScreen)
        if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    return <>
        {loading
            ?  <Spinner />
            : <>
                <Helmet>
                    <title>{title} | Giffy</title>
                    <meta name="description" content={title}></meta>
                    <meta name="rating" content="General"></meta>
                </Helmet>
                <header className='o-header'>
                    <SearchForm initialKeyWord={keyword} initialRating={rating}/>
                </header>
                <h3 className="App-title">{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
            </>
        }
    </>
}