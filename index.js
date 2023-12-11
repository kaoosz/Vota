const puppeteer = require("puppeteer");



async function vot(){
    const browser = await puppeteer.launch({ headless: false });
    const page = (await browser.pages())[0]
    await page.setUserAgent("Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13");
    await page.goto("https://premioweb3brasil.com.br/");
    const extractedText = await page.$eval('#totalpoll-poll-457 > form > div.totalpoll-questions > div > div > div.totalpoll-question-choices > label:nth-child(1) > div > div.totalpoll-question-choices-item-control > div.totalpoll-question-choices-item-label > span', (el) => el.innerHTML);
    await page.click('#totalpoll-poll-457 > form > div.totalpoll-questions > div > div > div.totalpoll-question-choices > label:nth-child(1) > div > div.totalpoll-question-choices-item-control > div.totalpoll-question-choices-item-label > span');
    console.log("extractedText",extractedText);
    setTimeout(async () => {
    
    }, 5000);
    await browser.close();

    //const docum = document.getElementsByClassName("totalpoll-question-choices-item-label")
    //console.log("docum",docum);
    //<span>Votar</span>
    //#totalpoll-poll-457 > form > div.totalpoll-questions > div > div > div.totalpoll-question-choices > label:nth-child(1) > div > div.totalpoll-question-choices-item-control > div.totalpoll-question-choices-item-label > span
}

vot();