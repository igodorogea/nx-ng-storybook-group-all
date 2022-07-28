import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CompTwoComponent } from './comp-two.component';

export default {
  title: 'CompTwoComponent',
  component: CompTwoComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<CompTwoComponent>;

const Template: Story<CompTwoComponent> = (args: CompTwoComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
