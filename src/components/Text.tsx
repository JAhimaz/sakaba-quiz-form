import styled from "@emotion/styled";

type TypographyProps = {
  children?: React.ReactNode;
  variant?: 'major' | 'title' | 'subtitle' | 'body' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  weight?: 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold';
  color?: string;
}

const Typography = styled.span((props : TypographyProps) => ({
  fontSize: props.variant === 'major' ? '3.5rem' :
    props.variant === 'title' ? '2rem' :
    props.variant === 'subtitle' ? '1.5rem' :
    props.variant === 'body' ? '1rem' :
    props.variant === 'xl' ? '1.5rem' :
    props.variant === 'lg' ? '1.25rem' :
    props.variant === 'md' ? '1rem' :
    props.variant === 'sm' ? '0.875rem' :
    props.variant === 'xs' ? '0.75rem' :
    '1rem',

  fontWeight: props.weight === 'light' ? 300 :
    props.weight === 'regular' ? 400 :
    props.weight === 'medium' ? 500 :
    props.weight === 'semi-bold' ? 600 :
    props.weight === 'bold' ? 700 :
    400,

  '@media (max-width: 768px)': {
  fontSize: props.variant === 'major' ? '3rem' :
      props.variant === 'title' ? '1.5rem' :
      props.variant === 'subtitle' ? '1.25rem' :
      props.variant === 'body' ? '1rem' :
      props.variant === 'xl' ? '1.25rem' :
      props.variant === 'lg' ? '1.125rem' :
      props.variant === 'md' ? '1rem' :
      props.variant === 'sm' ? '0.875rem' :
      props.variant === 'xs' ? '0.75rem' :
      '1rem',
  },

  color: props.color ? props.color : 'inherit'
}))

export default Typography;