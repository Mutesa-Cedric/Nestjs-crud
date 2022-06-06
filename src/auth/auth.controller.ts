import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller("auth")
export class AuthController{

    //here, we have injected the AuthService (this is called dependency injection)

    constructor(private authService: AuthService){
      
    }

    //you add a method (post) with @Post decorator and the handler

    // signup
    @Post("signup")
    signup(){
        this.authService.signup();
    }

    // signup

    // login
    @Post("signin")
    signin(){
       this.authService.signin();
    }
    // login
   
}