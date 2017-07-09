import  React  from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar'

const API_KEY = "AIzaSyAO_kTmL36xOyMjgd_Yq1Ne8Gu5HtwuNSE";

const App = () => {
  return( <div>
            <SearchBar />
          </div>
        );
}

ReactDOM.render(<App />, document.querySelector('.container'));
