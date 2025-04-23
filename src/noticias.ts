import config from "./config.js";

const API_KEY: string = config.NEWS_API_KEY;

fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => renderArticles(data));


function renderArticles(data: any): void {
    const news = document.getElementById("news");
    let counter: number = 0;

    for (const article of data.articles) {
        if (counter === 5) break;
        if (article.urlToImage) {
            news?.appendChild(buildArticle(article));
            counter++;
        }
    }
}

function buildArticle(article: any): Node {
    const art = document.createElement("article");
    art.className = "dual-section";

    const container = document.createElement("div");
    container.className = "dual-section__container";

    const media = document.createElement("div");
    media.className = "dual-section__media";
    const mediaImg = document.createElement("img");
    mediaImg.src = article.urlToImage;
    mediaImg.className = "dual-section__image";
    media.appendChild(mediaImg);

    const content = document.createElement("div");
    content.className = "dual-section__content";
    const title = document.createElement("h2");
    title.className = "dual-section__title";
    title.textContent = article.title;
    const author = document.createElement("h3");
    author.className = "dual-section__subtitle";
    author.textContent = article.author;
    const text = document.createElement("p");
    text.className = "dual-section__text";
    text.textContent = article.description;
    const cta = document.createElement("a");
    cta.href = article.url;
    cta.className = "dual-section__cta";
    cta.textContent = "Leer más";
    content.append(title, author, text, cta);

    container.append(media, content);
    art.appendChild(container);
    return art;
}