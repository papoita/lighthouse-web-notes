import React from "react";

export default function Weather (props){
  return(
    <p>
      It is {props.temperature} C ({props.temperature >= 20 ? "(warm)" : "(cold)"})in {props.city}
    </p>
  )
}

/////

import React from "react";

export default function Weather (props){
  if(props.temperature >= 20){
    return(
      <p>
        It is  {props.temperature} C (warm) in {props.city}
      </p>
    )
  }else{
    return(
      <p>
        It is {props.temperature} C ({props.temperature >= 20 ? "(warm)" : "(cold)"})in {props.city}
      </p>
    )
  }
  
}