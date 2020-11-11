import * as Selectors from "../selectors";
import { getLanguageList, state, listData, list } from "../fixtures";
import { produce } from "immer";

describe("Selectors", () => {
	it("getTotalProgress return 0 when no languages in the list", () => {
		const totalProgress = Selectors.getTotalProgress(state);
		expect(totalProgress).toEqual(0);
	});
	it("getTotalProgress return avg progress of all languages", () => {
		const new_state = produce(state, (draft) => {
			draft.languages.list = listData;
		});
		const totalProgress = Selectors.getTotalProgress(new_state);
		const item1Progress = new_state.languages.list[0].progress;
		const item2Progress = new_state.languages.list[1].progress;
		const listLength = new_state.languages.list.length;
		expect(totalProgress).toEqual((item1Progress + item2Progress) / listLength);
	});
	it("getTotalUnverified return 0 when no languages in the list", () => {
		const totalUnverified = Selectors.getTotalUnverified(state);
		expect(totalUnverified).toEqual(0);
	});
	it("getTotalUnverified return total unverified of all languages", () => {
		const new_state = produce(state, (draft) => {
			draft.languages.list = listData;
		});
		const totalUnverified = Selectors.getTotalUnverified(new_state);
		const item1Unverified = new_state.languages.list[0].unverified;
		const item2Unverified = new_state.languages.list[1].unverified;
		expect(totalUnverified).toEqual((item1Unverified + item2Unverified));
	});
});
