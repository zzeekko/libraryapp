import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const bookSingle =()=> {
    const params = useParams()

    const [ book, setBook ] = useState({})
    const [ genres, setGenres ] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/api/book/${params.id}`)
            .then(res => {
                setBook(res.data)
                setGenres(res.data.genres)
            })
            .catch(err => console.error(err))
    }, [])

    const genresListItems = genres.map(genre => {
        return <li key={ genre }className="list-item genre
        item">{ genre }</li>
    })


    return (
        <main className="main" id="bookSingleMain">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="book-single-heading">{ book.title }</h2>
                        <h3 className='book-single-subheading'>by { book.author }</h3>
                        <img src={book.cover_image} alt={`${book.title} cover`} className="img-fluid image book-single-img" />
                    </div>
                    <div className="col">
                        <ul className="book-info-list list-group">
                            <li className="list-group-item">Publisher: {book.publisher}</li>
                            <li className="list-group-item">Language: {book.language}</li>
                            <li className="list-group-item">Copyright Year: {book.copyright_year}</li>
                            <li className="list-group-item">Edition: {book.edition}</li>
                            <li className="list-group-item">Edition Year: {book.edition_year}</li>
                            <li className="list-group-item">Binding: {book.binding}</li>
                            <li className="list-group-item">Rating: {book.rating}</li>
                            <li className="list-group-item">Language: {book.language}</li>
                            <li className="list-group-item">Pages: {book.num_pages}</li>
                            <li className="list-group-item">Format: {book.formats}</li>
                            <li className="list-group-item">In Stock: {book.qty}</li>
                            { genres.length && <li className="list-group-item">
                                Genre:
                                <ul className="genre-list">
                                    {genresListItems}
                                </ul>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default bookSingle