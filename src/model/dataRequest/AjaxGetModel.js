import mirror, { actions, connect } from '../../framework/kx-mirrorx';
import AjaxGetPage from '../../page/dataRequest/AjaxGetPage';

mirror.model({
  name: 'ajaxGet',
  initialState: {
    clickMeLoading: false,
    content: '',
  },

  reducers: {
    setClickMeLoadingStart(oldState, data) {
      return {
        ...oldState,
        clickMeLoading: data,
      };
    },
    setClickMeLoadingEnd(oldState, data) {
      return {
        ...oldState,
        clickMeLoading: data,
      };
    },
    setContent(oldState, data) {
      return {
        ...oldState,
        content: data,
      };
    },
  },

  effects: {
    async loadContent(data) {
      actions.ajaxGet.setClickMeLoadingStart(true);

    }
  }
});

export default connect(state => {
  return {
    content: state.ajaxGet.content,
    clickMeLoading: state.ajaxGet.clickMeLoading,
    loadContentSpin: state.loading.effects.ajaxGet.loadContent,
  };
})(AjaxGetPage);
