import {Button} from '@chakra-ui/react'
import React from 'react'

function ButtonComponent({handleClick}) {
	return (
		<Button colorScheme='blue' onClick={handleClick}>
			Search
		</Button>
	)
}

export default ButtonComponent
