import { Link } from "react-router"

const BookCard = (props) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.img} alt={`${props.title} cover`} className="img-fluid image card-img-top" />
                <section className="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    { props.author && <p className="card-text">{props.author}</p>}
                </section>
                <footer className="card-footer">
                    <Link to={`/book/${props.id}`} style={{ textDecoration: "none", color: "blue"}}>More Info</Link>
                </footer>
            </div>
        </div>
    )
}

export default BookCard