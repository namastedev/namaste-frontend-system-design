// "use client";
import Image from 'next/image';
export const Tutorials = ({ video }) => {
  console.log('Where did you render - tutorials? ')
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