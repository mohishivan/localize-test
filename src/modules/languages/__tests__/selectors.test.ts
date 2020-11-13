import { produce } from 'immer';
import * as Selectors from '../selectors';
import { state, listData, State } from '../fixtures';

describe('Selectors', () => {
    describe('Total Progress Avg', () => {
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
    });
    describe('Total Unverified Words', () => {
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
    describe('Language Select Options', () => {
        it('If no languages added then all languages will availbale in select menu', () => {
            const options = Selectors.getSelectOptions(state.languages);
            expect(options.length).toEqual(listData.length);
        });
        it('Only non added languages will be available in select menu', () => {
            const latvian = listData[0];
            const estonian = listData[1];
            const newState: State = produce(state, (draft: State) => {
                draft.languages.list = Array(latvian);
            });

            const options = Selectors.getSelectOptions(newState.languages);
            expect(options.length).toEqual(1);
            expect(options[0].label).toEqual(estonian.name);
        });
    });
});
