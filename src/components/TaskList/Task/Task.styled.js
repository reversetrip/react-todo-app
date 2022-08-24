import styled from 'styled-components';

export const TaskBlock = styled.div`
  padding: 0.5rem;
`;

export const TaskText = styled.span`
  text-decoration: ${props => props.isDone ? 'line-through' : 'none'};

  &:hover {
    font-weight: 500;
    text-shadow: 2px 3px 2px pink;
  };
`;