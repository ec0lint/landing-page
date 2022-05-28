import Introduction from './Introduction';
import { banner } from './text';

function App() {
  return (
    <span className="main-container">
      <div>
        <h1 className="logo">{banner.logo}</h1>
        <span className="logo">
          <h6 className="intro">{banner.goal}</h6>
          <h2 className="intro-ec0lint">{banner.name}</h2>
        </span>
      </div>
      <Introduction/>
    </span>
  );
}

export default App;
