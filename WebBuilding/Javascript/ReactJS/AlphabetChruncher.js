//Alphabet chruncher, simple ReactJS app

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');



//this the main class, it pulls alphabet variable
//pulls - counting UP and counting DOWN and a type to choose to be
  class Alphabet extends React.Component{
    constructor(){      //simple constructor
      super();
      this.state = {
        count: 0,
        typeToBe: 'none',
        countTwo: alphabet.length
      };
    }
    
    pushCountUp(){      //alphabet going up, +1
      this.setState((previous)=>{
        return {count: previous.count+1}
      });
      console.log(alphabet[this.state.count]);
    }

    random(){           //random return of alphabet
      this.setState((previous)=>{
        return {count: Math.floor(Math.random() * Math.floor(24))}
      });
      console.log(alphabet[this.state.count]);
    }

    type(){               //logic function to determine path to take 
      if(this.props.typeToBe=="count"){
        this.pushCountUp();
      }
      if(this.props.typeToBe=="backwards"){
        this.setState((previous)=>{
          return {countTwo: previous.countTwo - 3}
        });
        console.log('backwardsAlphabet' , this.state.countTwo);
      }

      if(this.props.typeToBe=="random"){
        this.random();
      }
      
    }
   render(){        //rendering button
      return(
        <div>
                  
            <button onClick={() => 
              this.type()}>Press Me</button>
        </div>

      )
    }
  }



  class Buttons extends React.Component{       //bigger basically a <div> wrapper just called to house the buttons
    render(){
      return(
        <div>
         <Alphabet typeToBe="count" alphabet={alphabet}/>
         <Alphabet typeToBe="backwards" alphabet={alphabet}/>
         <Alphabet typeToBe="random" alalphabet={alphabet} type={'backwards'}/>
        </div>
      )
    }
  }


  ReactDOM.render(<Buttons />, document.getElementById('button'));
