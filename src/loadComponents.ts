export const loadComponents = () => {
    const components = import.meta.glob('./components/*.tsx', { eager: true });
    return Object.entries(components).map(([path, module]) => {
      const componentName = path.split('/').pop().replace('.tsx', '');
      const {component, properties } = module.default;
      return { name: componentName, component, properties };
    });
  };