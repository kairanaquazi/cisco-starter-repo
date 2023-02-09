import './App.css';
import { useState } from 'react';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1> Cisco Sextant</h1>
            </header>
            <div className="container">
                <Component header="IPv4">
                    <IPComponent type='0'/>
                </Component>
                <Component header="IPv6 (if possible)">
                    <IPComponent type='1'/>
                </Component>
            </div>
        </div>
    );
}

function IPComponent(props){
    const [cont, setcont] = useState("...");

    if(props.type==='0'){
    fetch("https://api.ipify.org").then((response)=>(response.text().then((text)=>{setcont(text)})));}
    else{fetch("https://api64.ipify.org").then((response)=>(response.text().then((text)=>{setcont(text)})));}
    return <p>{cont}</p>
}

function Component(props) {
    return (
        <div className="Component">
            <h2> {props.header} </h2>
            <div className="ComponentContent"> {props.children}</div>
        </div>
    );
}

export default App;
