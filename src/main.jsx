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
    <MemoHook />
  // </React.StrictMode>,
);
