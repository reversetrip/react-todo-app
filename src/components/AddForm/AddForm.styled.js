import styled from 'styled-components';

export const NewTaskSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;