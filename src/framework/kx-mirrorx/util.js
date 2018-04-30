const isGenerator = (fn) => (
  fn && fn.constructor && fn.constructor.name === 'GeneratorFunction'
);

export {isGenerator};
