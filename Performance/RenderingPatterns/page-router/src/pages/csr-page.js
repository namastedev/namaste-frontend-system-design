import Image from "next/image";
import { useEffect, useState } from "react";

const Tutorials = ({ video }) => {
  return (
    <li className="mb-6">
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80"
      >
        <Image
          src={video.image}
          alt={video.title}
          width={420}
          height={200}
          className="mb-4 rounded-md"
        />
        <h4>{video.title}</h4>
        <div>
          {video.views} &bull; {video.published}
        </div>
      </a>
    </li>
  );
};

export default function Home() {
  const [videos, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:4000/tutorials");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    })();
  }, []);

  return (
    <>
      <h1>Tutorials</h1>
      <ul>
        {videos?.map((video, index) => (
          <Tutorials video={video} key={index} />
        ))}
      </ul>
    </>
  );
}
