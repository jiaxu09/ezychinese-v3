'use server'
import {
  Flashcards,
  IBook,
  IChapter,
  ILiteracies,
  IReading,
  ISing,
  IWords,
  Pinyin,
  PinyinCategories,
  QiHunEpisode,
  QiHunEpisodeDetails,
} from '../types'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getChineseBooks = async () => {
  try {
    const data = await fetch(graphqlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetBooks {
              books(where:{isChineseBook:true},orderBy: number_ASC) {
                id
                name
                slug
                imgUrl
              }
            }`,
      }),
    }).then((res) => res.json())

    const books = data.data.books as IBook[]
    return books
  } catch (error) {
    throw Error
  }
}

export const getChaptersByBookId = async (slug: string) => {
  try {
    if (!slug) {
      return
    }
    const data = await fetch(graphqlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetChaptersByBook($slug: String!) {
          chapters(where: { book: { slug: $slug } }) {
            id
            name
            slug
            img {
              url
              width
              height
            }
            book {
              slug
              name
            }
          }
        }`,
        variables: { slug },
      }),
    }).then((res) => res.json())

    const chapters = data.data.chapters as IChapter[]
    return chapters
  } catch (error) {
    throw Error
  }
}

export const getLiteracyByChapter = async (slug: string) => {
  try {
    if (!slug) {
      return
    }
    const data = await fetch(graphqlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetCharactersByChapter($slug: String!) {
          literacies(where: { chapter: { slug: $slug } }) {
            answers
            questions
          }
        }`,
        variables: { slug },
      }),
    }).then((res) => res.json())
    const literacies = data.data.literacies as ILiteracies[]

    return literacies[0]
  } catch (error) {
    throw Error
  }
}

export const getWordsByChapter = async (slug: string) => {
  try {
    if (!slug) {
      return
    }
    const data = await fetch(graphqlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetWordsByChapter($slug: String!) {
          literacies(where: { chapter: { slug: $slug } }) {
            words
            wordsImages {
              height
              width
              url
            }
            wordsAudio {
              url
            }
          }
        }`,
        variables: { slug },
      }),
    }).then((res) => res.json())
    const words = data.data.literacies[0] as IWords
    return words
  } catch (error) {
    throw Error
  }
}

export const getVideoByChapter = async (slug: string) => {
  try {
    if (!slug) {
      return
    }
    const data = await fetch(graphqlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetVideosByChapter($slug: String!) {
          literacies(where: { chapter: { slug: $slug } }) {
            videos
          }
        }`,
        variables: { slug },
      }),
    }).then((res) => res.json())
    const videos = data.data.literacies[0].videos as string[]
    return videos
  } catch (error) {
    throw Error
  }
}

export const getCSOLBooks = async () => {
  try {
    const data = await fetch(graphqlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetBooks {
              books(where:{isChineseBook:false},orderBy: number_ASC) {
                id
                name
                slug
                imgUrl
              }
            }`,
      }),
    }).then((res) => res.json())

    const books = data.data.books as IBook[]
    return books
  } catch (error) {
    throw Error
  }
}

export const getSingByChapter = async (slug: string) => {
  try {
    if (!slug) {
      return
    }
    const data = await fetch(graphqlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetSingByChapter($slug: String!) {
          literacies(where: { chapter: { slug: $slug } }) {
            singMp3 {
              url
            }
            singImg {
              url
              width
              height
            }
          }
        }`,
        variables: { slug },
      }),
    }).then((res) => res.json())

    const sing = data.data.literacies[0] as ISing
    return sing
  } catch (error) {
    throw Error
  }
}

export const getReadingByChapter = async (slug: string) => {
  try {
    if (!slug) {
      return
    }
    const data = await fetch(graphqlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetReadingByChapter($slug: String!) {
          literacies(where: { chapter: { slug: $slug } }) {
            reading
            readingPinyin
            readingEng
            readingMp3 {
              url
            }
          }
        }`,
        variables: { slug },
      }),
    }).then((res) => res.json())
    const reading = data.data.literacies[0] as IReading
    return reading
  } catch (error) {
    throw Error
  }
}

//Videos
export const getQiHunAllEpisodes = async () => {
  try {
    const data = await fetch(graphqlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetQiHunEpisodes {
          hikaruNoGos {
            episode
          }
        }`,
      }),
    }).then((res) => res.json())
    const episodes = data.data.hikaruNoGos as QiHunEpisode[]
    return episodes
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getQiHunEpisodeDetails = async (episode: string) => {
  if (!episode) {
    return
  }
  try {
    const data = await fetch(graphqlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetQiHunEpisodeDetails($episode: String!) {
          hikaruNoGos(where:  {episode: $episode}) {
            episode
            videoId
            pinyinSub
            id
            zhSub
            thumbnail {
              url
              width
              height
            }
            engSub
          }
        }`,
        variables: { episode },
      }),
    }).then((res) => res.json())
    const details = data.data.hikaruNoGos[0] as QiHunEpisodeDetails
    return details
  } catch (error) {}
}

//Tools Pinyin

export const getPinyinByCategory = async (category: PinyinCategories) => {
  try {
    const data = await fetch(graphqlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetPinyinByCategory($category: String!) {
          pinyins(where: { category: $category }, orderBy: number_ASC) {
            id
            name
            number
            subcategory
            tones {
              fileName
              url(transformation: { document: { output: {} } })
            }
            category
          }
        }`,
        variables: { category },
      }),
    }).then((res) => res.json())
    const initials = data.data.pinyins as Pinyin[]
    return initials
  } catch (error) {}
}

//Flashcards

export const getFlashcardsCategories = async () => {
  try {
    const data = await fetch(graphqlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetFlashcardsCategories {
          matchFlashcardCategories {
            categories
          }
        }`,
      }),
    }).then((res) => res.json())
    const {
      data: { matchFlashcardCategories },
    } = data
    const categories = matchFlashcardCategories[0].categories as string[]
    return categories
  } catch (error) {
    throw Error
  }
}
export const getFlashcardsByCategory = async (slug: string) => {
  try {
    const data = await fetch(graphqlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetMatchFlashcardsByCategory($slug: String!) {
          matchFlashcards(where: { slug: $slug }) {
            slug
            words
            wordsImages {
              url
              width
              height
            }
          }
        }`,
        variables: { slug },
      }),
    }).then((res) => res.json())
    const { matchFlashcards } = data.data
    const flashcards = matchFlashcards[0] as Flashcards
    return flashcards
  } catch (error) {
    throw Error
  }
}
