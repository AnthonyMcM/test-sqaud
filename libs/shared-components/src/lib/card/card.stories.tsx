import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './card';

export default {
  component: Card,
  title: 'Card',
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  make: 'BMW',
  model: '1 Series',
  reg: 'B24 XPC',
  price: '1000',
};
