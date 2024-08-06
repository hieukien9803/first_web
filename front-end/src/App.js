import logo from './logo.svg';
import './App.css';

function App() {

  const lop = () => {
    alert(document.getElementById('kien').value);
  }
  return (
    <div className="App">
     <p>The button below activates a JavaScript function when it is clicked.</p>
     <form>
  <input type="text" id='kien' />
  <input type="button" value = "print" onClick ={lop} />
</form>

    </div>
  );
}

export default App;
