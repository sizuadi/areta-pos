export const toggle = () => {
  const element = document.body;
  const attribute = "data-kt-aside-minimize";
  const value = "on";

  !element.hasAttribute(attribute) 
    ? element.setAttribute(attribute, value) 
    : element.removeAttribute(attribute);
}