import './App.css'
import Books from './Books';
import Gallery from './Gallery';
import Form from './Form';
import Form1 from './Form1';
import Users from './Users';
import Friends from './Friends';

function App() {

  const books = [
    {name: 'Math', price: 120},
    {name: 'Physics', price: 200},
    {name: 'Chemistry', price: 150}
  ];

  function handleClick() {
    alert('You are Clicked!');
  }

  return (
    <>
      <Books books={books}></ Books>
      <button className='btn-primary' onClick={()=> alert('You clicked me again!')}>Click Me</button>
      <form onSubmit={event => {
        event.preventDefault();
        alert('Submitting'); 
      }}></form>
      <Gallery></Gallery><br />
      <Form></Form>
      <Form1></Form1>
      <Users></Users>
      <Friends> </Friends>
    </>
  )
}

export default App

