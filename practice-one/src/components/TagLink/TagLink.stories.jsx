import TagLink from "./TagLink";
import Dashboard from "../../assets/images/dashboard.svg"

export default {
  title: "Components/Tag Link",
  component: TagLink,
  tags: ["autodocs"]
};

const Template = args => <TagLink {...args} />

export const Default = Template.bind({})
Default.args = {
    icon: Dashboard,
    name: "Default Link",
}

export const Active = Template.bind({})
Active.args = {
    icon: Dashboard,
    name: "Active Link",
    iconStyle: {
      filter: "invert(29%) sepia(55%) saturate(2618%) hue-rotate(228deg) brightness(87%) contrast(93%)",
    },
    nameStyle: {
      color: "var(--cl-tag-link)",
    },
}
