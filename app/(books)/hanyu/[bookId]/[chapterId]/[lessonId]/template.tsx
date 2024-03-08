import React, { ReactNode } from 'react'

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <div className="animate-fade animate-ease-in-out animate-normal">
      {children}
    </div>
  )
}

export default Template
