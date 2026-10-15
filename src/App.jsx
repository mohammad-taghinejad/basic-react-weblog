import Header from "./components/Header/Header.jsx";
import Article from "./components/Article/Article.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";
function App() {
  const articles = [
    {
      title: "چطور عادت‌های کوچک زندگی ما را تغییر می‌دهند؟",
      description:
        "تغییرات بزرگ همیشه با تصمیم‌های بزرگ شروع نمی‌شوند. گاهی چند عادت ساده و کوچک می‌توانند مسیر زندگی ما را در طول زمان به شکل قابل‌توجهی تغییر دهند.",
      author: "مجید تقی نژاد",
      publish_date: "28 اسفند 1404",
      img: "/images/Article/1.jpeg",
      isFree: false,
      price: 18000000,
    },
    {
      title: "راهنمای شروع برنامه‌نویسی برای مبتدی‌ها",
      description:
        "اگر به دنیای برنامه‌نویسی علاقه دارید اما نمی‌دانید از کجا شروع کنید، در این مقاله با مسیر یادگیری، انتخاب زبان مناسب و اشتباهات رایج افراد تازه‌کار آشنا می‌شوید.",
      author: "علی رضایی",
      publish_date: "15 فروردین 1405",
      img: "/images/Article/2.jpg",
      isFree: true,
      price: 0,
    },
    {
      title: "چرا مدیریت زمان از همیشه مهم‌تر شده است؟",
      description:
        "در دنیایی پر از اعلان‌ها، پیام‌ها و حواس‌پرتی‌های روزمره، مدیریت زمان به مهارتی ضروری تبدیل شده است. چند راهکار کاربردی برای افزایش تمرکز و استفاده بهتر از زمان را بررسی می‌کنیم.",
      author: "سارا محمدی",
      publish_date: "22 فروردین 1405",
      img: "/images/Article/3.png",
      isFree: true,
      price: 0,
    },
    {
      title: "۷ روش ساده برای افزایش خلاقیت",
      description:
        "خلاقیت فقط مخصوص هنرمندان نیست. با ایجاد تغییرات کوچک در برنامه روزانه، تجربه کردن ایده‌های تازه و فاصله گرفتن از عادت‌های تکراری می‌توانید ذهن خود را خلاق‌تر کنید.",
      author: "نیما کریمی",
      publish_date: "3 اردیبهشت 1405",
      img: "/images/Article/4.webp",
      isFree: true,
      price: 0,
    },
    {
      title: "آینده طراحی وب؛ از کدنویسی تا هوش مصنوعی",
      description:
        "ابزارهای هوش مصنوعی در حال تغییر شیوه طراحی و توسعه وب هستند. در این مقاله بررسی می‌کنیم که این فناوری‌ها چه فرصت‌هایی ایجاد کرده‌اند و چرا یادگیری اصول پایه همچنان اهمیت دارد.",
      author: "شهاب اسکندری",
      publish_date: "12 اردیبهشت 1405",
      img: "/images/Article/5.webp",
      isFree: false,
      price: 25000000,
    },
    {
      title: "چگونه یک فضای کاری جذاب در خانه بسازیم؟",
      description:
        "برای داشتن یک فضای کاری مناسب نیازی به اتاقی بزرگ یا تجهیزات گران‌قیمت ندارید. با انتخاب نور مناسب، مرتب کردن میز و ایجاد محیطی آرام می‌توانید بهره‌وری خود را افزایش دهید.",
      author: "نگار احمدی",
      publish_date: "19 اردیبهشت 1405",
      img: "/images/Article/6.jpg",
      isFree: true,
      price: 0,
    },
    {
      title: "تأثیر مطالعه روزانه بر رشد فردی",
      description:
        "مطالعه روزانه می‌تواند دیدگاه ما را گسترش دهد، مهارت‌های ارتباطی را تقویت کند و زمینه یادگیری مداوم را فراهم سازد. حتی اختصاص دادن ۱۵ دقیقه در روز می‌تواند شروع خوبی باشد.",
      author: "امیر حسینی",
      publish_date: "27 اردیبهشت 1405",
      img: "/images/Article/7.jpg",
      isFree: true,
      price: 0,
    },
    {
      title: "از ایده تا اجرا؛ چطور پروژه شخصی خودمان را بسازیم؟",
      description:
        "بسیاری از ایده‌های جذاب به دلیل نداشتن برنامه مشخص نیمه‌کاره می‌مانند. در این راهنما یاد می‌گیریم چطور یک ایده خام را به بخش‌های کوچک تقسیم کنیم و قدم‌به‌قدم آن را به پروژه‌ای واقعی تبدیل کنیم.",
      author: "مریم موسوی",
      publish_date: "5 خرداد 1405",
      img: "/images/Article/8.webp",
      isFree: false,
      price: 5000000,
    },
  ];

  return (
    <div>
      <Header />
      <main>
        <section
          id="hero-section"
          className="container flex items-center justify-between"
        >
          <div id="headline">
            <h1 id="title">سبزبلاگ؛ مرجع آموزش و پروژه‌های برنامه‌نویسی</h1>
            <p id="caption">
              سبزبلاگ فضایی برای یادگیری برنامه‌نویسی و به‌اشتراک‌گذاری دانش
              است. اینجا مقالات آموزشی، نکات کاربردی و پروژه‌های رزومه‌ای
              برنامه‌نویسی با زبانی ساده و حرفه‌ای ارائه می‌شه. هدف ما کمک به
              شماست تا مهارت‌هاتون رو تقویت کنید و رزومه‌ای قوی با پروژه‌های
              جذاب بسازید!
            </p>
            <div id="hero-btns" className="gap-2">
              <button className="btn primary-btn">خواندن مقالات</button>
              <button className="btn secondary-btn">تهیه اشتراک</button>
            </div>
          </div>
          <div id="image-container">
            <img src="/images/hero-illustrator.png" alt="تصویر معرفی سبزبلاگ" />
          </div>
        </section>
        <section id="articles-section">
          <div id="articles-header" className="container flex justify-between">
            <h2 id="section-title">مقالات اخیر</h2>
            <a href="#" className="read-more">
              {" "}
              بیشتر بخوانید{" "}
            </a>
          </div>

          <div id="items" className="container">
            {articles.map((article, index) => (
              <Article
                key={index}
                image={article.img}
                title={article.title}
                description={article.description}
                price={article.price}
                author={article.author}
                publish_date={article.publish_date}
                isFree={article.isFree}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
