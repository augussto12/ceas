import { useParams, useNavigate } from "react-router-dom"
import { newsData } from "../../utils/newsData"
import "./NewsDetails.css"


function NewsDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const news = newsData.find(n => n.id === parseInt(id))

  if (!news) return <p>Noticia no encontrada</p>

  return (
    <main className="news-detail">
      <button className="back-button" onClick={() => navigate(-1)}>← Volver</button>
      <h2>{news.title}</h2>
      <img src={news.image} alt={news.title} />
      <p>{news.content}</p>
    </main>
  )
}

export default NewsDetail;
