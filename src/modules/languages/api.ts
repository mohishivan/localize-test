import { getLanguageList } from './fixtures';

// eslint-disable-next-line
export const fetchLanguages = (authToken: string) => {
    const list = getLanguageList();
    return list;
};
