import mirror, { connect } from '../../framework/kx-mirrorx';
import AjaxPostPage from '../../page/dataRequest/AjaxPostPage';

mirror.model({
  name: 'ajaxPost',
  initialState: {
    clickMeLoading: false,
    content: '',
  },

  reducers: {},

  effects: {}
});

export default connect(state => {
  return {
    content: state.ajaxPost.content,
    clickMeLoading: state.ajaxPost.clickMeLoading,
  };
})(AjaxPostPage);
