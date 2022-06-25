import { DetailedHTMLProps } from 'react';
import * as B from './Button.styles';

export interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
 label:string,
 variant : 'primary' | 'danger' | 'text',

}

export default function Button({label,variant,ref,...props}:ButtonProps){
    return <B.Wrapper 
             variant={variant} 
             {...props}>
              {label}
          </B.Wrapper>
}