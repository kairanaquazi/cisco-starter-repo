import './App.css';
import { useState } from 'react';
var W3CWebSocket = require('websocket').w3cwebsocket;
var client = new W3CWebSocket("ws://localhost:55455");

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
                <Component header="Ping">
                    <PingComponent/>
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


function PingComponent(props){
    const [ping, setping] = useState("???ms");
    const cnt = 100;
    let vals= [];
    vals[cnt-1]=0;
    client.onmessage = function(e) {
        if (typeof e.data === 'string') {
            vals.push(new Date(Date.now()).getTime()-Number(e.data));
            vals.shift();
            setping(vals.reduce((a, b)=>a+b)/cnt+"ms");
        }
    };
    return <p>{ping}</p>
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
