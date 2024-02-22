'use server'
import { IBook, IChapter, ILiteracies, IReading, ISing, IWords } from '../types'

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
