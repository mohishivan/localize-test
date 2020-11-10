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
					<Language language={ language } key={`language-${language.name}`}/>
				)
			})}
			<AddLanguage />
		</Container>
	)
}

const Container = Styled.div`
	display:flex;
	flex-flow:row wrap;
	padding:0px 0px 0px 5px;
	height:min-content;
	flex-grow:1;
`

export default connect((state:AppState) => ({
	list: state.languages.list,
}))(LanguagesList)
