import Container from "./components/Container";
import classes from "./App.module.css";



function App() {
 return (
  
    <div className={classes.background}>
      
       <h1 className={classes.title}>Muhammed Roshan U N</h1>
       <h2 className={`${classes.title} ${classes.titlesub}`}>Web developer</h2>
    <Container/>
    </div>
   
  
 )

}

export default App;                                 
