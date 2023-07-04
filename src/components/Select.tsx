import { ChangeEvent, FC, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react';
import Segment from './Segment';
import Typography from './Text';
import { Label } from './Input';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  subtext?: string;
  required?: boolean;
  children?: React.ReactNode;
}

const Select: FC<SelectProps> = ({
  label,
  name,
  value,
  onChange,
  subtext,
  required,
  children,
  ...props
}) => {

  const theme = useTheme();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
  }

  return (
    <Segment align="flex-start" css={{
      width: '100%',
      padding: '0',
    }}>
      {label && <Label htmlFor={name}>{label}{required && <span css={{ color: 'red' }}> *</span>}</Label>}
      <SelectInput onChange={handleChange} name={name} id={name}>
        {children}
      </SelectInput>
      {subtext && <Typography variant="sm" color={theme.text.sub}>{subtext}</Typography>}
    </Segment>
  )
}

const SelectInput = styled.select`
    padding: 0.5rem 0.75rem;
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    font-size: 1rem;

    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text.plain};
    border: 1px solid ${({ theme }) => theme.text.sub};
    border-radius: 0.5rem;

    cursor: pointer;

    transition: all 0.2s ease-in-out;

    &:focus {
      background: ${({ theme }) => theme.foreground};
      outline: none;
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;  
    }
`

export default Select;