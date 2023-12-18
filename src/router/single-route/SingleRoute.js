import React from 'react'
import { useParams } from 'react-router-dom'
function SingleRoute({data}) {
    const params = useParams()
   const oneItem = data.find((el) => el.id === params.idx)
   console.log(oneItem);
  return (
    <div></div>
  )
}

export default SingleRoute