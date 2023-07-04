import { ChangeEvent, FC, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react';
import Segment from './Segment';
import Typography from './Text';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>, isNumber?: boolean) => void;
  placeholder?: string;
  subtext?: string;
  css?: any;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
}


const Input: FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  subtext,
  type,
  required,
  css,
  ...props
}) => {
  const theme = useTheme();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      if (isNaN(Number(e.target.value))) {
        return;
      }

      return onChange && onChange(e, true);
    }
  
    onChange && onChange(e);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === 'number') {
      const key = e.key;
      const value = e.currentTarget.value;
      if ((!value || parseFloat(value) === 0) && key === '0') {
        e.preventDefault();
        return;
      }
      if (key.length === 1 && !/^\d$/.test(key)) {
        e.preventDefault();
      }
    }
  };
    

  return (
    <Segment align="flex-start" css={{
      width: '100%',
      padding: '0',
    }}>
      {label && <Label htmlFor={name}>{label}{required && <span css={{ color: 'red' }}> *</span>}</Label>}
      <InputBar
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        type={type}
        {...props}
      />
      {subtext && <Typography variant="sm" color={theme.text.sub}
      css={{
        marginTop: '0.5rem',
        marginLeft: '0.25rem',
      }}
      >{subtext}</Typography>}
    </Segment>
  )
}

export const Label = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.text.plain};
  margin-bottom: 0.5rem;
  margin-left: 0.25rem;
`

const InputBar = styled.input`
    padding: ${props => props.type === 'color' ? '0' : '0.5rem 0.75rem'};
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    font-size: 1rem;
    
    ::placeholder {
      font-style: italic;
      color: ${({ theme }) => theme.text.sub};
    }

    background: ${ props => props.disabled ? useTheme().foreground : useTheme().background };
    color: ${({ theme }) => theme.text.plain};
    border: ${props => props.type === 'color' ? 'none' : '1px solid ' + props.theme.text.sub};
    border-radius: 0.5rem;

    transition: all 0.2s ease-in-out;

    &:focus {
      background: ${({ theme }) => theme.foreground};
      outline: none;
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;  
    }
  
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }
`

export default Input;