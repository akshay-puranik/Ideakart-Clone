// //Getting all the required element
// let searchwrapepr=document.querySelector(".search-input");
// let inputbox=searchwrapepr.querySelector("input");
// let suggetionbox=searchwrapepr.querySelector("autocom-box");

// //If user press any key and release

// inputbox.onkeyup=(e)=>{
// let userData=e.target.value;
// let emptyArray=[];
// if(userData){
//     emptyArray =suggetions.filter((data)=>{
//         // Filtering array value and user char to lowercase an return only those word/sentence which are starts with user enterd word
//         return data.toLowerCase().starsWith(userData.toLowerCase());
//     });

//     emptyArray=emptyArray.map(()=>{
//         return data =`<li>`+data+`</li>`;
//     });
//     console.log(emptyArray);
//     searchwrapepr.classList.add("active"); //show autocomple box
//     showSuggestions(emptyArray);
//     let allList=suggetionbox.querySelectorAll("li");
//     for(let i=0;i<allList.length;i++){
//         //adding onclick attribute all li tag
//         allList[i].setAttribute("onClick","select(this)");
//     }
// }
// else{
//     searchwrapepr.classList.remove("active");// hide autocomple box
//  }
// }

// function select(element){
//     let selectUserData = element.textContent;
//     inputbox.value=selectUserData //passing the user selected list item data in textfeild
// }

// function showSuggestions(list){
//     let listData;
//     if(! list.length){
//         userValue=inputbox.value;
//         listData=`<li>`+userValue+`</li>`;
//     }
//     else{
//         listData=list.join("");
//     }
//     suggetionbox.innerHTML=listData;
// }


//Serch box 2

let  searchVal=document.querySelector("#input")