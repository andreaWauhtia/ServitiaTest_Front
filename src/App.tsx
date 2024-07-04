import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootStore } from './modules/app/store';
import { NotificationHandler, TopBar } from './modules/shared';
import { Pages } from './modules/app/components/Pages';
import './context/app/AxiosConfig';

function App() {

  return (
    <BrowserRouter>
     <Provider store={rootStore}>
      <TopBar/>
      <NotificationHandler />
      <Pages />
    </Provider>
    </BrowserRouter>
  );
}

export default App;
  