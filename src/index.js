import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes, A } from 'hookrouter';
import routes from "./routes/routes";

export function App() {
    const routeResult = useRoutes(routes);
    return (
        <>
            <ul className="nav">
                <li className="nav-item"><A className="nav-link" href="/">Main</A></li>
                <li className="nav-item"><A className="nav-link" href="/pizzas">Pizzas</A></li>
            </ul>
            
            
            {routeResult}
        </>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
