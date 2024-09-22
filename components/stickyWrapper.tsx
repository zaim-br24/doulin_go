import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function StickyWrapper({children}: Props) {
  return (
      <div className='hidden lg:block w-[368px] sticky self-end bottom-6'>
          <div className='min-h-[calc(100vh-48px)] flex flex-col gap-y-4 sticky top-6 '>
              {children}
          </div>
    </div>
  )
}
