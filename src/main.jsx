import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Rendering from './Rendering.jsx'
import Buttons from './Buttons.jsx'
import Props from './Props.jsx'
import FullStack from './FullStack.jsx'
import Counter from './Counter.jsx'
import Complex from './Complex.jsx'
import Arrays from './Arrays.jsx'
import Conditional from './Conditional.jsx'
import Unicafe from './Unicafe.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Conditional /> */}
    <Unicafe />
  </StrictMode>,
)
