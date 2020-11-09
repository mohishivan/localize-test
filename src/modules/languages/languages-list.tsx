import * as React from 'react';
import Styled from 'styled-components'
import Language from './languages-item'
import { LanguageListItem } from './types'

interface connectedProps {
	listData: LanguageListItem[];
	list: LanguageListItem[];
}

type Props = connectedProps 
const LanguagesList = (props: Props) => {
	const { list, listData }  = props
	return(
		<Container>
			{ listData.map(language => {
				return(
					<Language language={ language }/>
				)
			})}
		</Container>
	)
}

const Container = Styled.div`
	display:flex;
	flex-grow:1;
	flex-flow:row wrap;
`

export default LanguagesList
