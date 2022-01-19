import React, { useState } from 'react';
import { FormControl,Radio,FormControlLabel,RadioGroup} from '@material-ui/core';
import {useNavigate,useLocation} from 'react-router-dom';
import CommonButton from './CommonButton';
import '../Style/appStyle.css';
import { QuestionStatus } from './QuestionStatus';
import { useDispatch } from 'react-redux';
import {updateSecondQuestion} from '../actions';


type Location={
    language:string
    };
const Question2:React.FC=()=>{
  const dispatch = useDispatch();
  const [answer,setAnswer]=useState('');
    const navigate=useNavigate();
    const location=useLocation();
    const {language}=location.state as Location;

    const getValue=(e:any)=>{
     setAnswer(e.target.value);
    }
    const nextQuestion=()=>{
        navigate('/question3',{state:{language:language}});
      }
const previousQuestion=()=>{
    navigate('/questionDetails',{state:{language:language}});
}
   
if(language==='Hindi'){
    return (
      <div>
        <QuestionStatus language={language}/>
           <div>
             <FormControl component="fieldset">
                 <RadioGroup
                        defaultValue=""
                        name="radio-buttons-group"
                        onChange={getValue}
                     ><h4> 2. हिन्दी में मूलतः वर्णों की संख्या कित्निहाई ?</h4> 
                        <FormControlLabel value="50" control={<Radio />} label="50" />
                        <FormControlLabel value="51" control={<Radio />} label="51" />
                        <FormControlLabel value="52" control={<Radio />} label="52" />
                        <FormControlLabel value=" 53" control={<Radio />} label="53" />
               </RadioGroup>
            </FormControl>  
          </div>
           <div className='commonButton'>
             <CommonButton color="primary" onClick={()=>{previousQuestion()}} title='Previous'/>
             <CommonButton color="primary" onClick={()=>{
               dispatch(updateSecondQuestion({answer}))
             }} title='Submit'/>
             <CommonButton color="primary" onClick={nextQuestion} title='Next'/>
           </div>
      </div>
    );
}   else{
    return(
        <div>
          <QuestionStatus language={language}/>
           <div>
          <FormControl component="fieldset">
                 <RadioGroup
                        defaultValue=""
                        name="radio-buttons-group"
                        onChange={getValue}
                     ><h4> 2. Which country contains the largest English-speaking population in the world?</h4> 
                        <FormControlLabel value="England" control={<Radio />} label="England" />
                        <FormControlLabel value="United States" control={<Radio />} label="United States" />
                        <FormControlLabel value="China" control={<Radio />} label="China" />
                        <FormControlLabel value="Australia" control={<Radio />} label=" Australia" />
                        <FormControlLabel value="India" control={<Radio />} label="India" />
               </RadioGroup>
            </FormControl>  
          </div>
           <div className='commonButton'>
             <CommonButton color="primary" onClick={()=>{previousQuestion()}} title='Previous'/>
             <CommonButton color="primary" onClick={()=>{
               dispatch(updateSecondQuestion({answer}))
             }} title='Submit'/>
             <CommonButton color="primary" onClick={nextQuestion} title='Next'/>
           </div>
        </div>
    );
}
}
export default Question2;