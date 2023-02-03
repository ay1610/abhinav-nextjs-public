import { SetStateAction, useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { Button, ButtonGroup } from '@chakra-ui/react'

interface DateSelectorProps {
  onDateSelectorChange: (date: Date | null) => void
  dateOnly?: boolean
}
const DateSelector = (props: DateSelectorProps) => {
  const startDate = new Date()
  const tomorrow = new Date(Date.now() + 3600 * 1000 * 24)
  const onDateChange = (date: Date | null) => {
    props.onDateSelectorChange(date)
  }
  const dateOnly = (
    <DatePicker
      selected={startDate}
      onChange={onDateChange}
      maxDate={new Date()}
      customInput={
        <Button colorScheme="blue" size="md">
          Select a Date
        </Button>
      }
      disabledKeyboardNavigation
      fixedHeight
      withPortal
    />
  )
  const DateTime = (
    <DatePicker
      selected={tomorrow}
      onChange={onDateChange}
      showTimeSelect
      timeFormat="h:mm aa"
      timeIntervals={30}
      customInput={
        <Button colorScheme="blue" size="md">
          Select a Date
        </Button>
      }
      disabledKeyboardNavigation
      fixedHeight
      withPortal
    />
  )
  return props.dateOnly ? dateOnly : DateTime
}

export default DateSelector
