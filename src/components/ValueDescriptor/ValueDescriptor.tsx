import * as VD from './ValueDescriptor.styles';


interface ValueDescriptorProps{
  description: string;
  isCurrency?: boolean;
  value:number;
  color:'primary' | 'default'  


}

export default function ValueDescriptor({description,isCurrency,value,color}:ValueDescriptorProps){

    return <VD.Wrapper color={color}>
             
             <span className='description'>{description}</span>
            <div className='valueContainer'>
             {
              isCurrency &&
              <span className='currency'>
                 {'R$'}
              </span>  

             }
              <span className="value">{value.toLocaleString()}</span>
           </div>
          </VD.Wrapper>

}