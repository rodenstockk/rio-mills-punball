
import React from 'react';
import './Main.scss'
import axios from 'axios';
import song from '../sound/song.mp3';
import cat from '../sound/cat.png';
import chloe from '../sound/chloe.png';
import dog from '../sound/dog.png';
import taco from '../sound/taco.png';
const API_URL = 'http://localhost:8080';


class Main extends React.Component {
    state = {
      answerData: [],
      title: "IT'S TIME FOR PUN",
      isImage: false,
    }


    firstClickHandler = (e) => {

    
      // response = responses[Math.floor(Math.random() * responses.length)];
      // document.getElementById('outputDiv').innerHTML = response;
      // e.preventDefault();

      axios
      .get(`${API_URL}/`)
      .then(response => {
       
        let randomeResponse = response.data[Math.floor(Math.random() * response.data.length)]
        
        this.setState({
          answerData: randomeResponse,
          title: randomeResponse.image,
          isImage: true, 
        });
      })
      .catch(err => {
        console.log(err)
      }) 
  
        // e.target.reset();
    }



    secondClickHandler = (e) => {

      // response = responses[Math.floor(Math.random() * responses.length)];
      // document.getElementById('outputDiv').innerHTML = response;
      // e.preventDefault();
      // console.log(this.state.answerData)
      console.log(this.state.answerData)
      this.setState({
        title: this.state.answerData.answer,
        isImage:false,
      });
    

  
      //   e.target.reset();
    }

      // everytime we set state it re-renders
      render() {

        let display = '' 
        if ( !this.state.isImage ) {
          display = <p id="answer">{this.state.title}</p>
        } else {
          display = <img id="img" src={this.state.title} alt="magic" onClick={this.secondClickHandler}/>
        } 

       
        return (
            // <>
            //   <main className = "magic">

            //     <h1 className = "magic__title">magic <span className="magic__eight">8</span> ball </h1>
            //     <div className = "magic__question">
            //       <h2>ask me anything</h2>
            //       <div className="magic__question-box">

            //       </div>
            //     </div>
            //     <div className = "magic__container">
            //       <div>{display}</div>
            //       <div className="magic__button">
				    //         <button className="magic__press" onClick={this.firstClickHandler}>shake</button>
			      //       </div>
            //     </div>
            //     <div>

            //     </div>
            //   </main>
            // </>

                <>
                
                <main className = "magic rainbow">
                  
                    
                <img className = "pun" src={cat}/>
                  <audio autoPlay="true" loop="tru" >
                    <source src={song}></source>
                  </audio>
                  <h1 className = "magic__title">magic <span className="magic__eight">PUN</span> ball </h1>
                  
                  
                  <div className = "magic__container shake">
                    <div className = "magic__container-ball">
                    <div>{display}</div>s
                    </div>
                  </div>
                  <div className="magic__button">
                    <button className="magic__button-press" onClick={this.firstClickHandler}>Who wants to tell me a joke?</button>
                  </div>
                </main>
                </>
          )
      };  
    }
  
  
    
  export default Main;

