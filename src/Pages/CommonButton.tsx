import { Button } from '@material-ui/core';
import React from 'react';

interface Prop{
    title:string,
    onClick:()=>void,
    color:string
};
const CommonButton:React.FC<Prop>=(prop:any)=>{
    return(
      <div>
        <Button variant="contained" color={prop.color} onClick={prop.onClick}>{prop.title}</Button>
      </div>
    );
}
export default CommonButton;