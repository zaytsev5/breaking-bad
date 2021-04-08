import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListCharacters from './components/ListCharacters';
import EditVolume from './components/EditVolume'


class App extends Component {
  componentDidMount(){
    console.log("CPD is run...");
    window.addEventListener('scroll', ()=>{
     // console.log("scrolling...."+new Date().getSeconds());
      let  bottom = window.pageYOffset
      const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

      //console.log(height);
      if(bottom == height){
        alert("There is something for loading more!")
      }
    
    });
  }
  render() {
    return (
      <div className="App">
        {/* <ListCharacters /> */}
        <EditVolume />
      </div>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <ListCharacters />
//     </div>
//   );
// }

// export default App;
