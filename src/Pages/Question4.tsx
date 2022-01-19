import React,{useState} from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import CommonButton from './CommonButton';
import { FormControl,Radio,FormControlLabel,RadioGroup} from '@material-ui/core';
import '../Style/appStyle.css';
import { QuestionStatus } from './QuestionStatus';
import { useDispatch } from 'react-redux';
import {updateForthQuestion} from '../actions';

type Location={
    language:string
}
const Question4:React.FC=()=>{
  const dispatch = useDispatch();
  const [answer,setAnswer]=useState('');
    const navigate=useNavigate();
    const location=useLocation();
    const {language}=location.state as Location;

    const getValue=(e:any)=>{
         setAnswer(e.target.value);
    }
    const nextQuestion=()=>{
        navigate('/question5',{state:{language:language}});
      }
    const previousQuestion=()=>{
    navigate('/question3',{state:{language:language}});
   }
   if(language==='Hindi')
   {
     return(
           <div>
               <QuestionStatus language={language}/>
               <div>
          <FormControl component="fieldset">
            <RadioGroup
                defaultValue=""
                    name="radio-buttons-group"
                    onChange={getValue}
                     ><h4>4. भोजन बहुत ————— था |</h4> 
                        <FormControlLabel value="सुंदर" control={<Radio />} label="सुंदर" />
                        <FormControlLabel value="स्वादिष्ट" control={<Radio />} label="स्वादिष्ट" />
                        <FormControlLabel value="पुरानी" control={<Radio />} label=" पुरानी" />
                        <FormControlLabel value="बड़ा" control={<Radio />} label=" बड़ा" />
            </RadioGroup>
           </FormControl>  
          </div>
            <div className='commonButton'>
                <CommonButton color="primary" onClick={()=>{previousQuestion()}} title='Previous'/>
                <CommonButton color="primary" onClick={()=>{
                  dispatch(updateForthQuestion({answer}))
                }} title='Submit'/>
                <CommonButton color="primary" onClick={()=>{nextQuestion()}} title='Next'/>
            </div>
           </div>
       );
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
                     ><h4>4. Once upon a time there _________ (live) a man called Damocles</h4> 
                        <FormControlLabel value="lived" control={<Radio />} label="lived" />
                        <FormControlLabel value="was lived" control={<Radio />} label="was lived" />
                        <FormControlLabel value="an lived" control={<Radio />} label="an lived" />
                        <FormControlLabel value="live" control={<Radio />} label="live" />
            </RadioGroup>
           </FormControl>  
          </div>
            <div className='commonButton'>
                <CommonButton color="primary" onClick={()=>{previousQuestion()}} title='Previous'/>
                <CommonButton color="primary" onClick={()=>{
                  dispatch(updateForthQuestion({answer}))
                }} title='Submit'/>
                <CommonButton color="primary" onClick={()=>{nextQuestion()}} title='Next'/>
            </div>
        </div>
    );
   }
}
export default Question4;