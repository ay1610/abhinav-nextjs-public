import { Center } from '@chakra-ui/react'
import React from 'react'
import ContentLoader from 'react-content-loader'
import { Spinner } from '@chakra-ui/react'

const ImageContentLoader = () => {
  return (
    <>
      <Center>
        <Spinner
          thickness="8px"
          speed="0.55s"
          emptyColor="gray.200"
          color="blue.500"
          label="Loading..."
          w={48}
          h={48}
        />
      </Center>
    </>
  )
}

export default ImageContentLoader
