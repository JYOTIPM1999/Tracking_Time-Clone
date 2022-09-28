import { Button, Heading, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

export default function ProductPage() {
    const { isOpen, onOpen, onClose } = useDisclosure()

  
    return (
      <>
        <Heading onClick={onOpen}>
         Tasks
        </Heading>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>My Tasks</DrawerHeader>
             
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}


  
 
      
 