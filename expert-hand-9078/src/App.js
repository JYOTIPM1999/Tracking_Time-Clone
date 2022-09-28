import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Context /AuthContext";
import CreateTask from "./Project Page/CreateTask";
import ProductPage from "./Project Page/ProductPage";
import Account from "./SignUp/Account";
import Signin from "./SignUp/Signin";
import SignUp from "./SignUp/SignUp";


function App() {
  return (
    <div>
      {/* <ProductPage/>
      <CreateTask/> */}
        <h1>HomePage</h1>
        <AuthContextProvider> <Routes>
          <Route path="/" element={<Signin/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/account" element={<Account/>}/>
        </Routes></AuthContextProvider>
       
    </div>
  );
}

export default App;
