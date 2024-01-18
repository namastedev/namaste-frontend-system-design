export default function SkeletonScreen() {
    return (
      <>
        {Array(6)
          .fill(6)
          .map((index) => (
            <li className='my-5' key={index}>
              <div className='bg-[#DDDDDD] rounded-md w-[420px] mb-4 h-[200px] '></div>
              <div className='bg-[#DDDDDD] rounded-md h-[20px] w-2/3 mb-2'></div>
              <div className='bg-[#DDDDDD] rounded-md h-[20px] w-11/12 mb-2'></div>
              <div className='bg-[#DDDDDD] rounded-md h-[20px] w-1/2'></div>
            </li>
          ))}
      </>
    )
  }