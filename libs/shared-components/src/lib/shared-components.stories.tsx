import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainHeading } from './shared-components';

enum EMainHeadingColor {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
}

export default {
  component: MainHeading,
  title: 'MainHeading',
  argTypes: {
    headingColor: {
      control: 'radio',
      options: Object.values(EMainHeadingColor),
    },
  },
} as ComponentMeta<typeof MainHeading>;

const Template: ComponentStory<typeof MainHeading> = (args) => (
  <MainHeading {...args} />
);

export const PrimaryDisplay = Template.bind({});
PrimaryDisplay.args = { children: 'Test Heading' };

export const LongTextDisplay = Template.bind({});
LongTextDisplay.args = {
  children: 'Realllllllllyyyyyyyyyyyy loooooooonnnggggg text',
  headingColor: EMainHeadingColor.RED,
};

export const DangerHeading = Template.bind({});
DangerHeading.args = {
  children: 'Warning: are you sure?',
  headingColor: EMainHeadingColor.RED,
};
