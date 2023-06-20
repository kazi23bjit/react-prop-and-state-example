import React from 'react';
import "./PersonCard.css";

function PersonCard(props){
    console.log(props.name);
    return (
<div className="card">
    { props.role === 'Student'&& (<>
                                   <div className="card-header">
                                        <p className="name"><b>{props.name}</b></p>
                                   </div>
                                   <p className="id">ID: {props.id}</p>
                                   <p className="blood_group">Blood Group: {props.blood_group}</p>
                                   <p className="role">Role:{props.role}</p>
                                </>)
     }
     { props.role === "Instructor"&&(<>
                                       <div className="card-header">
                                            <p className="name"><b>{props.name}</b></p>
                                       </div>
                                       <p className="rank">ID: {props.id}</p>
                                       <p className="position">Blood Group: {props.blood_group}</p>
                                       <p className="role">Role:{props.role}</p>
                                       <p className="access_to">Access to:{props.access}</p>
                                    </>)
     }
	</div>
    )
}

export default PersonCard;