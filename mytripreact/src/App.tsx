import React from 'react';
import Header from './components/header';
import { useAuth0 } from './services/react-auth0-spa';
import Loading from './components/Loading';
import ProgressBar from './components/progressBar';
// import 'bootstrap/dist/css/bootstrap.css';

const divstyle = {
  backgroundColor: "#e7e5e4"
}

const App:  React.FC=(props: any)=> {

  const { loading } = useAuth0();

  if (loading) {
    return <ProgressBar />
  }

    return (
      <div className='App' style={divstyle}>
        <div>
          {/* <Header/> */}
          {props.children}
        </div>

      </div>
    );
  
}

export default App;