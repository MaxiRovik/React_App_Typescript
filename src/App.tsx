import React from 'react';
import Card, {CardVariant} from "./components/Card";

function App() {
  return (
    <div >
      <Card width='200px' height ='200px'
            variant={CardVariant.outlined}
            onClick={()=>{console.log('click')}}
      >
         <button> BUTTON </button>
    </Card>
    </div>
  );
}

export default App;
