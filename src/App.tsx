import React from 'react'
import RouterComponent from './route'
import { ToastProvider } from 'react-toast-notifications'
import {Provider} from 'unstated-x'
function App() {
  return (
    <div className="App">
        <Provider>
            <ToastProvider>
                <RouterComponent />
            </ToastProvider>
        </Provider>
    </div>
  )
}

export default App
