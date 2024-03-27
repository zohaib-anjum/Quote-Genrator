const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    } catch (error) {
        console.error("Error fetching quote:", error);
        quote.innerHTML = "Failed to fetch quote. Please try again later.";
        author.innerHTML = "";
    }
}

function tweet() {
    const quoteText = quote.innerHTML;
    const authorText = author.innerHTML;
    const tweetText = `${quoteText}%0A-- ${authorText}`; // Insert %0A for newline
    const currentUrl = encodeURIComponent(window.location.href);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=%0A${currentUrl}`;
    window.open(tweetUrl, "_blank", "width=600,height=300");
}



getQuote(apiUrl);
