import * as Selectors from "../selectors";
import { getLanguageList } from "../fixtures";

const listData = getLanguageList();
const state = {
	languages: {
		listData: listData,
		list: [],
	},
};
describe("Selectors", () => {
	it("getTotalProgress return 0 when no languages in the list", () => {
		const totalProgress = Selectors.getTotalProgress(state);
		expect(totalProgress).toEqual(0);
	});
});
