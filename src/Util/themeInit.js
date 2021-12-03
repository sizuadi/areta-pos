export const initApp = () => {
  window['KTApp'].init();
  window['KTMenu'].createInstances();
  window['KTDrawer'].createInstances();
  window['KTScroll'].createInstances();
  window['KTScrolltop'].createInstances();
  window['KTSticky'].createInstances();
};
