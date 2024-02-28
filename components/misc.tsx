import React from 'react'
import {
  Apple,
  Bean,
  Beef,
  Fish,
  Flower,
  Leaf,
  Send,
  Squirrel,
  Turtle,
} from 'lucide-react'

const Misc = () => {
  return (
    <div>
      <Bean className="absolute bottom-[12%] left-[30%] text-wuzzy" />
      <Beef className="absolute -bottom-[12%] left-[20%] text-pastelblue" />
      <Apple className=" absolute top-[12%] right-[30%] text-green" />
      <Fish className=" absolute -bottom-[32%] right-[25%] text-pewterblue" />
      <Flower className=" absolute top-[22%] left-[15%] text-pastelblue" />
      <Leaf className=" absolute top-[42%] right-[5%] text-crayola" />
      <Send className=" absolute bottom-[12%] right-[15%] text-skyblue" />
      <Squirrel className=" absolute top-[68%] right-[19%] text-neutral" />
      <Turtle className=" absolute bottom-[8%] right-[49%] text-skyblue" />
    </div>
  )
}

export default Misc
