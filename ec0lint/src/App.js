import MainPage from './MainPage';
import { banner } from './text';

function App() {
  return (
    <span className="mainContainer">
      <div>
        <h1 className="logo">{banner.logo}</h1>
        <span className="logo">
          <h6 className="intro">{banner.goal}</h6>
          <h2 className="introEc0lint">{banner.name}</h2>
        </span>
      </div>
      <MainPage/>
    </span>
  );
}

export default App;
