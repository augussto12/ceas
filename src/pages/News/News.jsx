import { useNavigate } from "react-router-dom"
import { newsData } from "../../utils/newsData"
import "./News.css"

function News() {
    const navigate = useNavigate()

    return (
        <main className="news-page">
            <h2>Noticias recientes</h2>
            <div className="news-grid">
                {newsData.map((n) => (
                    <div key={n.id} className="news-card" onClick={() => navigate(`/news/${n.id}`)}>
                        <img src={n.image} alt={n.title} />
                        <div className="news-content">
                            <h3>{n.title}</h3>
                            <p>{n.description}</p>
                            <span className="read-more">Leer más →</span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default News
