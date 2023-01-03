import React, {useState} from 'react';
import FirstTask from './pages/FirstTask';
import SecondTask from './pages/SecondTask';

function App() {
  const [page, setPage] = useState('first');

  return (
    <div className="app">
        <div className="app-head">
            <a className={page === 'first' ? 'active' : ''}
               onClick={() => setPage('first')}>First task</a>
            <a className={page === 'second' ? 'active' : ''}
               onClick={() => setPage('second')}>Second task</a>
        </div>
        <div className="app-body">
            {page === 'first' ? <FirstTask /> : <SecondTask />}
        </div>
    </div>
  );
}

export default App;
