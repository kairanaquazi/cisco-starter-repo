import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1> Cisco Sextant</h1>
            </header>
            <div className="container">
                <Component header="Test123">
                    <a href="https://google.com">Click me!</a>
                </Component>
                <Component header="Lorem Ipsum">
                    <a href="https://google.com">Do not click me!</a>
                </Component>
                <Component header="Lorem Ipsum">
                    <a href="https://google.com">Do not click me!</a>
                </Component>
                <Component header="Lorem Ipsum">
                    <a href="https://google.com">Do not click me!</a>
                </Component>
                <Component header="Lorem Ipsum">
                    <a href="https://google.com">Do not click me!</a>
                </Component>
                <Component header="Lorem Ipsum">
                    <a href="https://google.com">Do not click me!</a>
                </Component>
            </div>
        </div>
    );
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
