import * as React from 'react';
import styled from 'styled-components';
import { EMainHeadingColor } from '@test-sqaud/types';

const StyledMainHeading = styled.div<{ headingColor: EMainHeadingColor }>`
  /* color: blue; */
  color: ${(props) => props.headingColor};
`;

interface IHeadingColor {
  /**
   * A great description of the props
   */
  headingColor?: EMainHeadingColor;
}

export function MainHeading(
  props: IHeadingColor & React.HTMLAttributes<HTMLHeadingElement>
) {
  return (
    <StyledMainHeading
      headingColor={props.headingColor || EMainHeadingColor.BLUE}
    >
      <h1 {...props}>{props.children}</h1>
    </StyledMainHeading>
  );
}

export default MainHeading;
