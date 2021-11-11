import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const App = () => {

  const[Num,setNum] = useState(0);

  const numInc = () => {
    setNum(Num + 1);
  };
  const numDec = () => {
    if(Num > 0){
      setNum (Num - 1);
    } else {
      alert( "count reached zero");
      setNum(0);
    }
    
      
  };
  return (
     <div>
      <div className = "main_div">
      <div className = "center_div">
      
      <h1> {Num} </h1>
      <div className = "btn_div">

      <Button onClick = {numInc}  className= "btn_green">
     { /* adding tooltip from materity ui*/}
      <Tooltip title="Add">
      {/* adding add symbol from https://material-ui.com*/}
      <AddIcon />
      
      </Tooltip>
      </Button>
      {/* adding button from https://material-ui.com*/}
      <Button onClick = {numDec} className = "btn_red">
      <Tooltip title="Delete">
      <DeleteForeverIcon/> 
      </Tooltip>
      </Button>
      
      
      
      
      
      </div>
      </div>
      </div>
      </div>
  );
};




export default App;