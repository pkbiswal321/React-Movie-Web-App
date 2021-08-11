import axios from 'axios'

export const GetMoves = async function () {
  const url = 'http://api.tvmaze.com/schedule?country=US&date=2020-12-01'
  try {
    const response = await axios({
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'Application/json',
      },
    })
    const responseStatus = response.status
    console.log('Status Code for ' + url + ':' + responseStatus)
    return response
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
      return error.response
    }
  }
}
