import Image from 'next/image';

const Tutorials = ({ video }) => {
  return (
      <li className='mb-6'>
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:opacity-80'
        >
          <Image
            src={video.image}
            alt={video.title}
            width={420}
            height={200}
            className='mb-4 rounded-md'
          />
          <h4>{video.title}</h4>
          <div>
            {video.views} &bull; {video.published}
          </div>
        </a>
      </li>
  )
}

export default function Home({ videos }) {
  return (
    <>
    <h1>Tutorials</h1>
    <ul>
        {videos?.map((video, index) => (
          <Tutorials video={video} key={index} />
        ))}
      </ul>
    </>
  )
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const res = await fetch('http://localhost:4000/tutorials');
  const videos = await res.json()
  // Pass data to the page via props
  return { props: { videos } }
}