export default InputValidators = {
    emailValidator(emailUser){

        var reg = /\S+@\S+\.\S+/;

        if (reg.test(emailUser) === false) {   
            return false;
        }
        else {
            return true
        }
    },

    passwordValidator(passwordUser){
        let data = {
            status: false,
            message: ""
        }
        
        const regexUppercase = new RegExp(/^(?=.*[A-Z]).+$/)
        const regexLowercase = new RegExp(/^(?=.*[a-z]).+$/)
        const regexNumber = new RegExp(/^(?=.*[0-9]).+$/)
        const length = passwordUser.length >= 6

        if(!length){
            data.message = "Sua senha deve possuir pelo menos 6 caracteres"
        }else if(!regexUppercase.test(passwordUser)){
            data.message = "Sua senha deve possuir pelo menos uma letra maiusculo"
        } else if(!regexLowercase.test(passwordUser)){
            data.message = "Sua senha deve possuir pelo menos uma letra minuscula"
        }else if(!regexNumber.test(passwordUser)){
            console.log("osi")
            data.message = "Sua senha deve possuir pelo menos um numero"
        }else{
            data.status = true
        }   
            return data
    }

}