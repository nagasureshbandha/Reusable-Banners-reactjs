import './index.css'

const BannerCardItem = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
