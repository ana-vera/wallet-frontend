import './App.css'
import { Navtabs } from './components'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import RouterIndex from './routes/Index'

function App () {
  return (
    <>
      <div className='container lol'>
        <Navtabs />
        <RouterIndex />
      </div>
    </>
  )
}

export default App
