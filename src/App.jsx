import { Box, Text, Button} from '@chakra-ui/react'
function App() {
  return (
    <Box pt={4} pb={4} pr={120} pl={120} shadow={'base'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} bg={"#060118"}>
      <Text color='#fff' fontSize={'1.4rem'} fontFamily={'fantasy'}>Logo</Text>
      <Box display={'flex'} gap={10} alignItems={'center'}>
        <Button p={1} rounded={4} color={'#fff'} bg={"none"} border={1}> Page one </Button>
        <Button p={1} rounded={4} color={'#fff'} bg={"none"} border={1}> Page two </Button>
        <Button p={1} rounded={4} color={'#fff'} bg={"none"} border={1}> Page tree </Button>
        <Button p={1} rounded={4}  color={'#fff'} bg={'none'} border={1}> Page four </Button>
      </Box>
    </Box>
  )
}

export default App
