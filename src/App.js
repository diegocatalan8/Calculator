import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [valorOperar, setValorOperar] = useState(0);
  const [operator, setOperator] = useState(null);
  const [estado, setEstado] = useState(false);

  useEffect(() => {}, [count]);

  return (
    <div className="App">
          <div className='container-calculadora'>
            <div className='container-calculadora-header'>
              <div className='container-calculadora-header-title'>
                  <h4></h4>
                  <h1>{valorOperar}</h1>
              </div>
              <div className='container-calculadora-header-buttons'>
                  
                  <button
                  onClick={() => {
                    setValorOperar(0);
                  }}
                  >CE</button>
                  <button
                  onClick={() => {
                    setValorOperar(0);
                    setCount(0);
                  }}
                  >C</button>


                  <button
                  onClick={() => {
                    if(valorOperar === 0){
                      setValorOperar(valorOperar);
                    }
                    else if(isNaN(valorOperar)){
                      setValorOperar(0);
                    }
                    else{
                      let valor = valorOperar.toString();
                      let valor2 = valor.slice(0, -1);
                      let valor3 = parseInt(valor2);

                      if (isNaN(valor3)) {
                        setValorOperar(0);
                      }else{
                        setValorOperar(valor3);
                      }

                    
                    }

                  }}
                  >DEL</button>


                  <button
                  onClick={()=>{
                    if(count === 0 || operator !== "/"){
                      setCount(valorOperar);
                      setValorOperar(valorOperar);
                      setOperator('/');
                      setEstado(true);
 
                    }
                     else{
                      let valor = count / valorOperar;
                      let valorR= valor.toFixed(1);
                      let valorReducido = parseFloat(valorR);
                       setCount(valorReducido);
                       setValorOperar(valorReducido);
                       setOperator('/');
                        setEstado(true);
                     }
 
 
                   }}
                  >/</button>

              
                  <button onClick={()=>{
                    if(valorOperar[valorOperar.length-1] === '.'){
                      let valor = valorOperar + "7";
                      let floatValor = parseFloat(valor);
                      setValorOperar(floatValor);
                    }
                    else if(valorOperar === 0 || estado === true){
                      setValorOperar(7);
                      setEstado(false);
                    }
                   else{
                      let valor = valorOperar + "7";
                      let intValor = parseInt(valor);
                    setValorOperar(intValor);
                    }
                  
                  }}>7</button>

          
                  <button onClick={()=>{
                    if(valorOperar[valorOperar.length-1] === '.'){
                      let valor = valorOperar + "8";
                      let floatValor = parseFloat(valor);
                      setValorOperar(floatValor);
                    }
                    else if(valorOperar === 0 || estado === true){
                      setValorOperar(8);
                      setEstado(false);
                    }
                    else{
                      let valor = valorOperar + "8";
                      let intValor = parseInt(valor);
                    setValorOperar(intValor);
                    } 
                  }}>8</button>

         
                  <button onClick={()=>{
                    if(valorOperar[valorOperar.length-1] === '.'){
                      let valor = valorOperar + "9";
                      let floatValor = parseFloat(valor);
                      setValorOperar(floatValor);
                    }
                    else if(valorOperar === 0 || estado === true){
                      setValorOperar(9);
                      setEstado(false);
                    }
                    else{
                      let valor = valorOperar + "9";
                      let intValor = parseInt(valor);
                      setValorOperar(intValor);
                    }
                  }}>9</button>


                  <button
                  onClick={()=>{
                    if(count === 0 || operator !== "*"){
                      setCount(valorOperar);
                      setValorOperar(valorOperar);
                      setOperator('*');
                      setEstado(true);
 
                    }
                     else{
                       setCount(count * valorOperar);
                       setValorOperar(count * valorOperar);
                       setOperator('*');
                        setEstado(true);
                     }
 
 
                   }}
                  >*</button>


                  <button onClick={()=>{
                    if(valorOperar[valorOperar.length-1] === '.'){
                      let valor = valorOperar + "4";
                      let floatValor = parseFloat(valor);
                      setValorOperar(floatValor);
                    }
                    else if(valorOperar === 0 || estado === true){
                      setValorOperar(4);
                      setEstado(false);
                    }
                    else{
                      let valor = valorOperar + "4";
                      let intValor = parseInt(valor);
                    setValorOperar(intValor);
                    }
                  }}>4</button>


                  <button onClick={()=>{
                    if(valorOperar[valorOperar.length-1] === '.'){
                      let valor = valorOperar + "5";
                      let floatValor = parseFloat(valor);
                      setValorOperar(floatValor);
                    }
                    else if(valorOperar === 0 || estado === true){
                      setValorOperar(5);
                      setEstado(false);
                    }
                    else{
                      let valor = valorOperar + "5";
                      let intValor = parseInt(valor);
                    setValorOperar(intValor);
                    }
                  }}>5</button>


                  <button onClick={()=>{
                    if(valorOperar[valorOperar.length-1] === '.'){
                      let valor = valorOperar + "6";
                      let floatValor = parseFloat(valor);
                      setValorOperar(floatValor);
                    }
                    else if(valorOperar === 0 || estado === true){
                      setValorOperar(6);
                      setEstado(false);
                    }
                    else{
                      let valor = valorOperar + "6";
                      let intValor = parseInt(valor);
                      setValorOperar(intValor);
                    }
                  }}>6</button>


                  <button 
                  onClick={()=>{
                    if(count === 0 || operator !== "-"){
                      setCount(valorOperar);
                      setValorOperar(valorOperar);
                      setOperator('-');
                      setEstado(true);
 
                    }
                     else{
                       setCount(count - valorOperar);
                       setValorOperar(count - valorOperar);
                       setOperator('-');
                        setEstado(true);
                     }
 
 
                   }}
                  
                  >-</button>


                  <button onClick={()=>{
                    if(valorOperar[valorOperar.length-1] === '.'){
                      let valor = valorOperar + "1";
                      let floatValor = parseFloat(valor);
                      setValorOperar(floatValor);
                    }
                    else if(valorOperar === 0 || estado === true){
                      setValorOperar(1);
                      setEstado(false);
                    }
                    else{
                      let valor = valorOperar + "1";
                      let intValor = parseInt(valor);
                     setValorOperar(intValor);
                    }
                  }}>1</button>


                  <button onClick={()=>{
                    if(valorOperar[valorOperar.length-1] === '.'){
                      let valor = valorOperar + "2";
                      let floatValor = parseFloat(valor);
                      setValorOperar(floatValor);
                    }
                    else if(valorOperar === 0 || estado === true){
                      setValorOperar(2);
                      setEstado(false);
                    }
                    else{
                      let valor = valorOperar + "2";
                      let intValor = parseInt(valor);
                      setValorOperar(intValor);
                    }
                  }}>2</button>

                  <button onClick={()=>{
                    if(valorOperar[valorOperar.length-1] === '.'){
                      let valor = valorOperar + "3";
                      let floatValor = parseFloat(valor);
                      setValorOperar(floatValor);
                    }
                    else if(valorOperar === 0 || estado === true){
                      setValorOperar(3);
                      setEstado(false);
                    }
                    else{
                      let valor = valorOperar + "3";
                      let intValor = parseInt(valor);
                      setValorOperar(intValor);
                    }
                  }}>3</button>

                  <button onClick={()=>{
                   if(count === 0 || operator !== "+"){
                     setCount(valorOperar);
                     setValorOperar(valorOperar);
                     setOperator('+');
                     setEstado(true);

                   }
                    else{
                      setCount(count + valorOperar);
                      setValorOperar(count + valorOperar);
                      setOperator('+');
                      setEstado(true);
                    }


                  }}>+</button>

                  <button onClick={()=>{
                    if(valorOperar[valorOperar.length-1] === '.'){
                      let valor = valorOperar + "0";
                      let floatValor = parseFloat(valor);
                      setValorOperar(floatValor);
                    }
                    else if(valorOperar === 0 || estado === true){
                      setValorOperar(0);
                      setEstado(false);
                    }
                    else{
                      let valor = valorOperar + "0";
                      let intValor = parseInt(valor);
                      setValorOperar(intValor);

                    }
                  }}>0</button>

                  <button onClick={()=>{
                    
                    setValorOperar(valorOperar+".");

                  }}>.</button>

                  <button className='signo-igual'
                  onClick={()=>{
                    if(operator === '+'){
                      setCount(count + valorOperar);
                      setValorOperar(count + valorOperar);
                      setOperator(null);
                      setEstado(true);
                    }
                    if(operator === '-'){
                      setCount(count - valorOperar);
                      setValorOperar(count - valorOperar);
                      setOperator(null);
                      setEstado(true);
                    }
                    if(operator === '*'){
                      setCount(count * valorOperar);
                      setValorOperar(count * valorOperar);
                      setOperator(null);
                      setEstado(true);
                    }
                    if(operator === '/'){
                      let valor = count / valorOperar;
                      let valorR= valor.toFixed(1);
                      let valorReducido = parseFloat(valorR);
                       setCount(valorReducido);
                       setValorOperar(valorReducido);
                       setOperator('/');
                        setEstado(true);
                    }
                   

                   
                  }}
                  >=</button>


              </div>
            </div>
                 
          
          </div>
    </div>
  );
}

export default App;
