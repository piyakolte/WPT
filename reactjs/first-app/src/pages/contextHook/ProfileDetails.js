import { userContext } from "./Profile"
import { useContext } from "react"
import { ProfileModal } from "./ProfileModal"

export const ProfileDetails=()=>
    {
       const user=useContext(userContext)
        return(<>
        
        {user.map((u,i)=>
        {
            return(<>
         <ul key={i} className="list-group bg-secondary">
            <li className="list-group-item">
                <div className="card-header fs-2">{u.name}</div>
            </li>
            <div class="card-body">

            <li className="list-group-item" >{u.age}</li>
            
            <li className="list-group-item">{u.email}</li>
            <li className="list-group-item">{u.mobile}</li>
            <li className="list-group-item">Kya Mangta hai? {u.city}</li>
            </div>
            <li className="list-group-item">
                <button className="btn-btn-danger"data-bs-toggle="modal" data-bs-target="#myModal">Update</button>
            </li>
            </ul> 
            <hr/>
            <ProfileModal u={u}/>
            </>)
        })}

        </>)
    
    }