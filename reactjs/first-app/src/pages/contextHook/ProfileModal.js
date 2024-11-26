export const ProfileModal=({u})=>{
    const updateUser=((u)=>{


 }
)
 return(<>
    
    <div className="modal" id="myModal">
    <div className="modal-dialog">
    <div className="modal-content">

  
      <div className="modal-header">
        <h4 className="modal-title">Modal Heading</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      
      <div className="modal-body">
        
      </div>

      
      <div className="modal-footer">
        <button type="button"
         className="btn btn-info" 
         data-bs-dismiss="modal"
         onclick={()=>updateUser(u)}>
            Update
          </button>

      </div>

    </div>
  </div>
</div>
    
    </>)
}