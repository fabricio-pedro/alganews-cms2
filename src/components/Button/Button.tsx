import * as B from './Button.styles';

export interface ButtonProps{
 label:string,
 variant : 'primary' | 'danger' | 'text',
 disabled:boolean
}

export default function Button({label,variant,disabled=false}:ButtonProps){
    return <B.Wrapper variant={variant} disabled={disabled}>
              {label}
           </B.Wrapper>
}