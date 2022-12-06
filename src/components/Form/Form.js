import React ,{useState} from 'react'
import axios from 'axios'
import './Form.css'
import{Link} from'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Form() {
    const [credentials, setCredentials] = useState({
     

          });
          const navigate =useNavigate()
    
        
          const handleChange = (e) => {
            setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          };
       
     
         
    
          const handleClick = async (e) => {
           
            e.preventDefault();
            const res = await axios.post("http://localhost:5000/ticket/addticket", credentials);
          console.log(res)
        navigate('/')
    }
  return (
<div>
{/* <div class="uk-card uk-card-default uk-width-1-2@m container">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
            <h4 className='customer_summary'> Customer Details</h4>
             
            </div>
        </div>
    </div>
   <div class="uk-card-body">
     <div className='customersform'>
     <div className="form-group">
          <p required className='form-label field'>Request Number<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="RequestNumber" onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
          <p required className='form-label field'>Request Date<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="RequestDate" onChange={handleChange}  type="Date" />
        </div>
        <div className="form-group">
          <p required className='form-label field'>Ticket Number<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="TicketNumber" onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Primary Email <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="email" onChange={handleChange}  type="email"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Status <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Status" onChange={handleChange}  type="text" >
          
            <option value="Active">Active</option>
            <option value="InActive">InActive</option>
            
          </select>
        </div>
        <div className="form-group">
        <p required className='form-label field'>Mobile Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="contact" onChange={handleChange}  type="Number" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>WhatsApp Number<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Whatsppnumber" onChange={handleChange}  type="Number" />
        </div>


        <div className="form-group">
          <p required className='form-label field'>Primary Contact Person <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="contactperson" onChange={handleChange}  type="text" />
        </div>
        
        
      </div> 
      <div className='customersform2'>
      <div className="form-group">
        <p required className='form-label field'>City <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="city" onChange={handleChange}  type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>State <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="state" onChange={handleChange}  type="text"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Country <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="country" onChange={handleChange}  type="text"  />
        </div>
        
      </div>


      <div className='customersform1'>
       
        <div className="form-group">
          <p required className='form-label field'>Address</p>
          <input className="form-control"  type="text"   id="Address" onChange={handleChange}/>
        </div>
      </div>
     </div>
     
     
     
     <div class="uk-card-footer">
     <div className="customerformbutton">
     <Link to='/'><button className='Customerbutton uk-button uk-button-primary'>Back</button></Link>
     <button className='Customerbutton uk-button uk-button-primary'  onClick={handleClick}>submit</button>
    </div>
      
 
    
   
     </div>
    
</div> */}
<div class="container1 uk-card uk-card-default uk-card-body uk-width-1-2@m">
<h3>Add Ticket Details</h3>
<div className='ticketform'>
<div className='form'>
       
        <input
          type="Number"
          placeholder="TicketNumber"
          id="TicketNumber"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="Project"
          id="Project"
          onChange={handleChange}
          className="lInput"
        />
        
         <input
          type="date"
          placeholder="Date of Closing"
          id="DateofClosing"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="text"
          placeholder="Ticket type"
          id="Tickettype"
          onChange={handleChange}
          className="lInput"
        />
          <input
          type="text"
          placeholder="Customer"
          id="Customer"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="Machine Details"
          id="MachineDetails"
          onChange={handleChange}
          className="lInput"
        />

      <div className="form-group">
          
          <select className="form-select" name="Status" id="Status" onChange={handleChange}>
            <option style={{display:'none'}} value="">Status</option>
            <option value="close">close</option>
            <option value="open">open</option>
          </select>
        </div>
      </div>
      <button className='btnsubmit' onClick ={handleClick}>submit</button>
      </div>
</div>
</div>
  )
}

export default Form