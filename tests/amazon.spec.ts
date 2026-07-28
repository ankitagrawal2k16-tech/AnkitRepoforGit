    import {test, expect } from "@playwright/test";

    test('verify account',async({page})=>{
    await page.goto('https://www.amazon.com/');
    await page.waitForLoadState('domcontentloaded');
    await page.locator("//input[@type='text']").fill('shower');
    await page.locator("//div[@aria-rowindex='6']").click();
    await page.locator("(//a[text()='See options'])[1]").click();
    await page.locator("//a[text()=' Add to List ']").click();
    await page.locator("//span[text()='Continue']//ancestor::div//span//input[@type='email']").fill('8109186482');
    await page.locator("//input[@type='email']//following::span[1]").click();
    //await page.locator("//div[text()='Enter your mobile number or email']//following::span[2]").click();
    


    
    });