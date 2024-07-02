import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootStore } from './modules/app/store';
import { TopBar } from './modules/shared';

function App() {
  
  return (
    <BrowserRouter>
     <Provider store={rootStore}>
      <TopBar/>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
  