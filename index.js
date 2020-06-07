import React from "react";
import ReactDOM from "react-dom";
//import App from "./components/App";
//import "bootstrap/dist/css/bootstrap.min.css";
const movie ={
title: "Dumb and Dumber",
vote_avarage: "9.5",
image: "https://i1.sndcdn.com/avatars-000292990928-8gmwbu-t500x500.jpg",
overview:
" Screwball comedy  it tells the story of  two dumb but well-meanin friends"
};

function Image(props) {
 // console.log("Image props", props)
  return (
    <img src={props.src} alt={props.alt}/>
  )
}
/*function MovieIteam (props){
console.log("MovieItem props", props)
const{data:{title, vote_avarage, image }}=props;
  return (
   <div>
    <Image src={image} alt={title}/>
    <p>{title}</p>
    <p>{vote_avarage}</p>
   
   </div> 

  );
}*/
class MovieIteam extends React.Component{
  render(){
    const {data: {title,vote_avarage, image}} = this.props;
    console.log(this);
  
  return (
    <div>
     <Image src={image} alt={title} />
     <p>{title}</p>
     <p>{vote_avarage}</p>
    
    </div> 
 
   );
  }  
}


function App(){
  return <div>
    <MovieIteam data={movie} />
  </div>
}


ReactDOM.render(<App />, document.getElementById("root"));
