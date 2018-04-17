import { actions } from './actions';
import loading from './loading';
// Registry of namespaced effects
import { models } from './model';
import sagaMiddleware from './sagaMiddleware';

const isGenerator = (fn) => (
  fn && fn.constructor && fn.constructor.name === 'GeneratorFunction'
);

let loadingModel = null;

export const effects = {};
export const addEffect = effects => (name, handler) => {
  if (loadingModel == null) {
    loading({ name: 'loading' });
    models.forEach(function (model) {
      if (model.name === 'loading') {
        loadingModel = model;
      }
    });
  }

  let idx = name.indexOf('/');
  let namespace = name.substring(0, idx);
  let action = name.substring(idx + 1);

  if (!loadingModel.initialState.effects[namespace]) {
    loadingModel.initialState.effects[namespace] = {};
  }

  if (isGenerator(handler)) {
    if (action !== 'rootSaga') {
      effects[name] = (...p) => {
        actions.loading.show({ namespace, action });
        let task = sagaMiddleware.run(handler, ...p);
        task.done.then(function () {
          actions.loading.hide({ namespace, action });
        }).catch(function () {
          actions.loading.hide({ namespace, action });
        });
      };
    }
  } else {
    effects[name] = async function (props) {
      actions.loading.show({ namespace, action });
      await handler(props);
      actions.loading.hide({ namespace, action });
    };
  }
};
