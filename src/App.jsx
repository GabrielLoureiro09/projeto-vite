import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpression'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'
import FinalChallenge from './components/FinalChallenge'
import Calculator from './components/Calculator'

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <MyComponent/>
      <Events/>
      <Challenge/>
      <FinalChallenge x={5} y={7}/>
      <FinalChallenge x={10} y={20}/>
      <FinalChallenge x={3} y={9}/>
      <Calculator/>
    </div>
  )
}

export default App