import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";

import Form from "./scenes/form";

import FAQ from "./scenes/faq";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Ticketcard from './components/Ticketlist/Ticketcard';
import Lastmodified from './components/Lastmodified/Lastmodified';

import Customer from './components/Customer/Customer';
import Customerform from './components/Customerform/Customerform';
import Customerdetails from './components/Customerdetails/Customerdetails';
import Stafflist from './components/Staff/Stafflist';
import Staffform from './components/Staff/Staffform';

import Project from './components/Project/Project';
import Projectform from './components/Project/Projectform';
import Ticketform from './components/Ticketlist/Ticketform';
import Ticketdetailpage from './components/Ticketlist/Ticketdetailpage';
import { Provider } from 'react-redux'
import {store} from './Redux/store'
import Permission from "./components/Staff/Permission";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
     
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Provider store={store}>
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
          
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
             
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              
              <Route path='/customer' element={<Customer/>}></Route>
      <Route path='/lastmodified' element={<Lastmodified/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
      <Route path='/Ticketdetail' element={<Form/>}></Route>
      <Route path='/customerform' element={<Customerform/>}></Route>
      <Route path='/customerdetails/:id' element={<Customerdetails/>}></Route>
      <Route path='/staffs' element={<Stafflist/>}></Route>
      <Route path='/staffform' element={<Staffform/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/projectform' element={<Projectform/>}></Route>
      <Route path='/ticketform' element={<Ticketform/>}></Route>
      <Route path='/ticket' element={<Ticketcard/>}></Route>
      <Route path='/ticketdetails/:id' > </Route>
      <Route path='/permission' element={<Permission/>}></Route>
            </Routes>
           
          </main>
          </Provider>
        </div>
      </ThemeProvider>
      
    </ColorModeContext.Provider>
  );
}

export default App;
