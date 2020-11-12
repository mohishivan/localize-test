import { produce } from 'immer';
import * as Selectors from '../selectors';
import { state, listData, State } from '../fixtures';

describe('Selectors', () => {
    it('getTotalProgress return 0 when no languages in the list', () => {
        const totalProgress = Selectors.getTotalProgress(state.languages);
        expect(totalProgress).toEqual(0);
    });
    it('getTotalProgress return avg progress of all languages', () => {
        const newState: State = produce(state, (draft: State) => {
            draft.languages.list = listData;
        });
        const totalProgress = Selectors.getTotalProgress(newState.languages);
        const item1Progress = newState.languages.list[0].progress;
        const item2Progress = newState.languages.list[1].progress;
        const listLength = newState.languages.list.length;
        expect(totalProgress).toEqual((item1Progress + item2Progress) / listLength);
    });
    it('getTotalUnverified return 0 when no languages in the list', () => {
        const totalUnverified = Selectors.getTotalUnverified(state.languages);
        expect(totalUnverified).toEqual(0);
    });
    it('getTotalUnverified return total unverified of all languages', () => {
        const newState: State = produce(state, (draft: State) => {
            draft.languages.list = listData;
        });
        const totalUnverified = Selectors.getTotalUnverified(newState.languages);
        const item1Unverified = newState.languages.list[0].unverified;
        const item2Unverified = newState.languages.list[1].unverified;
        expect(totalUnverified).toEqual(item1Unverified + item2Unverified);
    });
});
