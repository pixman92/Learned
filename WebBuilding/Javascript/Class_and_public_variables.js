class Message{  
  constructor(fromEmail, toEmail, messageText){     //method for making passed in variables - into <this.> variables
        this.fromEmail = fromEmail;
        this.toEmail = toEmail;
        this.messageText = messageText;
        this.date = new Date;
  }
  
  //returning functions - to be called later in different places - <this.returnFromEmail>
  returnFromEmail(){
      return this.fromEmail;
  }
  
  returnToEmail(){
    return this.toEmail;  
}
  returnMessageText(){
    return this.messageText;
  }
  
  
    print(){
        console.log(this.returnMessageText());
    }
  
    
  }
