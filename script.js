// const btnE1 = document.getElementById("btn");
// const quoteE1 = document.getElementById("quote");
// const authorE1 = document.getElementById("author");


// const apiURL = "https://api.quotable.io/random";

// async function getQuote()
// {

//     try {
//         btnE1.innerText = "Loading...";
//         btnE1.disabled = true;
//         quoteE1.innerText = "Updating..."
//         authorE1.innerText = "Updating..."
//         const response = await fetch(apiURL);
//         const data = await response.json();
//         const quoteContent = data.content();
//         const quoteAuthor = data.author();
//         quoteE1.innerText = quoteContent;
//         authorE1.innerText = "~ " + quoteAuthor;
//         btnE1.innerText = "Get a quote";
//         btnE1.disabled = false;
//         console.log(data);
        
//     } 
//     catch (error) {
//         console.log(error);
//         quoteE1.innerText = "An error happened, try again later";
//         authorE1.innerText = "An error happened";
//     }

// }

// getQuote()
// btnE1.addEventListener("click", getQuote)


const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happened, try again later";
    authorEl.innerText = "An error happened";
    btnEl.innerText = "Get a quote";
    btnEl.disabled = false;
  }
}

getQuote()

btnEl.addEventListener("click", getQuote);