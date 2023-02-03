import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import ImageContentLoader from './ImageContentLoader'
import ModalImage from 'react-modal-image'
import YouTube from 'react-youtube'
import ReactPlayer from 'react-player'

interface MediaProps {
  media: Media
  fullImage?: boolean
}

interface Media {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

const MediaDisplay = (props: MediaProps) => {
  return (
    <>
      <Flex flex={1} height="95vh" justifyContent="center" alignItems="center">
        {props.media ? (
          props.media.media_type === 'image' ? (
            <Box>
              <ModalImage
                small={props.media.url}
                medium={props.media.url}
                large={props.media.hdurl}
                alt={props.media.title}
              />
            </Box>
          ) : (
            <Box p={1} width="50vw">
              <ReactPlayer url={props.media.url} controls={true} playing />
            </Box>
          )
        ) : (
          <Box width="50vw">
            <ImageContentLoader />
          </Box>
        )}
      </Flex>
    </>
  )
}

export default MediaDisplay
