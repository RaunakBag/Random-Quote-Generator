const text = document.querySelector('.text');
const auth = document.querySelector('.author');
const nextBtn = document.querySelector('.next');
const shareBtn = document.querySelector('.twitter-share-button');

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
    shareBtn.href="https://twitter.com/intent/tweet/?text=" + quote;
}

getQuote();

nextBtn.addEventListener('click', getQuote)