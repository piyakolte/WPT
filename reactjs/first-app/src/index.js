import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
//pages
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import { Product } from './pages/Product';
import { Calculator } from './pages/Calculator';
import { Counter, CounterCallBack, CounterMemo } from './pages/Counter';
import { CounterReducer } from './pages/Reducer/CounterReducer';
import { EvenOddReducer } from './pages/Reducer/EvenOddReducer';
import { ReduxProvider } from './pages/reduxExample/ReduxProvider';
import { Provider } from 'react-redux';
import {loginStore} from "./pages/reduxExample/login/LoginStore"
import { UseRefExample } from './pages/UseRefExample';
//pages
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={loginStore}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product' element={<Product />} />
                <Route path='/calc' element={<Calculator />} />
                <Route path='/reducercounter' element={<CounterReducer />} />
                <Route path='/reducereo' element={<EvenOddReducer />} />
                {/* <Route path='/counter' element={<Counter/>}/> */}
                <Route path='/counter' element={<CounterCallBack />} />
                {/* <Route path='/redux' element={<ReduxProvider />} /> */}
                <Route path='/ref' element={<UseRefExample />} />
                {/* <Route path='/counter' element={<CounterMemo/>}/> */}

            </Routes>
        </BrowserRouter>
    </Provider>
);

reportWebVitals();
