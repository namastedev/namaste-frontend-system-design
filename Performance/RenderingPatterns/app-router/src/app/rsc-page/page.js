import { Tutorials } from '../tutorial'

async function fetchVideos() {
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  const videos = await fetch('http://localhost:4000/tutorials').then((res) =>
    res.json()
  )
  return videos
}

export default async function RscPage() {
  console.log('Where did you render?');
  const videos = await fetchVideos();
  return (
    <>
    <h1>Tutorials</h1>
      {videos.map((video, index) => (
        <Tutorials video={video}  key={index}/>
      ))}
    </>
  )
}