import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'
import Appp from './components/Appp'
import './css/toDo.css'
// import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Appp />
  </React.StrictMode>
)

// reportWebVitals()

// ReactDOM.render(<App />, document.getElementById('root'))
