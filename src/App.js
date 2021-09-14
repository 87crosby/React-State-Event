import React from 'react';
import './App.css';

import DataComponent from './components/DataComponent';

function App() {
  return (
    <div className="App">
      <DataComponent firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black"/>
      <DataComponent firstName="John" lastName="Smith" age={ 88 } hairColor="Brown"/>
      <DataComponent firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Brown"/>
      <DataComponent firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown"/>
    </div>
  );
}

export default App;
