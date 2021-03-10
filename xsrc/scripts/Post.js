export const Post = (postObject) => {
    return `
    <section class="post">
    <header>
        <h2 class="post__title">${postObject.title}</h2>
    </header>
    <img class="post__image" src="${postObject.url}"/>
    <p class="post__explanation">${postObject.explanation}</p>
    <p class="post__date">${postObject.date}</p>
    <p class="post__copyright">${postObject.copyright}
    </section>
    `
}