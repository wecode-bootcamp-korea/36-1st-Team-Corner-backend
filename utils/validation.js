const validateEmailPw = (email, password) => {
    const emValidation = new RegExp(
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    );
    if(!emValidation.test(email)){
        const err = new Error("EMAIL_NOT_AVAILABLE")
        err.statusCode = 400;
        throw err;
        }

    const pwValidation = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/
    );
    
    if (!pwValidation.test(password)) {
        const err = new Error("PASSWORD_NOT_AVAILABLE");
        err.statusCode = 400;
        throw err;
   
    }
};
      
module.exports = {validateEmailPw};  