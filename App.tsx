import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CandidateDetail from './src/Pages/CandidateDetail';
import QuestionDetails from './src/Pages/QuestionDetails';
import Question2 from './src/Pages/Question2';
import Question3 from './src/Pages/Question3';
import Question4 from './src/Pages/Question4';
import Question5 from './src/Pages/Question5';
import { Provider } from 'react-redux';
import store from './src/store';
import { FinalResult } from './src/Pages/FinalResult';

export default function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<CandidateDetail/>}/>
              <Route path="/questionDetails" element={<QuestionDetails/>}/>
              <Route path="/question2" element={<Question2/>}/>
              <Route path="/question3" element={<Question3/>}/>
              <Route path="/question4" element={<Question4/>}/>
              <Route path="/question5" element={<Question5/>}/>
              <Route path="/finalResult" element={<FinalResult/>}/>
            </Routes>
        </BrowserRouter>
     </Provider>
  );
}
