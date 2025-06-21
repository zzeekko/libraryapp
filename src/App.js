import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import axios from 'axios'

import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import AllBooks from './components/AllBooks'
import SingleBook from './components/SingleBook'
import AddBook from './components/AddBook'
import Error from './components/Error'

const App = () => {
    const [book, setBook] = useState([])

    const [formData, setFormData] = useState({ 
            title: '',
            author_id: 0,
            publisher_id: 0,
            copyright_year: 1600,
            edition: '',
            edition_year: 1600,
            format_id: 0,
            format: '',
            language: '',
            rating: '',
            num_pages: 0,
            cover_image: '',
            qty: 0,
            genre: []
        // book: {
        //     title: '',
        //     author_id: 0,
        //     publisher_id: 0,
        //     copyright_year: 1600,
        //     edition: '',
        //     edition_year: 1600,
        //     binding: '',
        //     language: '',
        //     rating: '',
        //     num_pages: 0,
        //     cover_image: '',
        //     qty: 0
        // },

        // author: [],

        // publisher: []
    })

    const [ formGenreData, setFormGenreData ] = useState({})

    const [isPostSuccess, setIsPostSuccess] = useState({
        isSuccess: false,
        id: 0
    })

    const handleSubmit =(e)=> {
        e.preventDefault()
        
        const genres = Object.entries(formGenreData).filter(([id, checked]) => checked).map(([id, checked]) => id);
        console.log("Submitting:", formData, genres)
        axios({
            method: 'post',
            url: 'http://localhost:4000/api/book/post',
            data: {...formData, genres}
        }).then(response => {
            console.log(response)
            setIsPostSuccess({isSuccess: true, id: response.data.Last_id})
        })
    }

    console.log(isPostSuccess)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleGenreChange = (event) => {
        const { checked, value } = event.target;
        setFormGenreData(prevState => ({
            ...prevState,
            [value]: checked
        }));
    }
    
    useEffect(() => {
        axios.get('http://localhost:4000/api/book')
            .then(res => {
                setBook(res.data);
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/book' element={<AllBooks book={book}/>} />
                <Route path='/book/:id' element={<SingleBook />}/>
                <Route path='/addBook' element={<AddBook 
                        handleSubmit={handleSubmit} 
                        handleChange={handleChange}
                        handleGenreChange={handleGenreChange} 
                        formData={formData}
                        // isPostSuccess={isPostSuccess}
                />}/>
                {/* { isPostSuccess.isSuccess && <Route path={`/book/${isPostSuccess.id}`} element={ <SingleBook />} />} */}
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App