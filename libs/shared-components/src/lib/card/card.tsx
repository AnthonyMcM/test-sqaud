import styled from 'styled-components';

/* eslint-disable-next-line */

const StyledCard = styled.div`
  color: black;
`;

interface ICardData extends Omit<MyNamespace.ICar, 'id'> {
  price: number;
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
