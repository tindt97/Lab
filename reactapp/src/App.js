import { Component } from 'react/cjs/react.production.min';
import Main from './components/MainComponents';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {

  render () {
    return (
      <BrowserRouter>
      <div >
          <Main/>
       </div>
      </BrowserRouter>
    );
  }
}

export default App;
