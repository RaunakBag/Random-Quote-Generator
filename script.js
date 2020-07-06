const text = document.querySelector('.text');
const auth = document.querySelector('.author');
const shareBtn = document.getElementById('share-button');
const buttons = document.querySelector('.buttons');

async function getQuotes() {
    const res = await fetch(
        `https://type.fit/api/quotes`
    );

    const data = await res.json();

    return data;
}

async function getQuote() {
    const quotes = await getQuotes();
    const num = Math.floor(Math.random()*quotes.length);
    const quoteOb = quotes[num];
    const quote = quoteOb.text;
    const author = quoteOb.author;
    text.innerText = quote;
    auth.innerText = author;
    buttons.innerHTML = `
    <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=${quote}" rel="noopener noreferrer"><img src="twitter.svg" alt=""></a>
    <button class="next">Next</button>
    `;
    document.querySelector('.next').addEventListener('click', getQuote);
}

getQuote();