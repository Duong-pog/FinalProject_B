function signUp(){
    let input_userName = document.getElementById('username').value
    let input_email = document.getElementById("email").value
    let input_password = document.getElementById("password").value
    let caseBlock = document.getElementById("checkCase")

    let listEmails = JSON.parse(localStorage.getItem("listEmail"))
    let listPasswords = JSON.parse(localStorage.getItem("listPasswords"))
    let listUsernames = JSON.parse(localStorage.getItem("listUsernames"))
    let listAccountExist = false

    if (input_userName == "" || input_userName =="" || input_password==""){
        caseBlock.style.display="block"
        caseBlock.style.color ="red"
        caseBlock.innerHTML = "You must fill in the form"
    } 
    else {
        if (listEmails==null){
            listEmails = [input_email]
            listPasswords = [input_password]
            listUsername = [input_userName]
            localStorage.setItem('listEmails',JSON.stringify(listEmail))
            localStorage.setItem('listPassword',JSON.stringify(listPassword))
            localStorage.setItem('listUsername',JSON.stringify(listUsername))

            caseBlock.style.display = "block"
            caseBlock.innerHTML = "Sign up successful"
            caseBlock.style.color = "green"
        
        }
        else{
            for(i=0;i<listEmails.length;i++){
                if (input_email == listEmails[i]){
                    caseBlock.innerHTML = "Email address has been used, use a different one"
                    caseBlock.style.color = "red"
                    caseBlock.style.display = "block"
                    listAccountExist = true;
                }
            }
            if (!listAccountExist){
                listEmails.push(input_email)
                listPasswords.push(input_password)
                listUsernames.push(input_userName)
                localStorage.setItem('listEmails',JSON.stringify(listEmails))
                localStorage.setItem('listUsername',JSON.stringify(listUsername))
                localStorage.setItem('listPassword',JSON.stringify(listPassword))
            }
            caseBlock.style.display = "block"
            caseBlock.innerHTML = "Sign up successful"
            caseBlock.style.color = "green"
        }
    }
}