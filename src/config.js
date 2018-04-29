const BASE_API_URL = '/';

const MENU_DATA = [
  {
    name: '组件',
    path: '/component',
    key: 'component',
    subMenus: [
      {
        name: '通用',
        path: '/common',
        key: 'component-common',
        menuItems: [
          {
            name: '登录框',
            path: '/login',
            key: 'component-common-login',
          },
          {
            name: '带提示的图标',
            path: '/iconLabel',
            key: 'component-common-iconLabel',
          },
          {
            name: '货币显示',
            path: '/money',
            key: 'component-common-money',
          }
        ],
      }
    ],
  },
  {
    name: '常见布局',
    path: '/commonLayout',
    key: 'commonLayout',
    subMenus: [
      {
        name: '页面',
        path: '/page',
        key: 'commonLayout-page',
        menuItems: [
          {
            name: 'Header+Footer',
            path: '/headerFooter',
            key: 'commonLayout-page-headerFooter',
          },
          {
            name: '左侧边栏',
            path: '/sidebar',
            key: 'commonLayout-page-sidebar',
          }
        ],
      },
      {
        name: '组件',
        path: '/component',
        key: 'commonLayout-component',
        menuItems: [
          {
            name: '项目条目',
            path: '/item',
            key: 'commonLayout-component-item',
          },
          {
            name: '项目详情',
            path: '/detail',
            key: 'commonLayout-component-detail',
          }
        ],
      }
    ],
  },
  {
    name: '数据请求',
    path: '/dataRequest',
    key: 'dataRequest',
    subMenus: [
      {
        name: 'AJAX请求',
        path: 'ajax',
        key: 'dataRequest-ajax',
        menuItems: [
          {
            name: 'Get',
            path: '/get',
            key: 'dataRequest-ajax-get',
          },
          {
            name: 'Post',
            path: '/post',
            key: 'dataRequest-ajax-post',
          }
        ]
      },
      {
        name: '文件',
        path: 'file',
        key: 'dataRequest-file',
        menuItems: [
          {
            name: '上传',
            path: '/upload',
            key: 'dataRequest-file-upload',
          }
        ]
      }
    ]
  },
  {
    name: '预载/切换',
    path: '/loading',
    key: 'loading',
    subMenus: [
      {
        name: '转转转',
        path: '/spin',
        key: 'loading-spin',
        menuItems: [
          {
            name: '页面',
            path: '/page',
            key: 'loading-spin-page',
          },
          {
            name: '片段',
            path: '/fragment',
            key: 'loading-spin-fragment',
          },
        ]
      }
    ]
  },
  {
    name: '表单',
    path: '/forms',
    key: 'forms',
    subMenus: [
      {
        name: '校验',
        path: '/validation',
        key: 'forms-validation',
        menuItems: [
          {
            name: '普通校验',
            path: '/general',
            key: 'forms-validation-general',
          },
          {
            name: 'AJAX校验',
            path: '/ajax',
            key: 'forms-validation-ajax',
          }
        ]
      },
      {
        name: '表单布局',
        path: '/layout',
        key: 'forms-layout',
        menuItems: [
          {
            name: 'Label/Value',
            path: '/labelValue',
            key: 'forms-layout-labelValue',
          }
        ]
      }
    ]
  }
];

export { BASE_API_URL, MENU_DATA };
