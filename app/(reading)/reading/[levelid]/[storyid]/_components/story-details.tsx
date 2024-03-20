'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import Story from './story'
import EnglishStory from './english-story'
import Grammar from './grammar'
import Exercise from './exercises'

const reading = {
  zh_title: '盘古开天辟地',
  en_title: 'Pangu Separates the Sky from the Earth',
  story: [
    {
      zh: ['很', '久', '以', '前'],
      pinyin: ['hěn', 'jiǔ', 'yǐ', 'qián'],
      en: 'long ago'
    },
    {
      zh: ['，'],
      pinyin: ['，'],
      en: ','
    },
    {
      zh: ['天', '地'],
      pinyin: ['tiān', 'dì'],
      en: 'heaven and earth'
    },
    {
      zh: ['还', '是'],
      pinyin: ['hái', 'shì'],
      en: 'still'
    },
    {
      zh: ['一', '片'],
      pinyin: ['yī', 'piàn'],
      en: 'a'
    },
    {
      zh: ['混', '沌'],
      pinyin: ['hùn', 'dùn'],
      en: 'chaos'
    },
    {
      zh: ['。'],
      pinyin: ['。'],
      en: '.'
    },
    {
      zh: ['盘', '古'],
      pinyin: ['pán', 'gǔ'],
      en: 'Pangu'
    },
    {
      zh: ['住'],
      pinyin: ['zhù'],
      en: 'lived'
    },
    {
      zh: ['在'],
      pinyin: ['zài'],
      en: '(located) at;in'
    },
    {
      zh: ['里', '面'],
      pinyin: ['lǐ', 'miàn'],
      en: 'inside'
    },
    {
      zh: ['，'],
      pinyin: ['，'],
      en: ','
    },
    {
      zh: ['他'],
      pinyin: ['tā'],
      en: 'he'
    },
    {
      zh: ['睡', '了'],
      pinyin: ['shuì', 'le'],
      en: 'slept'
    },
    {
      zh: ['1', '8', '0', '0', '0', '年'],
      pinyin: ['1', '8', '0', '0', '0', 'nián'],
      en: '18,000 years'
    },
    {
      zh: ['。'],
      pinyin: ['。'],
      en: '.'
    },
    {
      zh: ['一', '天'],
      pinyin: ['yī', 'tiān'],
      en: 'one day'
    },
    {
      zh: ['，'],
      pinyin: ['，'],
      en: ','
    },
    {
      zh: ['他'],
      pinyin: ['tā'],
      en: 'he'
    },
    {
      zh: ['醒', '来'],
      pinyin: ['xǐng', 'lái'],
      en: 'woke up'
    },
    {
      zh: ['，'],
      pinyin: ['，'],
      en: ','
    },
    {
      zh: ['用', '力'],
      pinyin: ['yòng', 'lì'],
      en: 'pushed'
    },
    {
      zh: ['推', '开'],
      pinyin: ['tuī', 'kāi'],
      en: 'pushed away'
    },
    {
      zh: ['天', '和', '地'],
      pinyin: ['tiān', 'hé', 'dì'],
      en: 'heaven and earth'
    },
    {
      zh: ['。'],
      pinyin: ['。'],
      en: '.'
    },
    {
      zh: ['他', '的'],
      pinyin: ['tā', 'de'],
      en: 'his'
    },
    {
      zh: ['头', '顶', '天'],
      pinyin: ['tóu', 'dǐng', 'tiān'],
      en: 'head in the sky'
    },
    {
      zh: ['，'],
      pinyin: ['，'],
      en: ','
    },
    {
      zh: ['脚', '踏', '地'],
      pinyin: ['jiǎo', 'tà', 'dì'],
      en: 'feet on the ground'
    },
    {
      zh: ['，'],
      pinyin: ['，'],
      en: ','
    },
    {
      zh: ['每', '天'],
      pinyin: ['měi', 'tiān'],
      en: 'Every day'
    },
    {
      zh: ['天', '升'],
      pinyin: ['tiān', 'shēng'],
      en: 'sky rises'
    },
    {
      zh: ['一', '丈'],
      pinyin: ['yī', 'zhàng'],
      en: 'one fathom'
    },
    {
      zh: ['，'],
      pinyin: ['，'],
      en: ','
    },
    {
      zh: ['地', '降'],
      pinyin: ['dì', 'jiàng'],
      en: 'earth descends'
    },
    {
      zh: ['一', '丈'],
      pinyin: ['yī', 'zhàng'],
      en: 'one fathom'
    },
    {
      zh: ['。'],
      pinyin: ['。'],
      en: '.'
    },
    {
      zh: ['经', '过'],
      pinyin: ['jīng', 'guò'],
      en: 'After'
    },
    {
      zh: ['1', '8', '0', '0', '0', '年'],
      pinyin: ['1', '8', '0', '0', '0', 'nián'],
      en: '18,000 years'
    },
    {
      zh: ['，'],
      pinyin: ['，'],
      en: ','
    },
    {
      zh: ['天', '高', '地', '厚'],
      pinyin: ['tiān', 'gāo', 'dì', 'hòu'],
      en: 'the sky and the earth are thick (idiom)'
    },
    {
      zh: ['，'],
      pinyin: ['，'],
      en: ','
    },
    {
      zh: ['万', '物', '生', '长'],
      pinyin: ['wàn', 'wù', 'shēng', 'zhǎng'],
      en: 'Everything grows'
    },
    {
      zh: ['。'],
      pinyin: ['。'],
      en: '.'
    },
    {
      zh: ['盘', '古'],
      pinyin: ['pán', 'gǔ'],
      en: 'Pangu'
    },
    {
      zh: ['也', '变', '成', '了'],
      pinyin: ['yě', 'biàn', 'chéng', 'le'],
      en: 'also became'
    },
    {
      zh: ['山', '川', '河', '流'],
      pinyin: ['shān', 'chuān', 'hé', 'liú'],
      en: 'mountains and rivers'
    },
    {
      zh: ['，'],
      pinyin: ['，'],
      en: ','
    },
    {
      zh: ['给', '我', '们', '留', '下', '了'],
      pinyin: ['gěi', 'wǒ', 'men', 'liú', 'xià', 'le'],
      en: 'leaving us with a '
    },
    {
      zh: ['美', '丽', '的', '世', '界'],
      pinyin: ['měi', 'lì', 'de', 'shì', 'jiè'],
      en: 'beautiful world'
    },
    {
      zh: ['。'],
      pinyin: ['。'],
      en: '.'
    },
    {
      zh: ['孩', '子', '们'],
      pinyin: ['hái', 'zi', 'men'],
      en: 'Children'
    },
    {
      zh: ['，'],
      pinyin: ['，'],
      en: ','
    },
    {
      zh: ['你', '们', '知', '道', '吗'],
      pinyin: ['nǐ', 'men', 'zhī', 'dào', 'ma'],
      en: 'Did you know that'
    },
    {
      zh: ['？'],
      pinyin: ['？'],
      en: '?'
    },
    {
      zh: ['这', '就', '是'],
      pinyin: ['zhè', 'jiù', 'shì'],
      en: 'This is the '
    },
    {
      zh: ['中', '国', '古', '代', '的'],
      pinyin: ['zhōng', 'guó', 'gǔ', 'dài', 'de'],
      en: 'ancient Chinese'
    },
    {
      zh: ['创', '世', '故', '事'],
      pinyin: ['chuàng', 'shì', 'gù', 'shì'],
      en: 'creation story'
    },
    {
      zh: ['。'],
      pinyin: ['。'],
      en: '.'
    }
  ],
  en_story:
    'Long ago, the heavens and earth were in chaos. Pangu lived inside it, and he slept for 18,000 years. One day, he woke up and pushed the heavens and earth apart with all his might. His head held up the sky, and his feet stood on the earth. Each day, the sky rose by one zhang, and the earth sank by one zhang. After 18,000 years, the sky was high, the earth was thick, and all things grew. Pangu also turned into mountains and rivers, leaving us a beautiful world. Children, do you know? This is an ancient Chinese creation story.',
  grammar: [
    {
      zh: '主谓句：如 “盘古住在里面”。',
      en: 'Subject-Verb Sentence: A basic sentence structure where the subject is followed by a verb, e.g., “盘古住在里面” (Pangu lived inside).'
    },
    {
      zh: '时间状语：如 “很久以前”，“一天”。',
      en: 'Time Adverbial: Words or phrases that indicate time, e.g., “很久以前” (A long time ago), “一天” (One day).'
    },
    {
      zh: '动词短语：如 “用力推开”。',
      en: 'Verb Phrase: A phrase consisting of a verb and its objects or complements, e.g., “用力推开” (forcefully pushed open).'
    },
    {
      zh: '连词：如 “和”。',
      en: 'Conjunction: Words that connect clauses or sentences, e.g., “和” (and).'
    },
    {
      zh: '数量词+量词：如 “18000年”，“一丈”。',
      en: 'Numeral + Measure Word: A combination used to express quantity, e.g., “18000年” (18000 years), “一丈” (one zhang, a unit of length).'
    },
    {
      zh: '比较结构：如 “天高地厚”。',
      en: 'Comparative Structure: A structure used to compare two things, e.g., “天高地厚” (the sky is high and the earth is thick).'
    },
    {
      zh: '被动句：虽然故事中没有直接使用被动句，但 “盘古也变成了山川河流” 这句话可以引导学生学习被动句的用法。',
      en: 'Passive Sentence: Although not directly used in the story, the sentence “盘古也变成了山川河流” (Pangu also turned into mountains and rivers) can lead students to learn about passive sentences.'
    }
  ],
  exercise: [
    {
      type: 'Vocabulary Exercise',
      question:
        "What does the word '混沌' (hùn dùn) mean in the context of the story?",
      options: ['Bright', 'Chaos', 'Creation', 'Sleep'],
      answer: 2
    },
    {
      type: 'Grammar Exercise',
      question:
        "Which of the following sentences uses the same grammatical structure as '盘古住在里面' (Pán gǔ zhù zài lǐ miàn)?",
      options: [
        '我们走在路上 (Wǒmen zǒu zài lù shàng)',
        '他们是学生 (Tāmen shì xuéshēng)',
        '你吃饭了吗？(Nǐ chīfàn le ma?)',
        '明天会下雨 (Míngtiān huì xiàyǔ)'
      ],
      answer: 1
    },
    {
      type: 'Reading Comprehension Exercise',
      question: 'How long did Pangu sleep according to the story?',
      options: ['18 years', '1800 years', '18000 years', '180000 years'],
      answer: 3
    },
    {
      type: 'Grammar Exercise',
      question:
        "In the phrase '经过18000年，天高地厚' (Jīngguò 18000 nián, tiān gāo dì hòu), what does '经过' indicate?",
      options: ['Duration', 'Cause', 'Contrast', 'Result'],
      answer: 1
    },
    {
      type: 'Story Understanding Exercise',
      question: 'What did Pangu become after separating heaven and earth?',
      options: [
        'A mountain and a river',
        'The sun and the moon',
        'The stars in the sky',
        'The plants and animals'
      ],
      answer: 1
    }
  ]
}

const tabs = ['Story', 'English Story', 'Grammar', 'Exercise']

interface StoryDetailsProps {
  levelId: string
  storyId: string
}
const StoryDetails = ({ levelId, storyId }: StoryDetailsProps) => {
  return (
    <div className='flex flex-col space-y-4 md:py-2'>
      <h3 className=' text-center text-lg font-medium'>{reading.zh_title}</h3>
      <p className=' text-center'>{reading.en_title}</p>
      <Tabs defaultValue='Story' className='mx-auto w-full md:w-4/5'>
        <TabsList className='grid w-full grid-cols-3 gap-2 md:grid-cols-4'>
          {tabs.map(tab => (
            <TabsTrigger key={tab} value={tab}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent className='w-full  py-4' value='Story'>
          <Story story={reading.story} />
        </TabsContent>
        <TabsContent className='w-full  py-4' value='English Story'>
          <EnglishStory story={reading.en_story} />
        </TabsContent>
        <TabsContent className='w-full  py-4' value='Grammar'>
          <Grammar grammar={reading.grammar} />
        </TabsContent>
        <TabsContent className='w-full  py-4' value='Exercise'>
          <Exercise exercises={reading.exercise} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default StoryDetails
