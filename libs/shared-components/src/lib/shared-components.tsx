import * as React from 'react';
import styled from 'styled-components';
import { EMainHeadingColor } from '@test-sqaud/types';

const StyledMainHeading = styled.div`
  color: blue;
`;

export function MainHeading(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <StyledMainHeading>
      <h1 {...props}>{props.children}</h1>
    </StyledMainHeading>
  );
}

export default MainHeading;
