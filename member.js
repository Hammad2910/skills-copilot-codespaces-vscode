function skillsMember()   
{  
    var member = document.getElementById("member").value;  
    var member_error = document.getElementById("member_error");  
    var pattern = /^[a-zA-Z]*$/;  
    if (member == "")   
    {  
        member_error.innerHTML = "Please enter member name";  
        return false;  
    }  
    else if (!pattern.test(member))   
    {  
        member_error.innerHTML = "Member name should contain characters only";  
        return false;  
    }  
    else   
    {  
        member_error.innerHTML = "";  
        return true;  
    }  
}



