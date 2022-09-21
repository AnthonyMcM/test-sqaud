import styled from 'styled-components';
import { ICar } from '@test-sqaud/types';

/* eslint-disable-next-line */

const StyledCard = styled.div`
  color: black;
`;

interface ICardData extends Omit<ICar, 'id' | 'price'> {
  price: string;
}

export function Card(props: ICardData) {
  return (
    <StyledCard>
      <div className="ch-card">
        <div className="ch-card__content">
          <h3>{props.make + ' ' + props.model}</h3>
          <p className="ch-mb--2">{props.reg}</p>
          <p className="ch-mb--0">
            <b>{'Price £' + props.price}</b>
          </p>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
