import React, { useState } from 'react'
import { Box, Center } from '@chakra-ui/react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

interface ModalProps {
  header: string
  isOpen: boolean
  onClose: () => void
  text: string
}
const ModalComponent: React.FC<ModalProps> = ({
  header,
  isOpen,
  onClose,
  text,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>{header}</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              as="span"
              style={{
                color: '#903',
                float: 'left',
                fontFamily: 'Georgia',
                fontSize: '67px',
                lineHeight: '60px',
                paddingTop: '4px',
                paddingRight: '8px',
                paddingLeft: '3px',
              }}
              color="#903"
              fontFamily="Georgia"
              fontSize="67px"
              lineHeight="60px"
              p={1}
            >
              {text.charAt(0)}
            </Box>
            <Box p={1.5}>{text.slice(1)}</Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalComponent
