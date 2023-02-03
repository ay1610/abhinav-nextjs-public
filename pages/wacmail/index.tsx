import { Box, Button, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import DateSelector from '../../componets/DateSelector'
import { CheckCircleIcon } from '@chakra-ui/icons'
import dayjs from 'dayjs'
import axios from 'axios'
import { Grechen_Fuemen } from '@next/font/google'

function Wacmail() {
  const onDateSelectorChange = (date: Date | null) => {
    setDate(date)
    setDateString(dayjs(date).format('DD - MMM hh:mm A '))
    setIsDisabled(false)
  }

  const [isDisabled, setIsDisabled] = useState(true)

  const onSendMail = () => {
    console.log('send mail', dateString)
    const message = `Can you please reserve  a racquetball court for ${dateString} for 2 hours`
    axios
      .post('/api/mail', {
        message: message,
      })
      .then(function (response) {
        setDone(true)
        setIsDisabled(true)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const [dateString, setDateString] = React.useState<string>('')
  const [date, setDate] = React.useState<Date | null>(null)
  const [done, setDone] = React.useState<boolean>(false)
  return (
    <Box
      height="100vh"
      bg={`linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Heading p={4}>Racquetball Court Reservation </Heading>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <DateSelector
          onDateSelectorChange={onDateSelectorChange}
          dateOnly={false}
        />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        Date for the booking : {dateString}
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" p={4}>
        <Button
          colorScheme="blue"
          size="md"
          onClick={onSendMail}
          disabled={isDisabled}
        >
          Send mail
        </Button>
        <Box p={5}>{done ? <CheckCircleIcon color="green.500" /> : null}</Box>
      </Box>
    </Box>
  )
}

export default Wacmail
