import React from 'react';
const MapObjectThroughProps1=(props)=>{
const {name1,age1,role1,company1}=props
  return(
    <div>
    {`Name is ${name1} Age is ${age1} Role is ${role1} Company is ${company1} `}
    </div>
  )
}
export default MapObjectThroughProps1;