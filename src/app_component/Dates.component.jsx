// date components has not been added to the main app


const datebuilder = (d)=>{
         let months = ["January", "February", "March", "April", "May", "June", "Jully", "August",
         "September", "October", "November", "December"];
         let days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];

         let day = days[d.getDay()];
         let date = d.getDate();
         let month = months[d.getMonth()];
         let year = d.getFullYear();
         
         return {day, date, month, year};


  }


export default datebuilder




// function dates(d){
         
//          let months = ["January", "February", "March", "April", "May", "June", "Jully", "August",
//          "September", "October", "November", "December"];
//          let days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];

//          let day = days[d.getDay()];
//          let date = d.getDate();
//          let month = months[d.getMonth()];
//          let year = d.getFullYear();
        
//          return {day, date, month, year};
//     }
    