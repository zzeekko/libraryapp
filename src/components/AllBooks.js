import { useParams, Link } from 'react-router'
import BookCard from "./BookCard"
import { useEffect } from 'react'
import axios from 'axios'

const AllBooks = (props) => {
    // const params = useParams()

    // useEffect(()=> {
    //     props.resetData()
    // }, [])

    // useEffect(()=> {
    //     setTable(props.table)
    //     setHeading(props.table)
    // }, [])


    // useEffect(()=> {
    //         const url = `http://localhost:4000/api/book`
    
    //         axios.get(url).then(res => setBooks(res.data))
    // }, [])

    const cardComponents = props.book.map(book => (
        <BookCard
            key={book.book_id}
            id={book.book_id}
            title={book.title}
            author={book.author}
            img={book.cover_image}
        />
    ))

    return (
        <main className="main" id="allBooksMain">
            <div className="container">
                <h2 className="text-capitalize heading">All Books</h2>
                <p className="text-end">
                    <Link to="/addBook">Add Book</Link>
                </p>
                <section className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4">
                    {cardComponents}
                </section>
            </div>
        </main>
    )
}

export default AllBooks