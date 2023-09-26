import NewsCard from "./NewsCard";

function News() {
    return (
        <div className="content news">
            <h2 className="page-title">Space Related News</h2>

            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    )
}

export default News;