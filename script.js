function loginvalidate()
{   
    
    let LoginEmail= document.getElementById("LEmail");
    let LoginEmailError= document.getElementById("LerrordisplayEmail");
    let LoginPwd= document.getElementById("LPwd");
    let LoginPwdError= document.getElementById("LerrordisplayPwd");
    var em=1;
    if(LoginEmail.value.trim()==""||LoginPwd.value.trim()=="")
    {   
        if(LoginEmail.value.trim()=="")LoginEmail.style.border="2px solid red";
        if(LoginPwd.value.trim()=="")LoginPwd.style.border="2px solid red";
        
        window.alert("Enter Username and Password to Login");
        return false;
    }
    else if(LoginEmail.value !="admin")
    {
        LoginEmailError.innerHTML="Invalid Username!";
        LoginEmailError.style.color="red";
        em=2;
        return false;
    }
    else if(LoginPwd.value !="12345")
    {   LoginPwdError.innerHTML="Invalid Password!";
        LoginPwdError.style.color="red";
        if(em==1){LoginEmailError.innerHTML="Valid";
        LoginEmailError.style.color="green";LoginEmail.style.border="1px solid green"
        }
        return false;
    }
    else
    {
        window.alert("Validation Success");
        return true;
    }


}

function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        
        if(this.readyState==4 && this.status==200){

           var response=JSON.parse(this.responseText);
           var newhtml=`<table id="todolist"><tr><th>Done</th>
                        <th>Task</th>
                        </tr>`;         
           for(var i=0;i<response.length;i++)
           {    
               if(response[i].completed == true)
                {
                newhtml+=`<tr><td><input type="checkbox" class="donechkbx" value=true Checked disabled></td>`;}
               else
               {
                newhtml+=`<tr><td><input type="checkbox" class="donechkbx" value=false onchange="handleChange(event)"> </td>`;}

               newhtml+=`<td>${response[i].title}</td></tr>`;

           }
           newhtml+=`</table>`;
           document.getElementById("demo").innerHTML=newhtml;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();

}

var checkedCount=0;
function handleChange(e) 
{
    const {checked} = e.target;

    if(checked==true){
                console.log('checked');
                checkedCount++; 
                if(checkedCount==5){alert('Congrats. 5 Tasks have been Successfully Completed');checkedCount=0;}
            }
    else    {
                 if(checkedCount>0)
                    {checkedCount--;}
                console.log('unchecked');
            }
}
