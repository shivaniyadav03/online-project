import React from "react";
import {  useSelector } from "react-redux";
import CommonButton from "./CommonButton";
import { useNavigate } from 'react-router';

interface IQuestionStatus {
    language?: string
}

export const QuestionStatus:React.FC<IQuestionStatus>=({language})=>{
  const first: any = useSelector((state: any) => state.first);
  const second: any = useSelector((state: any) => state.second);
  const third: any = useSelector((state: any) => state.third);
  const forth: any = useSelector((state: any) => state.forth);
  const fifth: any = useSelector((state: any) => state.fifth);
  const navigate=useNavigate();
  return (
    <div className='commonButton'>
        <CommonButton color={first ? "secondary" : 'default'} onClick={()=>{navigate('/questionDetails',{state:{language:language}})}} title='1'/>
        <CommonButton color={second ? "secondary" : 'default'} onClick={()=>{navigate('/question2',{state:{language:language}})}} title='2'/>
        <CommonButton color={third ? "secondary" : 'default'} onClick={()=>{navigate('/question3',{state:{language:language}})}} title='3'/>
        <CommonButton color={forth ? "secondary" : 'default'} onClick={()=>{navigate('/question4',{state:{language:language}})}} title='4'/>
        <CommonButton color={fifth ? "secondary" : 'default'} onClick={()=>{navigate('/question5',{state:{language:language}})}} title='5'/>
    </div>
  );
};