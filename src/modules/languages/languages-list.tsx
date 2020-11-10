import * as React from 'react';
import Styled from 'styled-components'
import { connect } from 'react-redux'
import Language from './languages-item'
import AddLanguage from './add-language'
import { LanguageListItem } from './types'
import {AppState} from '../../store'

interface connectedProps {
	list: LanguageListItem[];
}

type Props = connectedProps 
const LanguagesList = (props: Props) => {
	const { list }  = props
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

export default connect((state:AppState) => ({
	list: state.languages.list,
}))(LanguagesList)
