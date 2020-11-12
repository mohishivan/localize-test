import { LanguageListItem, LanguageState } from './types';

export const listData = [
    {
        name: 'Latvian',
        code: 'lvt',
        wordsToDo: 100,
        progress: 50,
        unverified: 50,
    },
    {
        name: 'Estonian',
        code: 'est',
        wordsToDo: 200,
        progress: 70,
        unverified: 30,
    },
];
export interface State {
    languages: LanguageState;
}
export const state = {
    languages: {
        listData: listData,
        list: [],
        authToken: null,
    },
};
export const list = [
    { name: 'English', code: 'gbr' },
    { name: 'Russian', code: 'rus' },
    { name: 'Latvian', code: 'lva' },
    { name: 'Estonian', code: 'est' },
    { name: 'Chinese', code: 'chn' },
    { name: 'Spanish', code: 'esp' },
    { name: 'Hindi', code: 'ind' },
    { name: 'Italian', code: 'ita' },
    { name: 'Macedonian', code: 'mkd' },
    { name: 'Arabic', code: 'egy' },
    { name: 'Portuguese', code: 'prt' },
    { name: 'French', code: 'fra' },
    { name: 'Ukranian', code: 'ukr' },
    { name: 'Norwegian', code: 'nor' },
    { name: 'Polish', code: 'pol' },
];

export const getLanguageList = (): LanguageListItem[] =>
    list.map(({ name, code }) => ({
        name,
        code,
        progress: Math.floor(Math.random() * 90) + 10,
        wordsToDo: Math.floor(Math.random() * 20000),
        unverified: Math.floor(Math.random() * 12000),
    }));
