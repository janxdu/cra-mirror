const BASE_API_URL = '/';

const MENU_DATA = [
  {
    name: '组件',
    path: '/component',
    subMenus: [
      {
        name: '通用',
        path: '/common',
        menuItems: [
          {
            name: '登录框',
            path: '/login',
          },
          {
            name: '带提示的图标',
            path: '/iconLabel',
          },
          {
            name: '货币显示',
            path: '/money',
          }
        ],
      }
    ],
  },
  {
    name: '常见布局',
    path: '/commonLayout',
    subMenus: [
      {
        name: '页面',
        path: '/page',
        menuItems: [
          {
            name: 'Header+Footer',
            path: '/headerFooter',
          },
          {
            name: '左侧边栏',
            path: '/sidebar',
          }
        ],
      },
      {
        name: '组件',
        path: '/component',
        menuItems: [
          {
            name: '项目条目',
            path: '/item',
          },
          {
            name: '项目详情',
            path: '/detail',
          }
        ],
      }
    ],
  },
  {
    name: '数据请求',
    path: '/dataRequest',
    subMenus: [
      {
        name: 'AJAX请求',
        path: 'ajax',
        menuItems: [
          {
            name: 'Get',
            path: '/get'
          },
          {
            name: 'Post',
            path: '/post'
          }
        ]
      },
      {
        name: '文件',
        path: 'file',
        menuItems: [
          {
            name: '上传',
            path: '/upload'
          }
        ]
      }
    ]
  },
  {
    name: '预载/切换',
    path: 'loading',
    subMenus: [
      {
        name: '转转转',
        path: '/spin',
        menuItems: [
          {
            name: '页面',
            path: '/page'
          },
          {
            name: '片段',
            path: '/fragment'
          },
        ]
      }
    ]
  },
  {
    name: '表单',
    path: '/forms',
    subMenus: [
      {
        name: '校验',
        path: '/validation',
        menuItems: [
          {
            name: '普通校验',
            path: '/general'
          },
          {
            name: 'AJAX校验',
            path: '/ajax'
          }
        ]
      },
      {
        name: '表单布局',
        path: '/layout',
        menuItems: [
          {
            name: 'Label/Value',
            path: '/labelValue'
          }
        ]
      }
    ]
  }
];

export { BASE_API_URL };
