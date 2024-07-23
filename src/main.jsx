import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp, CounterWithCustomHook } from './01-useState'
import { SimpleForm, FormWithCustomHooks } from './02-useEffect';
import { MultipleCustomHooks } from './03-examples';
import { FocusScreen } from './04-useRef';
import { Layout } from './05-useLayoutEffect';
import { Memorize, MemoHook } from './06-memos'
import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <HooksApp />
    // <CounterApp/>
    // <CounterWithCustomHook/>
    // <SimpleForm />
    // <FormWithCustomHooks />
    // <MultipleCustomHooks />
    // <FocusScreen />
    // <Layout />
    // <Memorize />
    // <MemoHook />
    // <CallbackHook />
    //<Padre />
    // <TodoApp />
    <BrowserRouter> 
      <MainApp />
    </BrowserRouter>
  // </React.StrictMode>,
);