import { ComponentStory, ComponentMeta } from '@storybook/react';
import ValueDescriptor from '../components/ValueDescriptor/ValueDescriptor';

export default {
    title: 'Example/ValueDescriptor',
    component: ValueDescriptor,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    
  } as ComponentMeta<typeof ValueDescriptor>;

  const Template: ComponentStory<typeof ValueDescriptor> = (args) => <ValueDescriptor {...args} />;

  export const PrimaryWithCurrency = Template.bind({});

  PrimaryWithCurrency.args = {
   description:'Ganhos no mês',
   value:560322.02,
   isCurrency: true,
   color: 'primary'

  }

  export const PrimaryWithoutCurrency = Template.bind({});

  PrimaryWithoutCurrency.args = {
    description:'Ganhos no mês',
    value:560322.02,
    color: 'primary'
  }

  export const DefaultWithCurrency = Template.bind({});
  
  DefaultWithCurrency.args = {
   description:'Ganhos no mês',
   value:560322.02,
   isCurrency: true,
   color: 'default'
  }


  export const DefaultWithoutCurrency = Template.bind({});

  DefaultWithoutCurrency.args = {
    description:'Ganhos no mês',
    value:560322.02,
    color: 'default'
  }