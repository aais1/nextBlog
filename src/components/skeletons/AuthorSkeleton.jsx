import Skeleton from 'react-loading-skeleton'

const AuthorSkeleton = () => {
  return (
    <div className='flex items-center gap-x-8'>
        <Skeleton count={1} width={60} height={60} className='rounded-full'/>
        <div>
            <Skeleton count={1} width={50}  />
            <Skeleton count={1} width={50}  />
        </div>
        <div>
            <Skeleton count={1} width={50}  />
            <Skeleton count={1} width={50}  />
        </div>
    </div>
  )
}

export default AuthorSkeleton