import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import html2canvas from 'html2canvas';
import axios from 'axios';


function App() {

  const [linea1,setLinea1] = useState('');
  const [linea2,setLinea2] = useState('');
  const [imagen,setImagen] = useState('fire');

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  }
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  }
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  }

  const onClickExportar = function (evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    })
  }

  const data = function(){
    const response = axios.get('localhost:44368/weatherforecast').then((res) => {
      return res;
    } )
  }

  return (
    <div className="App">
     <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option> 
        <option value="futurama">Futurama</option> 
        <option value="history">History Channel</option> 
        <option value="matrix">Matrix</option> 
        <option value="philosoraptor">Philosoraptor</option> 
        <option value="smart">Smart Guy</option> 
      </select><br/>
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'></input><br/>
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'></input><br/>
      <button onClick={onClickExportar}>Exportar</button>
      <div className='meme' id='meme'>
        <span >{linea1}</span><br/>
        <span >{linea2}</span>
        <img src={"/img/"+ imagen+".jpg"}/>
      </div>
    </div>
  );
}

export default App;
