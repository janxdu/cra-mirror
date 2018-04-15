import modelFun from './model';


export default function loading(options = {}) {
  // function to generate both "show" & "hide" reducers
  const createLoadingAction = (show) => (state, { namespace, action }) => {
    const next = Object.assign({}, state, {
      global: show,
      models: Object.assign({}, state.models, { [namespace]: show }),
    });
    if (options.effects) {
      next.effects = Object.assign({}, state.effects, {
        [namespace]: Object.assign({}, state.effects[namespace], {
          [action]: show
        })
      });
    }
    return next;
  };

  const model = {
      name: options.name,
      initialState: {
        global: false,
        models: {},
        effects: {}
      },
      reducers: {
        show: createLoadingAction(true),
        hide: createLoadingAction(false),
      }
    }
  ;
  // instantiate model
  modelFun(model);
}
