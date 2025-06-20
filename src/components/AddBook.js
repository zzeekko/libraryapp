import { useState, useEffect} from 'react'
import axios from 'axios'

const AddBook =(props)=> {

    const [ authors, setAuthors ] = useState([])
    const [ publisher, setPublisher ] = useState([])
    // const [ format, setFormat ] = useState([])

    useEffect(()=> {
        const authorUrl = 'http://localhost:4000/api/author'
        const publisherUrl = 'http://localhost:4000/api/publisher'
        // const formatUrl = 'http://localhost:4000/api/format'

        axios.get(authorUrl).then(res => setAuthors(res.data))
        axios.get(publisherUrl).then(res => setPublisher(res.data))
        // axios.get(formatUrl).then(res => setFormat(res.data))
    }, [])

    const authorDivs = authors.map(author => {
        return (
            <div className="form-check form-check-inline" key={author.author_id}>
                <input
                    className="form-check-input"
                    type="radio"
                    name="author_id"
                    defaultValue={author.author_id}
                    id={author.author}
                    onChange={props.handleChange}
                />
                <label className="form-check-label" htmlFor={author.author}>
                    {author.author}
                </label>
            </div>
        )
    })

    const publisherDivs = publisher.map(publisher => {
        return (
            <div className="form-check form-check-inline" key={publisher.publisher_id}>
                <input
                    className="form-check-input"
                    type="radio"
                    name="publisher_id"
                    defaultValue={publisher.publisher_id}
                    id={publisher.publisher}
                    onChange={props.handleChange}
                />
                <label className="form-check-label" htmlFor={publisher.publisher}>
                    {publisher.publisher}
                </label>
            </div>
        )
    })

    // const formatDivs = format.map(format => {
    //     return (
    //         <div className="form-check form-check-inline" key={format.format_id}>
    //             <input
    //                 className="form-check-input"
    //                 type="radio"
    //                 name="format_id"
    //                 defaultValue={format.format_id}
    //                 id={format.format}
    //                 onChange={props.handleChange}
    //             />
    //             <label className="form-check-label" htmlFor={format.format}>
    //                 {format.format}
    //             </label>
    //         </div>
    //     )
    // })

    return(
        <>
            {props.isPostSuccess.isSuccess ? <Success /> :
            <main className="main" id="bookFormMain">
                <div className="container">
                    <form className="book-form form" onSubmit={props.handleSubmit}>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input 
                                    id="title" 
                                    type="text"
                                    className="form-control" 
                                    name="title"
                                    value={props.formData.title}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="copyrightYear" className="form-label">Copyright Year</label>
                                <input 
                                    id="copyrightYear" 
                                    type="number"
                                    className="form-control" 
                                    name="copyright_year"
                                    min="1600"
                                    max="2099"
                                    step="1"
                                    value={props.formData.copyright_year}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="qty" className="form-label">In Stock</label>
                                <input 
                                    id="qty" 
                                    type="number"
                                    className="form-control" 
                                    name="qty"
                                    min="0"
                                    max="9999"
                                    step="1"
                                    value={props.formData.qty}
                                    onChange={props.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="edition" className="form-label">Edition</label>
                                <input 
                                    id="edition" 
                                    type="text"
                                    className="form-control" 
                                    name="edition"
                                    value={props.formData.edition}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="editionYear" className="form-label">Edition Year</label>
                                <input 
                                    id="editionYear" 
                                    type="number"
                                    className="form-control" 
                                    name="edition_year"
                                    min="1600"
                                    max="2099"
                                    step="1"
                                    value={props.formData.edition_year}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className="col">
                                <div className="col">
                                    <label htmlFor="edition" className="form-label">Binding</label>
                                    <input 
                                        id="binding" 
                                        type="text"
                                        className="form-control" 
                                        name="binding"
                                        value={props.formData.binding}
                                        onChange={props.handleChange}
                                    />
                                </div>
                                {/* 
                                    <div className="binding-box">
                                    <p className="form-text">Binding</p>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="binding" 
                                            defaultValue="paperback" 
                                            id="binding" 
                                            onChange={props.handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="bookAlignment">Paperback</label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio"
                                            defaultValue="hardback" 
                                            name="binding" 
                                            id="hardbackBinding"
                                            onChange={props.handleChange} 
                                        />
                                        <label className="form-check-label" htmlFor="villainAlignment">Hardback</label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="binding" 
                                            defaultValue="none"
                                            id="noneBinding" 
                                            onChange={props.handleChange}   
                                        />
                                        <label className="form-check-label" htmlFor="noneBinding">None</label>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="rating" className="form-label">Rating</label>
                                <input 
                                    id="rating" 
                                    type="text"
                                    className="form-control" 
                                    name="rating"
                                    value={props.formData.rating}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="edition" className="form-label">Language</label>
                                <input 
                                    id="language" 
                                    type="text"
                                    className="form-control" 
                                    name="language"
                                    value={props.formData.language}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="num_pages" className="form-label">Pages</label>
                                <input 
                                    id="num_pages" 
                                    type="number"
                                    className="form-control" 
                                    name="num_pages"
                                    min="0"
                                    max="100100"
                                    step="1"
                                    value={props.formData.num_pages}
                                    onChange={props.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="author-box">
                                    <p className="form-text">Author</p>
                                    { authorDivs }
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="publisher-box">
                                    <p className="form-text">Publisher</p>
                                    { publisherDivs }
                                </div>
                            </div>
                        </div>
                        {/* <div className="row mb-3">
                            <div className="col">
                                <div className="format-box">
                                    <p className="form-text">Format</p>
                                    { formatDivs }
                                </div>
                            </div>
                        </div> */}
                        <div className="row mb-3">
                            {/* <div className="col">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Image</span>
                                    <input 
                                        className="form-control"
                                        type="file"
                                        name="img_url"
                                        onChange={props.handleChange}
                                        value={props.img_url}
                                    />
                                </div>
                            </div> */}
                            <div className="col">
                                <label htmlFor="edition" className="form-label">Cover</label>
                                <input 
                                    id="cover_image" 
                                    type="text"
                                    className="form-control" 
                                    name="cover_image"
                                    value={props.formData.cover_image}
                                    onChange={props.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row button-row">
                            <div className="col">
                                <button className="btn btn-dark">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main> 
            }
        </>
    )

}


const Success =()=> {
    return (
        <div className="container">
            <h2>Book Added!</h2> 
        </div>
    )
}

export default AddBook