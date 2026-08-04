import{Page,Locator,Expect} from "@playwright/test";
export class LoginPage{
page:Page;

constructor(page:Page){

this.page=page;
console.log("this is a constroctur");
console.log("these are changes for demo");

}
/* async initializePage(page:Page)
{
this.page=page;
}   */

async enterUserName(nameValue:string)
  
{
const userLogin= this.page.getByPlaceholder('username');
await userLogin.fill(nameValue);
}

async enterPassword(passwordValue:string)

{
    const userPassword=this.page.getByPlaceholder('password');
    await userPassword.fill(passwordValue);
}

async clickOnLoginButton()

{;
    const loginButton= this.page.getByRole('button',{name:'Login'})
    await loginButton.click();

}


}
