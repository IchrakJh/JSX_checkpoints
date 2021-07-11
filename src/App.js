import logo from './logo.svg';
import './App.css';
import './style.css';
import imageSrc from "./imageInSrc.jpg"


function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">My name is Ichrak</h1>
      <br/>
      <img src="/imageInPublic.jpg" alt="imageInPublic"/>
      <br/>
      <img src={imageSrc} alt ='imageInSrc'/> 
      <br/>
    </div>
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4"/>
    </video>
    
  </div>
);
}

export default App;
