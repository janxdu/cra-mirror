import mirror, { actions, connect } from '../../framework/kx-mirrorx';
import AjaxGetPage from '../../page/dataRequest/AjaxGetPage';
import { getHeadAccountInfo as getHeadAccountInfoApi } from '../../service/dataRequest';

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
    async getHeadAccountInfo() {
      actions.ajaxGet.setClickMeLoadingStart(true);
      const response = await getHeadAccountInfoApi();
      actions.ajaxGet.setContent(JSON.stringify(response));
      actions.ajaxGet.setClickMeLoadingEnd(false);
    }
  }
});

export default connect(state => {
  return {
    content: state.ajaxGet.content,
    clickMeLoading: state.ajaxGet.clickMeLoading,
    loadContentSpin: state.loading.effects.ajaxGet.getHeadAccountInfo,
  };
})(AjaxGetPage);
