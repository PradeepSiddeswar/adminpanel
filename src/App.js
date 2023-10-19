
import './App.css';
// import Image from './Components/Image/Image'
import Home from './Components/Home/Home'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import LoginForm from './Components/Form/LoginForm';
import Form1 from './Components/Form/Form1';
import CustomerLogin from './Components/CustomerLogin/CustomerLogin';
import ActiveUsers from './Components/ActiveUsers/ActiveUsers';
import TotalPayment from './Components/TotalPayment/TotalPayment';
import TotalPaymentRecived from './Components/TodayPaymentRecived/TodayPaymentRecived'
import ItemsPurchased from './Components/ItemsPurchased/ItemsPurchased';
import NewUsers from './Components/NewUsers/NewUsers';
import ItemReturnedTotal from './Components/ItemsReturnedTotal/ItemsReturnedTotal';
import TotalOrders from './Components/TotalOrders/TotalOrders';
import FileUploadComponent from './Components/ImageUpload/ImageUpoad';
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
            <Route path="/customerLogin" element={<CustomerLogin />} />
            <Route path="/NumberofActiveUsers" element={<ActiveUsers />} />
            <Route path="/Total Payment" element={<TotalPayment />} />
            <Route path="/Payment Received" element={<TotalPaymentRecived />} />
            <Route path="/Items Purchased" element={<ItemsPurchased />} />
            <Route path="/New Users" element={<NewUsers />} />
            <Route path='/Items Return' element={<ItemReturnedTotal />} />
            <Route path='/Total Orders' element={<TotalOrders />} />
            <Route path='/NumberOfPendingReview' element={<FileUploadComponent />} />
            
            {/* <Route path="FormRegister" element={<FormRegister />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
