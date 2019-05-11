import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = resource => {
  const [resources, setResources] = useState([])

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    )
    setResources(response.data)
  }
  // option to remove fetchResource and immediatly evoke in useEffect ()(resource)
  useEffect(() => {
    fetchResource(resource)
  }, [resource])

  return resources
}

export default useResources
