function RegisterClick(){
   document.getElementById("detailsContainer").style.display="block";
   document.getElementById("RegisterContainer").style.display="none";

   document.getElementById("lblName").innerHTML=document.getElementById("txtName").value;
   document.getElementById("lblPrice").innerHTML=document.getElementById("txtPrice").value;
   document.getElementById("lblCity").innerHTML=document.getElementById("lstCities").value;
  
   stockCheckBox=document.getElementById("optStock");
  stockStatus="";

  if(stockCheckBox.checked){
   stockStatus="Available";
  }else{
   stockStatus="Out Of Stock";
  }
  document.getElementById("lblStock").innerHTML=stockStatus;
}

function EditClick(){
   document.getElementById("modalRegisterButton").innerHTML="save";
   document.getElementById("modalRegisterButton").className="btn btn-warning w-100";
}