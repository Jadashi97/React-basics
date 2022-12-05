import React from 'react';

const Workdays = ("mon", "tue", "wed", "thur", "fri");
const Weekends = ("sat", "sun");

function CurrentMessage(){
    const day = new Date().getDay();
    const weekday = (day >= 1 && day <=5);
    const weekend = (day >= 6 && day <=7);
    let message;

   if(weekday){
    message = <Workdays/>
   }else if(weekend){
    message = <Weekends/>
   }else{
    message = <ErrorComponent/>
   }

   return(
    <div>
        {message}
    </div>
   )
}

export default function ConditionalRendering() {
  return (
    <div>
      <CurrentMessage/>
    </div>
  )
}
