import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CompOneComponent } from './comp-one.component';

export default {
  title: 'CompOneComponent',
  component: CompOneComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<CompOneComponent>;

const Template: Story<CompOneComponent> = (args: CompOneComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
