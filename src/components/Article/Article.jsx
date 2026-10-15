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
  const onclickHandler = (id) => {
    console.log(
      "%c 📚 Selected Article ",
      "background: #1e293b; color: #a3e635; font-size: 14px; font-weight: bold; padding: 8px; border-radius: 6px;",
    );

    console.table({
      ID: id,
      Title: title,
      Author: author,
      Price: price ? `${price.toLocaleString()} تومان` : "رایگان",
      Published: publish_date,
    });
  };

  return (
    <article
      className="article-card"
      onClick={() => onclickHandler(crypto.randomUUID())}
    >
      <header>
        <img src={image} alt="Article Img" />
      </header>
      <main className="article-body">
        <h4 className="article-title">{title}</h4>
        <p className="article-caption">{description}</p>
        <div className="price">
          <p className="price-title">قیمت دوره: </p>
          <p className="price-number">
            {price ? price.toLocaleString() + "تومان" : "رایگان"}
          </p>
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
