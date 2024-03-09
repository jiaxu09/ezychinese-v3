import React from 'react'
import {
  Banana,
  Bone,
  Cake,
  CandyCane,
  Cherry,
  Coffee,
  CupSoda,
  Egg,
  Gift,
  Hop,
  Lollipop,
  PartyPopper,
  Popcorn,
  Snail,
  Wheat
} from 'lucide-react'
const Misc2 = () => {
  return (
    <div>
      <Lollipop className='absolute right-[13%] top-[0%] rotate-12 text-destructive' />
      <Egg className='absolute left-[19%] top-[10%] rotate-45 text-green' />
      <Bone className='absolute right-[30%] top-[12%] rotate-45 text-crayola' />
      <PartyPopper className='absolute bottom-[22%] left-[10%] rotate-12 text-crayola' />
      <Cake className='absolute bottom-[19%] right-[2%] rotate-0 text-skyblue' />
      <Gift className='absolute bottom-[12%] left-[30%] rotate-180 text-crayola' />
      <Banana className='absolute right-[0%] top-[19%] rotate-90 text-crayola' />
      <Snail className='absolute bottom-[32%] right-[7%] rotate-90 text-pewterblue' />
      <Wheat className='absolute bottom-[42%] left-[0%] rotate-0 text-green' />
      <Hop className='absolute bottom-[20%] right-[16%] rotate-12 text-primary' />
      <Popcorn className='absolute left-[30%] top-[22%] rotate-90 text-pewterblue' />
      <Coffee className='absolute -left-[10%] top-[22%] rotate-0 text-destructive' />
      <Cherry className='absolute -right-[10%] bottom-[2%] rotate-12 text-success' />
      <CupSoda className='absolute bottom-[20%] left-[25%] rotate-45 text-primary' />
      <CandyCane className='absolute left-[5%] top-[20%] rotate-45 text-crayola' />
    </div>
  )
}

export default Misc2
