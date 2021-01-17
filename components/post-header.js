import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0 justify-center">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
        <div className="mb-6 text-lg justify-center">
          <h1><DateFormatter dateString={date} /></h1>
        </div>
    </div>
  )
}
