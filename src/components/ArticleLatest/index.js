import './latest-news-list.css'
import ArticleItem from "../ArticleItem";
import MainTitle from '../shared/MainTitle'

function ArticleLatest() {
  return (
    <div className="latest-news section">
			<div className="tcl-container">

				<MainTitle>Bài viết mới nhất</MainTitle>

        <div className="latest-news__list spacing">

          <div className="latest-news__card">
            <ArticleItem />
          </div>

          <div className="latest-news__card">
            <ArticleItem />
          </div>

          <div className="latest-news__card">
            <ArticleItem />
          </div>

        </div>
      </div>
    </div>
    
  )
}

export default ArticleLatest