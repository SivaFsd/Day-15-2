function myFunction() {
  // -------------firstName----------------------
    var tbl = document.getElementById("tblvalue");
    var name = document.getElementById("name");
    var tr=document.createElement("tr");
    var tdname=document.createElement("td");
    tdname.innerText=name.value;
    tr.appendChild(tdname);
    name.value='';
  
    // -------------LasstName---------------------
    var lname = document.getElementById("lname");
    var tdlname=document.createElement("td");
    tdlname.innerText=lname.value;
    tr.appendChild(tdlname);
    lname.value='';

// -------------Address---------------------------
    var add = document.getElementById("add");
    var addbar = document.createElement("td");
    addbar.innerText=add.value;
    tr.appendChild(addbar);
    add.value='';

// -------------Pincode---------------------------
    var pincode = document.getElementById("pc");
    var addpc = document.createElement("td");
    addpc.innerText=pincode.value;
    tr.appendChild(addpc);
    addpc.value='';


  //-----------------Radio------------------------
    //   const form = document.form.form;
    //   const formel = form.element.Gender;
    //   const input = document.getElementById("gender");
    //   const forms = [...formel];
    //   forms.forEach(form =>{
    //     console.log(form.value);
    //   });

    //   formel.addEventListener("change",(event)=>{
    //   const checked = forms.find((catagory)=>{
    //     return catagory.checked

    //   })
    //     console.log("radio changed");
    //   })
      
    //   input.addEventListener("change", ()=>{
    //   forms.find((catagory)=>catagory.checked);  

    // })
      
    //-------------------Radio-----------------------
    var addgender = document.createElement("td");
    addgender.innerText=document.querySelector('input[name=Gender]:checked').value;
    tr.appendChild(addgender);
      

    //----------------Checkbox-----------------------
    var foodselected='';
    var food=document.querySelectorAll("input[name='food']:checked");
    food.forEach(function (element, index) {
      if(food.length-1==index)
      {
        foodselected+=element.defaultValue;
      }
      else{
      foodselected+=element.defaultValue+"-";
      }
    })
    var addfood = document.createElement("td");
    addfood.innerText=foodselected;
    tr.appendChild(addfood);
  
    // -------------State-----------------------
    var state = document.getElementById("state");
    var addstate = document.createElement("td");
    addstate.innerText=state.value;
    tr.appendChild(addstate);
    addstate.value='';

    // -------------Country----------------------
    var Country = document.getElementById("country");
    var addcountry = document.createElement("td");
    addcountry.innerText=Country.value;
    tr.appendChild(addcountry);
    addcountry.value='';

    tbl.appendChild(tr);
  }
  //----------------clear----------------------------
  function clearfunction(){
    let tblclear = document.getElementById("tblvalue");
     for(var i=1;i<=clear.rows.length;i++)
     {
      tblclear.deleteRow(i);
     }
  }
