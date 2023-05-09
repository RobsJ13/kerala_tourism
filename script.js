function alerting()
{
    alert.msg("Details of Trivandrum, Kollam, Trissur, Palakkad and Wayanad are added at the moment")
}

var e=document.getElementById("email");
var p=document.getElementById("pwd");
var error1=document.getElementById('err1');
var error2=document.getElementById('err2');


let regex_e=/^([A-Za-z0-9\-#._]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
//let regex_m=/^([6-9][0-9]{9})$/;
let regex_p=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
var flag=false;
var flag1=true;
var flag2=true;

function validate(){
    if(e.value==""|| p.value==""){
        alert("Fields cannot be empty")
    }
    else if(regex_e.test(e.value)){
        error1.innerText="Valid format";
        error1.style.background='white';
        error1.style.color='green';
    }
    else{
        error1.innerText="Enter valid email id";
        error1.style.background='red';
        error1.style.color='white'; 
        flag1=false;
    }

    if(regex_p.test(p.value)){
        error2.innerText="Valid format";
        error2.style.background='white';
        error2.style.color='green';
        
    }
    else{
        error2.innerText="Password should contain Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
        error2.style.background='red';
        error2.style.color='white'; 
        flag2=false;
    }
    if(flag1 && flag2)
        flag=true;
    return flag;
}

var e2=document.getElementById("email2");
var p2=document.getElementById("pwd2");
var m2=document.getElementById("mob");
var e_error=document.getElementById('e_err');
var p_error=document.getElementById('p_err');
var m_error=document.getElementById('m_err');


let regex_e2=/^([A-Za-z0-9\-#._]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let regex_m2=/(^([6-9][0-9]{2}[.-]?[0-9]{3}[.-]?[0-9]{4})$)/;  //(^([6-9][0-9]{9})$)
//let regx_m2=/(?=^([6-9][0-9]{2}[.-][0-9]{3}[.-][0-9]{4})$)(?=(^([6-9][0-9]{9})$)))/;
let regex_p2=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
let regex_sp=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{10,})/
let regex_md=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
var s_flag=false;
var s_flag1=true;
var s_flag2=true;
var s_flag3=true

function validate2(){
    if(e2.value==""|| p2.value==""||m2.value==""){
        alert("Fields cannot be empty")
    }
    else if(regex_e2.test(e2.value)){
        e_error.innerText="Valid format";
        e_error.style.background='white';
        e_error.style.color='green';
    }
    else{
        e_error.innerText="Enter valid email id";
        e_error.style.background='red';
        e_error.style.color='white'; 
        s_flag1=false;
    }

    if(regex_p2.test(p2.value)){
        p_error.innerText="Valid format";
        p_error.style.background='white';
        p_error.style.color='green';
        if(regex_sp.test(p2.value)){
            sp.innerText="Strong Password";
            sp.style.background='green';
            sp.style.color='black'; 
        }
        else if(regex_md.test(p2.value)){
            sp.innerText="Medium Password";
            sp.style.background='yellow';
            sp.style.color='black'; 
        }
        else{
            sp.innerText="Weak Password";
            sp.style.background='red';
            sp.style.color='black'; 
            }
    }
    else{
        p_error.innerText="Password should contain Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
        p_error.style.background='red';
        p_error.style.color='white'; 
        s_flag2=false;
    }
    if(regex_m2.test(m2.value)){
        m_error.innerText="Valid format";
        m_error.style.background='white';
        m_error.style.color='green';
    }
    else{
        m_error.innerText="Must cotain exactly 10 numbers and starting with numbers (6-9)";
        m_error.style.background='red';
        m_error.style.color='white'; 
        s_flag2=false;
    }

    if(s_flag1 && s_flag2 && s_flag3)
        s_flag=true;
    return s_flag;
}
