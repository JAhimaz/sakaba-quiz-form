import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const Footer = () => {

  const theme = useTheme()

  return (
    <FooterContainer>
      <span css={{
        color: theme.text.dim,
        fontStyle: 'italic',
      }}>Ramen Projects | GMFlip</span>
    </FooterContainer>
  )
}

const FooterContainer = styled.section`
  bottom: 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none; /* Standard syntax */
`

export default Footer