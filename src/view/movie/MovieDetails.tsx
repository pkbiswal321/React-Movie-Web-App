import React from 'react'
import './style/MovieDetails.css'

export interface movieDataDetails {
  id: number
  name: string
  show: {
    image?: {
      medium: string
    }
  }
  url: string
}

export interface MovieDetailsProps {
  movieData: Array<movieDataDetails>
}

const MovieDetails = ({ movieData }: MovieDetailsProps) => {
  // console.log('movieData', movieData)
  return (
    <div className="container">
      {movieData.length > 0 &&
        movieData.map((item) => {
          return (
            <div key={item.id}>
              <div className="card">
                <div className="circle">
                  <img src={item.show.image?.medium} alt="" />
                </div>
                <div className="content">
                  <h5>{item.name}</h5>
                  <a href={item.url} target="_blank">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default MovieDetails
