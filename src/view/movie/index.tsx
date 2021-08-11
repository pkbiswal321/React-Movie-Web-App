import React, { useEffect, useState } from 'react'
import Loader from '../../common/Loader'
import { GetMoves } from '../../service/MovieServices'
import MovieDetails from './MovieDetails'

const Movie = () => {
  const [isLoader, setIsLoader] = useState(false)
  const [movieData, setMovieData] = useState([])
  useEffect(() => {
    _getMoves()
  }, [])

  const _getMoves = async () => {
    try {
      setIsLoader(true)
      const response = await GetMoves()
      if (response.status === 200) {
        console.log(response.data)
        setMovieData(response.data)
        setIsLoader(false)
      }
    } catch (error) {
      console.log(error)
      setIsLoader(false)
    }
  }

  return (
    <div>{isLoader ? <Loader /> : <MovieDetails movieData={movieData} />}</div>
  )
}

export default Movie
