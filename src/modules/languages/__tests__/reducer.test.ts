import { produce } from 'immer';
import { LanguageReducer } from '../reducer';
import * as Actions from '../actions';
import { LanguageState } from '../types';
import { listData } from '../fixtures';

describe('Reducer', () => {
    let state: LanguageState;
    beforeEach(() => {
        state = {
            listData,
            list: [],
            authToken: null,
        };
    });
    it('Add Language reducer', () => {
        const latvian = listData[0];
        const addAction = Actions.addLanguageAttempt({ languages: Array(latvian) });
        const stateA = LanguageReducer(state, addAction);
        const stateB = produce(state, (draft: LanguageState) => {
            draft.list = Array(latvian);
        });
        expect(stateA).toMatchObject(stateB);
    });
    it('Remove Language reducer', () => {
        const latvian = listData[0];
        const removeAction = Actions.removeLanguage({ name: latvian.name });
        const stateA = produce(state, (draft: LanguageState) => {
            draft.list = Array(latvian);
        });
        const stateB = LanguageReducer(stateA, removeAction);
        expect(stateB).toMatchObject(state);
    });
    it('Fetch Languages reducer', () => {
        const fetchAction = Actions.putLanguages({ languages: listData });
        const stateA = produce(state, (draft: LanguageState) => {
            draft.listData = [];
        });
        expect(stateA.listData.length).toEqual(0);
        const stateB = LanguageReducer(stateA, fetchAction);
        expect(stateB).toMatchObject(state);
    });
});
