import './Book.css'

export default function Book({book}){
    let {name, price} = book;
    return(
        <div className='book'>
            <h1>Name: {name}</h1>
            <p>Price: {price}</p>
        </div>
    )
}