
import ListOfGifs from '../../components/ListOfGifs';

export default function SearchResults ({params}) {
    return (
        <>
            <ListOfGifs keyword={params.keyword} />
        </>
    )
}