import React,{useState} from 'react';
import {Radio} from '@material-ui/core';
import { useNavigate,useLocation } from 'react-router-dom';
import CommonButton from './CommonButton';
import '../Style/appStyle.css';
import { QuestionStatus } from './QuestionStatus';
import { useDispatch } from 'react-redux';
import {updateThirdQuestion} from '../actions';

type Location={
language:string
};
const Question3:React.FC=()=>{
    const [answer1,setAnswer1]=useState('');
    const [answer2,setAnswer2]=useState('');
    const [answer3,setAnswer3]=useState('');
    const [answer4,setAnswer4]=useState('');
    
    const getValue1=(e:any)=>{
        setAnswer1(e.target.value);
    }
    const getValue2=(e:any)=>{
        setAnswer2(e.target.value);
    }
    const getValue3=(e:any)=>{
        setAnswer3(e.target.value);
    }
    const getValue4=(e:any)=>{
        setAnswer4(e.target.value);
    }
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const location=useLocation();
    const {language}=location.state as Location;
    const nextQuestion=()=>{
        navigate('/question4',{state:{language:language}});
      }
    const previousQuestion=()=>{
    navigate('/question2',{state:{language:language}});
   }
    if(language==='Hindi'){
        return(
            <div>
                <QuestionStatus language={language}/>
                <div>
                    <p><h4>3. अर्थशास्त्र का जनक किसे कहा जाता है?</h4></p>
                    <p><Radio value="कौटिल्य" onChange={getValue1}/>कौटिल्य</p>
                    <p><Radio value="एडम स्मिथ" onChange={getValue2}/>एडम स्मिथ</p>
                    <p><Radio value="एडम स्मिथ FRSA" onChange={getValue3}/>एडम स्मिथ FRSA</p>
                    <p><Radio value="डेविड रिकार्डो" onChange={getValue4}/>डेविड रिकार्डो</p>
                </div>
                <div className='commonButton'>
                    <CommonButton color="primary" onClick={()=>{previousQuestion()}} title='Previous'/>
                    <CommonButton color="primary" onClick={()=>{
                        const answer: string[] = [];
                        answer1 && answer.push(answer1)
                        answer2 && answer.push(answer2)
                        answer3 && answer.push(answer3)
                        answer4 && answer.push(answer4)
                        dispatch(updateThirdQuestion({answer}))
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
                    <p><h4>3. In approximately how many countries does the English language have official or special status?</h4></p>
                    <p><Radio value="10" onChange={getValue1}/>10</p>
                    <p><Radio value="30-35" onChange={getValue2}/>30-35</p>
                    <p><Radio value="35" onChange={getValue3}/>35</p>
                    <p><Radio value="50" onChange={getValue4}/>50</p>
                </div>
                <div className='commonButton'>
                    <CommonButton color="primary" onClick={()=>{previousQuestion()}} title='Previous'/>
                    <CommonButton color="primary" onClick={()=>{
                        const answer: string[] = [];
                        answer1 && answer.push(answer1)
                        answer2 && answer.push(answer2)
                        answer3 && answer.push(answer3)
                        answer4 && answer.push(answer4)
                        dispatch(updateThirdQuestion({answer}))
                    }} title='Submit'/>
                    <CommonButton color="primary" onClick={()=>{nextQuestion()}} title='Next'/>
                </div>
        </div>
    );
   }
}
export default Question3;