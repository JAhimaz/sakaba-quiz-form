import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  color?: string;
}

const Button = styled.button((props : ButtonProps) => ({
  display: 'inline-block',
  padding: '1rem 1rem',
  border: 'none',
  borderRadius: '0.5rem',
  cursor: 'pointer',

  // color: 'black',
  fontWeight: 'bold',
  backgroundColor: useTheme().text.highlight,

  color: 'black',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    opacity: 0.5,
  },
}))

export default Button