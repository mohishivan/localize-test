import React, { FC } from 'react';

import { GlobalStyles } from 'globalStyles';
import * as S from './styles';

const App: FC = () => {
  return (
    <S.Wrapper>
      <GlobalStyles />
      <S.Description>
        Ready to dev with Typescript, styled-components, eslint, prettier,
        stylelint, and absolute paths :)
      </S.Description>
    </S.Wrapper>
  );
};

export default App;
