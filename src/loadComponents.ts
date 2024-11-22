export const loadComponents = () => {
    const components = import.meta.glob('./components/*.tsx', { eager: true });
    return Object.entries(components).map(([path, module]) => {
      const componentName = path.split('/').pop().replace('.tsx', '');
      return { name: componentName, component: module.default };
    });
  };