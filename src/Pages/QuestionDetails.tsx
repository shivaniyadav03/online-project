import React, { useState } from 'react';
import { FormControl,Radio,FormControlLabel,RadioGroup} from '@material-ui/core';
import CommonButton from './CommonButton';
import '../Style/appStyle.css';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import {QuestionStatus} from './QuestionStatus';
import {updateFirstQuestion} from '../actions';
import { useDispatch } from "react-redux";

type Location={
language:string
};

const HindiQuestionDetails:React.FC=()=>{
    const [answer,setAnswer]=useState('');
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const location=useLocation();
    const {language}=location.state as Location;

    const getValue=(e:any)=>{
       setAnswer(e.target.value);
    }
     const nextQuestion=()=>{
       navigate('/question2',{state:{language:language}});
     }
    if(language === 'Hindi'){
      return  <div>
      <QuestionStatus language={language}/>
      <div>            
      <FormControl component="fieldset">
            <RadioGroup
                    defaultValue=""
                    name="radio-buttons-group"
                    onChange={getValue}
                ><h4> 1. निम्न में से कौन-सा घोष वर्ण है ?</h4> 
                    <FormControlLabel value="थ" control={<Radio />} label="थ" />
                    <FormControlLabel value="च" control={<Radio />} label="च" />
                    <FormControlLabel value="ख" control={<Radio />} label="ख" />
                    <FormControlLabel value=" म" control={<Radio />} label="म" />
          </RadioGroup>
        </FormControl>         
      </div>
    <div className='commonButton'>
        <CommonButton color="primary" onClick={()=>{
          dispatch(updateFirstQuestion({answer}))
        }} title='Submit'/>
        <CommonButton color="primary" onClick={nextQuestion} title='Next'/>
    </div>
    </div>
    }
   else{
    return(
      <div>
        <QuestionStatus language={language}/>
      <div>            
      <FormControl component="fieldset">
            <RadioGroup
                    defaultValue=""
                    name="radio-buttons-group"
                    onChange={getValue}
                ><h4>1. Roughly what proportion of the world's population is fluent or competent in English?</h4> 
                    <FormControlLabel value="one person in 1,000" control={<Radio />} label="one person in 1,000" />
                    <FormControlLabel value=" one in a 100" control={<Radio />} label=" one in a 100" />
                    <FormControlLabel value="one in 10" control={<Radio />} label="one in 10" />
                    <FormControlLabel value=" one in four" control={<Radio />} label=" one in four" />
          </RadioGroup>
        </FormControl>         
      </div>
    <div className='commonButton'>
        <CommonButton color="primary" onClick={()=>{
          dispatch(updateFirstQuestion({answer}))
        }} title='Submit'/>
        <CommonButton color="primary" onClick={nextQuestion} title='Next'/>
    </div>
      </div>
     );
   }
}
export default HindiQuestionDetails;