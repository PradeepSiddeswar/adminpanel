
import './App.css';
import Image from './Components/Image/Image'
import Home from './Components/Home/Home'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import LoginForm from './Components/Form/LoginForm';
import Form1 from './Components/Form/Form1';
import CustomerRegistration from './Components/CustomerRegistration/CustomerRegistration';
import CustomerLogin from './Components/CustomerLogin/CustomerLogin';
import ActiveUsers from './Components/ActiveUsers/ActiveUsers';
import NumberOfItemsPurchased from './Components/NumberOfItemsPurchased/NumberOfItemsPurchased';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
    
     <Routes>
       <Route path="/" >
       <Route index element={<Home />} />
       <Route path='/' index element={<LoginForm />} />
       <Route path='/form' index element={<Form1 />} />
       {/* <Route path='/image' index element={<Image />} /> */}
       <Route path="/customerLogin" element={<CustomerLogin /> } />
       <Route path="/Number of Active Users" element={<ActiveUsers />} />
       <Route path="/Items Purchased" element={<NumberOfItemsPurchased />} />

       {/* <Route path="FormRegister" element={<FormRegister />} /> */}
       </Route>
     </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
