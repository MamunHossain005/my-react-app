import Book from "./Book"
export default function Books({books}){
    return(
        <>
            <h2>Books</h2>
            <div>
                {books.map(book => <Book book={book}></Book>)}
            </div>
        </>
    )
}