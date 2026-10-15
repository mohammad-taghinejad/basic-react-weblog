import "./Article.css";

function Article({
  image,
  title,
  description,
  author,
  publish_date,
  price,
  isFree = true,
}) {
  return (
    <article className="article-card">
      <header>
        <img src={image} alt="Article Img" />
      </header>
      <main className="article-body">
        <h4 className="article-title">{title}</h4>
        <p className="article-caption">{description}</p>
        <div className="price">
          <p className="price-title">قیمت دوره: </p>
          <p className="price-number">{ price ? price.toLocaleString() + "تومان" : "رایگان" }</p>
        </div>
      </main>
      <div className="divider"></div>
      <footer className="article-footer flex justify-between">
        <div>
          <div className="author-label flex items-center gap-1">
            <i className="fa-solid fa-user"></i>
            <span> نویسنده: </span>
            <span className="author-name">{author}</span>
          </div>
        </div>
        <div>
          <div className="published-date flex items-center gap-2">
            <i className="fa-solid fa-calendar"></i>
            <span>{publish_date}</span>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default Article;
