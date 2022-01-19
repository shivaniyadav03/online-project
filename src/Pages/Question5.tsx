import React,{useState} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import CommonButton from './CommonButton';
import { FormControl,Radio,FormControlLabel,RadioGroup} from '@material-ui/core';
import '../Style/appStyle.css';
import { QuestionStatus } from './QuestionStatus';
import { useDispatch } from 'react-redux';
import {updateFifthQuestion} from '../actions';

type Location={
language:string
};
const Question5:React.FC=()=>{
  const dispatch = useDispatch();
  const [answer,setAnswer]=useState('');
    const navigate=useNavigate();
    const location=useLocation();
    const {language}=location.state as Location;
    const nextQuestion=()=>{
        navigate('/questionDetails',{state:{language:language}});
      }
    const finalResult=()=>{
      navigate('/finalResult',{state:{language:language}});
    }
    const previousQuestion=()=>{
    navigate('/question4',{state:{language:language}});
}

const getValue=(e:any)=>{
  setAnswer(e.target.value);
}
if(language==='Hindi'){
   return <div>
         <QuestionStatus language={language}/>
         <div>
           <FormControl component="fieldset">
             <RadioGroup
                defaultValue=""
                    name="radio-buttons-group"
                    onChange={getValue}
                     ><h4>5. वर्तमान में भारतीय संविधान में 22 राजभाषाएं वर्णित हैं?</h4> 
                        <FormControlLabel value="सत्य" control={<Radio />} label="सत्य" />
                        <FormControlLabel value="असत्य" control={<Radio />} label="असत्य" />
            </RadioGroup>
           </FormControl>  
          </div>
            <div className='commonButton'>
                <CommonButton color="primary" onClick={()=>{previousQuestion()}} title='Previous'/>
                <CommonButton color="primary" onClick={()=>{
                  dispatch(updateFifthQuestion({answer}))
                }} title='Submit'/>
                <CommonButton color="primary" onClick={()=>{finalResult()}} title="See Result"/>
                <CommonButton color="primary" onClick={()=>{nextQuestion()}} title='Go To First'/>
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
                     ><h4>5.  Four independent ________ testified to seeing him at the scene of the crime</h4> 
                        <FormControlLabel value="true" control={<Radio />} label="true" />
                        <FormControlLabel value="false" control={<Radio />} label="false" />
            </RadioGroup>
           </FormControl>  
          </div>
            <div className='commonButton'>
                <CommonButton color="primary" onClick={()=>{previousQuestion()}} title='Previous'/>
                <CommonButton color="primary" onClick={()=>{
                  dispatch(updateFifthQuestion({answer}))
                }} title='Submit'/>
                <CommonButton color="primary" onClick={()=>{finalResult()}} title="See Result"/>
                <CommonButton color="primary" onClick={()=>{nextQuestion()}} title='Go To First'/>
            </div>
        </div>
    );
  }
}
export default Question5;