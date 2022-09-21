import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CarForm } from './car-form';

export default {
  component: CarForm,
  title: 'CarForm',
} as ComponentMeta<typeof CarForm>;

const Template: ComponentStory<typeof CarForm> = (args) => (
  <CarForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
