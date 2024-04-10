import Card from '@/components/card/Card'
import Link from 'next/link'

const page = () => {
  const slug="adc";
  return (
    <div className='flex flex-wrap gap-x-8 gap-y-4 justify-center'>
      <Link href={`./blogs/${slug}`}>
        <Card/>
      </Link>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default page