import TagLink from "./TagLink";
import Dashboard from "../../assets/images/dashboard.svg"

import { BrowserRouter } from 'react-router-dom';
import { addDecorator } from '@storybook/react';



export default {
  title: "Components/Tag Link",
  component: TagLink,
  tags: ["autodocs"]
};
addDecorator(storyFn => (
  <BrowserRouter>{storyFn()}</BrowserRouter>
));
const Template = args => <TagLink {...args} />

export const Default = Template.bind({})
Default.args = {
    icon: Dashboard,
    name: "Default Link",
    path: "/",
    isActive: false
}

export const Active = Template.bind({})
Active.args = {
    icon: Dashboard,
    name: "Active Link",
    path: "/",
    isActive: true

}
