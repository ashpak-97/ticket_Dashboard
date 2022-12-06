import React from 'react'
import Button from '@mui/material/Button';
function Workorder() {
  return (
    <div className='customer'>
    <div class="uk-card uk-card-default uk-width-1-2@m container">
    <div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto" className='customer_summaryhead'>
           <h4 className='customer_summary'>work order</h4>
        </div>
        
     
    </div>
    <div>
   
 <Link to="/customerform">   <button className='Customerbutton uk-button uk-button-primary'>Add New Workorder</button></Link>

 </div>
</div>
<div class="uk-card-body">
<Table responsive className='tables'>
  <thead>
    <tr>
      
      <th >Ticket Number</th>
        <th>Project</th>
        <th>Work Order Number</th>
        <th>Date</th>
        <th>Status</th>
        <th>Action</th>
        
    </tr>
  </thead>
  <tbody>
  {Array.from(Customer).map((row,index) =>{return(
  <tr>
        
        <td><Link to={`/customerdetails/${row._id}`}>{row.TicketNumber}</Link></td>
        <td>{row.Projectdetails}</td>
        <td>{row.workordernumber}</td>
        <td>{new Date(row.Date).toDateString()}</td>
        <td>{row.Approvalstatus}</td>
       
        
       <td>   
       <Button
       
        onClick={()=>{axios.delete(`http://localhost:5000/project/deleteproject/${row._id}`)
      navigate('/project')}}
      >
        <DeleteIcon/>
      </Button>
   </td>
        {/* <td>  <Link to={`/customerdetails/${row._id}`}>  <button className='buttonconsult1'>view</button> </td> */}
 
    </tr>)})}
  </tbody>
</Table>
</div>

</div>
<Menu
    id="demo-positioned-menu"
    aria-labelledby="demo-positioned-button"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
  >
  <Link to='/form' >  <MenuItem style={{textDecoration:'none'}} onClick={handleClose}>Profile</MenuItem></Link>
    
  </Menu>
</div>
  )
}

export default Workorder