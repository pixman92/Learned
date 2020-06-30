class Message{  
  makeAllPublic(fromEmail, toEmail, messageText){     //method for making passed in variables - into <this.> variables
        this.fromEmail = fromEmail;
        this.toEmail = toEmail;
        this.messageText = messageText;
        this.date = new Date;
    }
    print(){
        console.log(this.messageText);
    }
    
  }
