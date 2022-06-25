import styled from "styled-components"
import {transparentize} from 'polished'


const COLOR={
    primary:'#0099FF',
    red: '#F84735',
    foreground:'#508AC9'

}


const THEME={
    primary:{
      bg:'#0099FF',
      color:'#FFFFFF',  
      onHover:`
        box-shadow: 0 3px 6px rgba(0,0,0,0.2)
      `,
      disabled:{
        bg:transparentize(0.44,COLOR.primary),
        color:'#FFFFFF', 
    }
    },
    danger:{
      bg:'#F84735',
      color:'#FFFFFF',
      onHover:`
        box-shadow: 0 3px 6px rgba(0,0,0,0.2)
      `,
      disabled:{
        bg:transparentize(0.75,COLOR.red),
        color:'#F84735', 
    }
    },
    text:{
      bg:'transparent',
      color:'#274060', 
      onHover:`
        border-color:#274060
      `,
      disabled:{
        bg:transparentize(0.44,COLOR.foreground),
        color:'#274060', 
        
    } 
    } 
    
}

export const Wrapper=styled.button<{
    variant:'primary'| 'danger' | 'text'}>`
    border: 1px solid ${p=>THEME[p.variant].bg};
    padding: 0.375rem 0.5rem 0.25rem;
    color:${p=>THEME[p.variant].color};
    background:${p=>THEME[p.variant].bg};
    cursor: pointer;
    &:hover,
    &:focus{
    ${p=>THEME[p.variant].onHover}
    }
    &:disabled{
      background-color:${p=>THEME[p.variant].disabled.bg};
      color:${p=>THEME[p.variant].disabled.color};
      pointer-events: none;
      border:transparent
    }

    `;
