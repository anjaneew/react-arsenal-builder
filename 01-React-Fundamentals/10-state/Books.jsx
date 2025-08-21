import {useState} from 'react';

const Books = () => {

    const [books, setBooks] = useState([  
        {title: "The Midnight Library", author: "Matt Haig", year: 2020, pages: 288},
        {title: "Dune", author: "Frank Herbert", year: 1965, pages: 688},
        {title: "Educated", author: "Tara Westover", year: 2018, pages: 334},
        {title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", year: 2017, pages: 400},
        {title: "Atomic Habits", author: "James Clear", year: 2018, pages: 320}]);
    
    const [newTitle, setNewTitle] = useState("");   
    const [newAuthor, setNewAuthor] = useState(""); 
    const [newYear, setNewYear] = useState(""); 
    const [newPages, setNewPages] = useState("");  

    const handleTitleChange = (e) => setNewTitle(e.target.value);
    const handleAuthorChange = (e) => setNewAuthor(e.target.value);
    const handleYearChange = (e) => setNewYear(e.target.value);
    const handlePagesChange = (e) => setNewPages(e.target.value);

    const newBook = { title: newTitle, author: newAuthor, year: newYear, pages: newPages}

    const handleRemove = (index) => setBooks((b) => b.filter((_, i) => index !== i)); 
    const handleAddition = () => setBooks((b) => [...b , newBook]);
    

    return(
        <div className="container">
            <div className="flexItem">
                <h2>~Example 3~</h2>
                <h1>Books Object</h1>
                <ul>
                    {books.map((book, index)=> (
                        <li key={index}>
                            Title: {book.title}   
                            Author: {book.author}    
                            Year:{book.year}   
                            Pages:{book.pages}
                            <button onClick={()=>handleRemove(index)}>X</button>
                        </li> 
                    ))}
                </ul>
                <h3>New Entry:</h3>
                <input type="text" value={newTitle} className="bookInput" onChange={handleTitleChange} placeholder="Enter book title"></input>
                <input type="text" value={newAuthor} className="bookInput" onChange={handleAuthorChange} placeholder="Enter book author"></input>
                <input type="text" value={newYear} className="bookInput" onChange={handleYearChange} placeholder="Enter book year"></input>
                <input type="text" value={newPages} className="bookInput" onChange={handlePagesChange} placeholder="Enter book pages"></input>
                <button onClick={handleAddition}>Add Entry</button>
            </div>
     
        </div>  
    );

}

export default Books;
