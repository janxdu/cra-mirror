import { actions } from './actions';
import loading from './loading';
// Registry of namespaced effects
import { models } from './model';

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

  loadingModel.initialState.effects[namespace] = {};
  effects[name] = async function (props) {
    actions.loading.show({ namespace, action });
    await handler(props);
    actions.loading.hide({ namespace, action });
  };
};
