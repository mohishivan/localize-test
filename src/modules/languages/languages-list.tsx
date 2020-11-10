import * as React from 'react';
import Styled from 'styled-components'
import Language from './languages-item'
import AddLanguage from './add-language'
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
			{ list.map(language => {
				return(
					<Language language={ language }/>
				)
			})}
			<AddLanguage />
		</Container>
	)
}

const Container = Styled.div`
	display:flex;
	flex-grow:1;
	flex-flow:row wrap;
`

export default LanguagesList
