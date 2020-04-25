import React from 'react'
import RouterComponent from './route'
import { ToastProvider } from 'react-toast-notifications'
function App() {
  return (
    <div className="App">
        <ToastProvider>
      <RouterComponent />
        </ToastProvider>
    </div>
  )
}

export default App
