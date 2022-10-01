import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Features() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Menu 
      isOpen={isOpen}>
        <MenuButton
        mt={1}
          variant="ghost"
          as={Button}
          rightIcon={<ChevronDownIcon />}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          _hover={{ color: "#EC545A" }}
          p={0}
        >
          <Text fontSize={"12px"} color="#252854">
            FEATURES
          </Text>
        </MenuButton>
        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} p={0}>
          <MenuItem
            _hover={{
              borderRadius: "7px",
              bg: "#EC545A",
              color: "white",
            }}
          >
            <Text
              color="252854"
              _hover={{ color: "#969bd2" }}
              as="b"
              fontWeight={"700px"}
            >
              Time tracker
            </Text>
          </MenuItem>
          <MenuItem
            _hover={{
              borderRadius: "7px",
              bg: "#EC545A",
              color: "white",
            }}
          >
            <Text
              color="252854"
              _hover={{ color: "#969bd2" }}
            
              as="b"
            >
              Project Management
            </Text>
          </MenuItem>
          <MenuItem
            _hover={{
              borderRadius: "7px",
              bg: "#EC545A",
              color: "white",
            }}
          >
            <Text
              color="252854"
              _hover={{ color: "#969bd2" }}
              as="b"
            >
              Online Timesheet
            </Text>
          </MenuItem>
          <MenuItem
            _hover={{
              borderRadius: "7px",
              bg: "#EC545A",
              color: "white",
            }}
          >
            <Text
              color="252854"
              _hover={{ color: "#969bd2" }}
              as="b"
            >
              Time cards
            </Text>
          </MenuItem>
          <MenuItem
            _hover={{
              borderRadius: "7px",
              bg: "#EC545A",
              color: "white",
            }}
          >
            <Text
              color="252854"
              _hover={{ color: "#969bd2" }}
              as="b"
            >
              Attendance Tracking
            </Text>
          </MenuItem>
          <MenuItem
            _hover={{
              borderRadius: "7px",
              bg: "#EC545A",
              color: "white",
            }}
          >
            <Text
              color="252854"
              _hover={{ color: "#969bd2" }}
              as="b"
            >
              Time Reporting
            </Text>
          </MenuItem>
         
        </MenuList>
      </Menu>
    </>
  );
}
