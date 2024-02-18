import React from 'react'
import Lottie from 'lottie-react'
import welldone from '@/lib/welldone.json'
const WellDone = () => {
  return <Lottie animationData={welldone} loop={true} />
}

export default WellDone
