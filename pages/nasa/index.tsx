import { Box, Button, Center, Flex, Image, Spacer } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'
import DateSelector from '../../componets/DateSelector'
import axios from 'axios'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { useState, useEffect } from 'react'
import MediaDisplay from '../../componets/MediaDisplay'
import ModalComponent from '../../componets/ModalComponent'
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

dayjs.extend(advancedFormat)

function NasaPhotoDay() {
  const nasaApiKey = 'SURXHjJCbrSNA0J1aFGebDZThhGUyf2q0UxyuGRc'
  const url = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`
  const [data, setData] = useState<any>()
  const [date, setDate] = useState<Date | null>(new Date())
  const [loading, setLoading] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [header, setHeader] = useState<string>('')

  useEffect(() => {
    setLoading(true)
    axios
      .get<Media>(`${url}&date=${dayjs(date).format('YYYY-MM-DD')}`)
      .then((res) => {
        setData(res.data)
        const timer = setTimeout(() => setLoading(true), 10000)
        console.log('this data', res.data)
        setHeader(res.data.title)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }, [date])

  const onDateSelectorChange = (date: Date | null) => {
    setDate(date)
  }
  const learnMoreClickHandler = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)
  return (
    <>
      <Flex minH="100%" direction={['column', 'row']}>
        <Box
          bgImage={`linear-gradient(to bottom, #0c0620, #1a75ff, #204048, #2c5364, #3b6269)`}
          width={['100%', '50%']}
          p={2}
          color="white"
        >
          <Center>
            <Flex
              flex={1}
              height="98vh"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Text fontSize="2em">{dayjs(date).format('MMM Do, YYYY')}</Text>
              </Box>
              <Heading>{header}</Heading>
              <Flex direction="row" justifyContent="center">
                <Box p={4}>
                  <DateSelector
                    onDateSelectorChange={onDateSelectorChange}
                    dateOnly={true}
                  />
                </Box>
                <Box p={4}>
                  <Button
                    colorScheme="linkedin"
                    onClick={learnMoreClickHandler}
                  >
                    Learn More
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Center>
        </Box>
        <Box bg="black" p={1.5}>
          <MediaDisplay media={data} fullImage={false} />
        </Box>
      </Flex>
      <Box>
        <ModalComponent
          header={data ? data.title : 'Loading...'}
          isOpen={isModalOpen}
          onClose={closeModal}
          text={data ? data.explanation : 'Loading...'}
        ></ModalComponent>
      </Box>
    </>
  )
}
export default NasaPhotoDay
