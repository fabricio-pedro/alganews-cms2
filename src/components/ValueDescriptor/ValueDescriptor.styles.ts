import styled from "styled-components";

const COLORS={
  primary:'#274060',
  default:'#0099FF'
}

export const Wrapper=styled.div<{color:'primary'|'default'}>`
  display: flex;
  flex-direction: column;
  gap:2px;
  
  span.description{
    line-height: 14.4px;
    font-size: 12px;
    font-weight: 400;
  }
  div.valueContainer{
    font-size: 18px;
    line-height: 21.6px;
    font-weight: 900;
    color:${p=>COLORS[p.color]}
  }

`;