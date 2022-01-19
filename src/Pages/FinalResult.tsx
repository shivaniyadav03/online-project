import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router';
import { VictoryPie } from "victory";
import _ from 'lodash'; 

interface IFinalResult {
    language?: string
}
type Location={
  language:string;
};
export const FinalResult:React.FC<IFinalResult>=()=>{
  const first: any = useSelector((state: any) => state.first);
  const second: any = useSelector((state: any) => state.second);
  const third: any = useSelector((state: any) => state.third);
  const forth: any = useSelector((state: any) => state.forth);
  const fifth: any = useSelector((state: any) => state.fifth);
  let unattendedCount=0;
  let correct=0;
  
  const location=useLocation();
  const {language}=location.state as Location;
  if(language==='Hindi'){
    if(first !== null){
      if(first.answer == 'थ'){
        correct++;
      }
    }else{
      unattendedCount++;
    }
    if(second !== null){
      if(second.answer == '50'){
        correct++;
       }
    }else{
      unattendedCount++;
    }
 
    if(third !== null){
      if(_.isEqual(third.answer, ['एडम स्मिथ', 'एडम स्मिथ FRSA'])){
        correct++;
      }
    }else{
      unattendedCount++;
    }
    
    if(forth !== null){
      if(forth.answer == 'स्वादिष्ट'){
        correct++;
      }
    }else{
      unattendedCount++;
    }
    
    if(fifth !== null){
      if(fifth.answer == 'असत्य'){
        correct++;
      }
    }else{
      unattendedCount++;
    }
  }
  else{
    if(first !== null){
      if(first.answer == 'one in a 100'){
        correct++;
     }
    }else{
      unattendedCount++;
    }
   
    if(second !== null){
      if(second.answer == 'Australia'){
        correct++;
      }
    }else{
      unattendedCount++;
    }
  
    if(third !== null){
      if(_.isEqual(third.answer, ['35', '30-35'])){
        correct++;
      }
    }else{
      unattendedCount++;
    }
   
    if(forth !== null){
      if(forth.answer == 'was lived'){
        correct++;
      } 
    }else{
      unattendedCount++;
    }
  
    if(fifth !== null){
      if(fifth.answer == 'true'){
        correct++;
      }
    }else{
      unattendedCount++;
    }
   
  }

  let incorrect = 5 - correct - unattendedCount;
  return (
    <VictoryPie
      data={[
        { x: `Correct=${correct}`, y: correct},
        { x: `Incorrect=${incorrect}`, y:incorrect},
        { x: `Unattended=${unattendedCount}`, y:unattendedCount}
      ]}
    />
  );
};