import styled from "styled-components";

interface HeadingProps{

    level: 1 | 2 | 3,
    children:React.ReactNode

}


export default function Heading({level, children}:HeadingProps){
    const Component=({
        1:Heading1,
        2:Heading2,
        3:Heading3
    }[level])
    return <Component>
              {children}
          </Component>

}

const Heading1=styled.h1`
    color:#274060;
    font-size: 36px;
    font-weight: 900;
`;
const Heading2=styled.h2`
    color:#274060;
    font-size: 24px;
    font-weight: 900;
`;
const Heading3=styled.h3`
    color:#274060;
    font-size: 18px;
    font-weight: 900;
    
`;

