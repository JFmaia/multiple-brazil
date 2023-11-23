import { Box, Text, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function App() {
  return (
    <Box py={4} px={120} shadow={'base'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} bg={"#060118"}>
      <Text color='#fff' fontSize={'1.4rem'} fontFamily={'fantasy'}>Logo</Text>
      <Box display={'flex'} gap={10} alignItems={'center'}>
        <Link to={"/"}>
          <Button size='xs' py={1} px={2} rounded={4} color={'#fff'} bg={"none"} variant='link'> FIPE </Button>
        </Link>
        <Link to={"/"}>
          <Button size='xs' py={1} px={2} rounded={4} color={'#fff'} bg={"none"} variant='link'> CNPJs </Button>
        </Link>
        <Link to={"/"}>
          <Button size='xs' py={1} px={2} rounded={4} color={'#fff'} bg={"none"} variant='link'> Bancos </Button>
        </Link>
        <Link to={"/"}>
          <Button size='xs' py={1} px={2} rounded={4} color={'#fff'} bg={"none"} variant='link'> Registros BRs </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default App
