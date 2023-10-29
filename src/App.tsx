import { Button, ButtonGroup, Center, Heading, Text } from "@yamada-ui/react"
import { useState } from "react"

function App() {
  const [count, setCount] = useState<number>(0)
  const handlePlus = () => setCount(prev => prev + 1)
  const handleMinus = () => {
    if(count === 0) return
    setCount(prev => prev - 1)
  }
  return (
    <Center w='100vw' h='100svh' flexDir='column'>
      <Heading>Hello <Text as='span' color='blue'>Yamada</Text> <Text as='span' color="green">UI</Text></Heading>
      <Heading size='md'>カウント：<Text as='span' color='red.700'>{count}</Text></Heading>
      <ButtonGroup isAttached variant='outline'>
        <Button onClick={handlePlus} colorScheme="blue">+</Button>
        <Button onClick={handleMinus}  colorScheme="red">-</Button>
      </ButtonGroup>
    </Center>
  )
}

export default App
