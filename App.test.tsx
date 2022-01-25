import '@testing-library/jest-dom/extend-expect'
import {render,fireEvent,waitFor,cleanup, getByTestId} from '@testing-library/react';
import CommonButton from './src/Pages/CommonButton';



describe('Test Case For CommonComponent',()=>{
    let id="80";
    const testOnclick=()=>{
     id="90";
    }
    test('Test Case For Common Button',()=>{
     const {getByText}=render(<CommonButton title="Hi" onClick={()=>{}} color=""/>);
     const buttonTitle=getByText("Hi");
     expect(buttonTitle).toBeInTheDocument();
    });
    test('Test Case For Onclick',()=>{
     const {getByText}=render(<CommonButton title="Hi" onClick={testOnclick} color=""/>);
     const buttonText=getByText("Hi");
     fireEvent.click(buttonText);
     expect(id).toEqual("90");
    });
});


  