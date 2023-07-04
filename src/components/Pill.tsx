import styled from "@emotion/styled";

const Pill = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background: ${props => props.theme.text.dim};
  color: ${props => props.theme.text.plain};
  font-size: 0.8rem;

  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
`

export default Pill