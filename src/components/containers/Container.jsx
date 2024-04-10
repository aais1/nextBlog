import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-[95vw] md:w-[80vw] mt-14 mx-auto'>
        {children}
    </div>
  )
}

export default Container