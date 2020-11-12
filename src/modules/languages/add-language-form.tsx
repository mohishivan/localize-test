import * as React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Styled from "styled-components";
import { connect } from "react-redux";
import { LanguageListItem } from "./types";
import * as Actions from "./actions";
import * as Types from "./types";
import { Button } from "./styled";
import { AppState } from "store";

interface StateProps {
	listData: LanguageListItem[];
	list: LanguageListItem[];
}
interface DispatchProps {
	addLanguage(payload: Types.AddLanguagePayload): Types.AddLanguageAction;
}
interface OwnProps {
	toggleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IOption {
	label: string;
	value: string;
}

type Props = StateProps & DispatchProps & OwnProps;

const animatedComponents = makeAnimated();

const selectStyles = {
	control: (styles: any) => ({
		...styles,
		font: "300 14px Rubik",
	}),
	option: (styles: any) => ({
		...styles,
		font: "300 14px Rubik",
	}),
	multiValue: (styles: any) => ({
		...styles,
		font: "300 16px Rubik",
		padding: "2px 4px",
		borderRadius: "5px",
	}),
};

const AddLanguageForm = (props: Props) => {
	const { listData, list, addLanguage, toggleOpen } = props;
	const [selected, select] = React.useState<LanguageListItem[]>([]);

	const selectLanguage = React.useCallback(
		(values: IOption[]) => {
			if (values === null) {
				return;
			}
			const languages = listData.filter((l) =>
				values.map((i) => i.value).includes(l.name)
			);
			if (!languages) {
				console.log({ values });
				return;
			}
			select(languages);
		},
		[select, listData]
	);

	const options = React.useMemo(() => {
		return listData
			.filter((lang) => !list.map((l) => l.name).includes(lang.name))
			.map((lang) => ({ value: lang.name, label: lang.name }));
	}, [listData, list]);
	
	return (
		<ModalStyles>
			<h1>Add languages</h1>
			<Select
				closeMenuOnSelect={false}
				components={animatedComponents}
				options={options}
				styles={selectStyles}
				onChange={(val: any) => selectLanguage(val)}
				isMulti
			/>
			<Buttons>
				<Button ml="10px" onClick={() => toggleOpen(false)}>
					Close
				</Button>
				<Button
					ml="10px"
					className="primary"
					onClick={() => {
						addLanguage({ languages: selected });
						toggleOpen(false);
					}}
				>
					Add
				</Button>
			</Buttons>
		</ModalStyles>
	);
};
const ModalStyles = Styled.div`
	display:flex;
	flex-flow:column;
	h1 {
		margin:5px 0px 20px 0px;
		font:400 22px Rubik;
	}
`;
const Buttons = Styled.div`
	display:flex;
	flex-flow:row;
	justify-content:flex-end;
	margin:30px 0px;
`;

const mapState = (state: AppState) => ({
	listData: state.languages.listData,
	list: state.languages.list,
});

const mapDispatch = { addLanguage: Actions.addLanguage };

export default connect(mapState, mapDispatch)(AddLanguageForm);
