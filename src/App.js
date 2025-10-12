import './App.scss';
import { Header, SocialMedia } from './components';
import { Summary } from './containers';

const App =() => {
  return (
    <div className="app">
      <SocialMedia />
      <Header />
      <Summary />
    </div>
  );
}

export default App;