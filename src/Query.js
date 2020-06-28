import React, { useState, useEffect } from 'react'

const fetchURL = async urlData => {
  if (typeof urlData === `string`) {
    const response = await fetch(urlData)
    return await response.json()
  } else if (typeof urlData === `object` && urlData !== null) {
    const {
      body,
      method,
      headers,
      url
    } = urlData

    const options = {
      method: method || `GET`,
      ...(headers || {}),
    }

    if (options.method !== `GET`) {
      options.body = JSON.stringify(body || {})
    }

    const response = await fetch(url, options)
    return await response.json()
  } else {
    throw new Error(
      `Check URL type. URL has to be a string or an object. Got ${urlData}`
    )
  }
}

const Query = ({ children, urls }) => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    if (Array.isArray(urls)) {
      Promise.allSettled(
        urls.map(async url => await fetchURL(url)))
          .then(res => setData(res)
      )
    } else if (
      typeof urls === `string` ||
      (typeof urls === `object` && urls !== null)
    ) {
      const data = await fetchURL(urls)
      setData(data)
    } else {
      throw new Error(
        `urls ${urls} have wrong data type. It has to be a string, array or an object.`
      )
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {Array.isArray(children) ?
        React.Children.map(children, child => (
          React.cloneElement(child, { data })
        )) :
        React.cloneElement(children, { data })}
    </>
  )
}

export default Query