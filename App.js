import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity,TextInput} from 'react-native';

const FinalScreen=(props)=>{
  return(
    <View>
      <Text style={{fontSize:16,fontWeight:'bold'}}>Actual Number:{props.getgamedetail[1]}</Text>
      <Text style={{fontSize:16,fontWeight:'bold'}}>No of Hint Used:{props.getgamedetail[2]}</Text>
      <Text style={{fontSize:16,fontWeight:'bold'}}>No of Correct Guess:{props.getgamedetail[3]}</Text>
      <Text style={{fontSize:16,fontWeight:'bold'}}>Score:{props.getgamedetail[0]}</Text>
      <Text style={{fontSize:16,fontWeight:'bold'}}>Round:{props.giveround}</Text>
      <Text>{'\n'}</Text>
      <TouchableOpacity
        style={{alignItems:"center",padding:10,backgroundColor:'#0067A5',borderRadius: 50}}
        onPress={()=>{props.use(0)}}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>FINSIH</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
        <TouchableOpacity
        style={{alignItems:"center",padding:10,backgroundColor:'#0067A5',borderRadius: 50}}
        onPress={()=>{
          props.setround((props.giveround)+1);
          props.use(1)}}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>PLAY AGAIN</Text>
        </TouchableOpacity>
    </View>

  );

}

const GameScreen=(props)=>{
  const [getscore,setscore]=React.useState(0);
  const[getlife,setlife]=React.useState(5);
  const[getround,setround]=React.useState(props.giveround);
  const[getvalue,setvalue]=React.useState(null);
  const [gethint,sethint]=React.useState(0);
  const [getGuessingNo,setGuessingNo]=React.useState(Math.floor(Math.random()*100));
  const [getcorrectguess,setcorrectguess]=React.useState(0);
  console.log(getGuessingNo);
  console.log(gethint);

  const gamedetails=(getscore,getround,getGuessingNo,gethint,getcorrectguess)=>{
    var details=[getscore,getGuessingNo,gethint,getcorrectguess];
    props.setround(getround);
    
    props.setgamedetail(details);

  }
  
  if(getlife==0){
    gamedetails(getscore,getround,getGuessingNo,gethint,getcorrectguess);
  props.use(2);
  return(
    <View></View>
  )
  
}else{
  return(
    <View>
      <Text style={{fontSize:17,fontWeight:'bold',margin:10}}>You have to Guess a number{'\n'}0 and 100</Text>
      <Text style={{fontSize:14,fontWeight:'bold',margin:10}} >Score:{getscore}{'\t'}Attempts:{getlife}{'\t'}Round:{getround}</Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{borderWidth:1,padding:10,width:170,margin:10}}>{getvalue}</Text>
      <TouchableOpacity
       style={{alignItems:"center",justifyContent:"center",padding:7,backgroundColor:'#0067A5',borderRadius: 50,borderWidth:1,}}
        onPress={()=>{
          if(getvalue==null){
            alert("You guess nothing now");
          }
          else{
            setvalue(getvalue.toString().slice(0,-1))
          }
        }}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>Clear</Text>
        </TouchableOpacity>
      </View>
      
      

      <View style={{flexDirection:'row',margin:10}}>

        
      <TouchableOpacity
        style={styles.circleButton}
        onPress={()=>{
          if(getvalue==null){
            setvalue(1);
          }
          else if(getvalue>10){
            alert("Guess number can not be greater than 100");
          }
          else{
            setvalue(getvalue+'1');
          }
        }}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        style={styles.circleButton}
        onPress={()=>{
          if(getvalue==null){
            setvalue(2);
          }
          else if(getvalue>10){
            alert("Guess number can not be greater than 100");
          }
          else{
            setvalue(getvalue+'2');
          }
        }}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>2</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
       style={styles.circleButton}
       onPress={()=>{
        if(getvalue==null){
          setvalue(3);
        }
        else if(getvalue>10){
          alert("Guess number can not be greater than 100");
        }
        else{
          setvalue(getvalue+'3');
        }
      }}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>3</Text>
        </TouchableOpacity>

      </View>
      
      <View style={{flexDirection:'row',margin:10}}>
      <TouchableOpacity
        style={styles.circleButton}
        onPress={()=>{
          if(getvalue==null){
            setvalue(4);
          }
          else if(getvalue>10){
            alert("Guess number can not be greater than 100");
          }
          else{
            setvalue(getvalue+'4');
          }
        }}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>4</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        style={styles.circleButton}
        onPress={()=>{
          if(getvalue==null){
            setvalue(5);
          }
          else if(getvalue>10){
            alert("Guess number can not be greater than 100");
          }
          else{
            setvalue(getvalue+'5');
          }
        }}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>5</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
       style={styles.circleButton}
       onPress={()=>{
        if(getvalue==null){
          setvalue(6);
        }
        else if(getvalue>10){
          alert("Guess number can not be greater than 100");
        }
        else{
          setvalue(getvalue+'6');
        }
      }}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>6</Text>
        </TouchableOpacity>

      </View>
     
      <View style={{flexDirection:'row',margin:10}}>
      <TouchableOpacity
        style={styles.circleButton}
        onPress={()=>{
          if(getvalue==null){
            setvalue(7);
          }
          else if(getvalue>10){
            alert("Guess number can not be greater than 100");
          }
          else{
            setvalue(getvalue+'7');
          }
        }}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>7</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        style={styles.circleButton}
        onPress={()=>{
          if(getvalue==null){
            setvalue(8);
          }
          else if(getvalue>10){
            alert("Guess number can not be greater than 100");
          }
          else{
            setvalue(getvalue+'8');
          }
        }}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>8</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
       style={styles.circleButton}
       onPress={()=>{
        if(getvalue==null){
          setvalue(9);
        }
        else if(getvalue>10){
          alert("Guess number can not be greater than 100");
        }
        else{
          setvalue(getvalue+'9');
        }
      }}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>9</Text>
        </TouchableOpacity>

      </View>

<View style={{flexDirection:'row',margin:10}}>
  <Text>{'\t'} {'   \t'}</Text>
<TouchableOpacity
         style={{width: 140,alignItems:"center",padding:10,backgroundColor:'#0067A5',borderRadius: 50,borderWidth:1}}
        onPress={()=>{
          if(getvalue==null){
            setvalue(0);
          }
          else if(getvalue>10){
            alert("Guess number can not be greater than 100");
          }
          else{
            setvalue(getvalue+'0');
          }
        }}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>0</Text>
        </TouchableOpacity>
        </View>
        

<View style={{flexDirection:'row',margin:10}}>
      <TouchableOpacity
       style={{width: 120,alignItems:"center",padding:10,backgroundColor:'#0067A5',borderRadius: 50,borderWidth:1}}
        onPress={()=>{
          if(getvalue==null){
            alert("You Guessed nothing!!!");
          }
          else if(getvalue<1){
            alert("You Guessed nothing!!!");
          }
          else{
            
            

            if(parseInt(getvalue)==getGuessingNo){
              setcorrectguess(getcorrectguess+1);
              alert("Congratulation!!! You guessed the number ");
              setscore(getscore+10);
              setvalue(null);
              setlife(getlife-1);
              setGuessingNo(Math.floor(Math.random()*100));
            }
            else{
              alert("Wrong Guess!!! :/");
              setlife(getlife-1);
              
              setvalue(null);
            }
          }
          }
          
          
        }
        >
          <Text style={{color:"white",fontWeight:'bold'}}>Done</Text>
        </TouchableOpacity>
        <Text>{'\t'}</Text>
        <TouchableOpacity
       style={{width: 120,alignItems:"center",padding:10,backgroundColor:'#0067A5',borderRadius: 50,borderWidth:1}}
        onPress={()=>{
          if(getvalue==null){
            alert("You Guessed nothing!!!");
          }
          else if(getvalue<1){
            alert("You Guessed nothing!!!");
          }
          else{
            sethint(gethint+1);
              
            if(getGuessingNo>getvalue){
              alert("Your value is smaller than Guess value");
              setscore(getscore-2);
              
            }
            else if(getGuessingNo<getvalue){
              alert("Your value is greater than Guess value");
              setscore(getscore-2);
              

            }else{
              alert("Congratulation!!! You guessed the number ");
              setscore(getscore-2);
              
            }
            
        }
        }}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>Hint</Text>
        </TouchableOpacity>
        
        
      </View>
      
    </View>
    
    
    
  )}
}

const StartScreen=(props)=>{
  return(
    <View>
        <Text style={{fontSize:30,fontWeight:'bold'}}>Welcome to Guess Game{'\n'}{'\n'}</Text>
        <TouchableOpacity
        style={{alignItems:"center",padding:10,backgroundColor:'#0067A5',borderRadius: 50}}
        onPress={()=>{props.use(1)}}
        >
          <Text style={{color:"white",fontWeight:'bold'}}>START GAME</Text>
        </TouchableOpacity>
    </View>
  )
}


export default function App() {
  const [getcondition,setcondition]=React.useState(0);
  const [getgamedetail,setgamedetail]=React.useState([]);
  const [getround,setround]=React.useState(1);

  const Screenchangecond=(cond)=>{
    if(cond==0){
      setcondition(0);
    }
    else if(cond==1){
      setcondition(1);
    }
    else{
      setcondition(2);
    }
  }
 
  return (
    <View style={styles.container}>
      { getcondition==0 && <StartScreen use={Screenchangecond}/>}
      { getcondition==1 && <GameScreen setgamedetail={setgamedetail} setround={setround} giveround={getround} use={Screenchangecond }/>}
      { getcondition==2 && <FinalScreen getgamedetail={getgamedetail} use={Screenchangecond}  setround={setround} giveround={getround}/>}
     
      
      
      
     

    </View>
  );
    
    
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleButton:{
    width: 60,height: 60,justifyContent: 'center',alignItems: 'center',padding: 10,borderRadius: 100,borderWidth:1,backgroundColor: '#0067A5',margin:10,
  }
});
