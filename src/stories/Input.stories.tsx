import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../components/Input/Input';

export default {
    title: 'Example/Input',
    component: Input,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
  
  
    },
  } as ComponentMeta<typeof Input>;

  const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;


  export const WithPlaceholder = Template.bind({})
  WithPlaceholder.args = {
  placeholder: 'e.g.: Jon Doe'
}
 export const WithPlaceholderAndLabel = Template.bind({});
 WithPlaceholderAndLabel.args = {
    label:"Name",
    placeholder:'e.g.: Jon Doe'
 }

 export const WithLabelAndContent = Template.bind({})
WithLabelAndContent.args = {
  label: 'Name',
  value: 'Jon Doe'
}

export const WithContent = Template.bind({})
WithContent.args = {
  value: 'Jon Doe'
} 

 

  
