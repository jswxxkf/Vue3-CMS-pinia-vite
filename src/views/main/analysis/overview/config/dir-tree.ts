export const directoryTree = `
├─.husky
│  │  commit-msg
│  │  pre-commit
│  │
│  └─_
│          .gitignore
│          husky.sh
│
├─.vscode
│      settings.json
│
├─public
│      favicon.ico
│
└─src
    │  App.vue
    │  env.d.ts
    │  main.ts
    │
    ├─assets
    │  ├─css
    │  │      base.less
    │  │      index.less
    │  │
    │  └─img
    │          login-bg.svg
    │          logo.svg
    │
    ├─base-ui
    │  ├─breadcrumb
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      breadcrumb.vue
    │  │  │
    │  │  └─types
    │  │          index.ts
    │  │
    │  ├─card
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          card.vue
    │  │
    │  ├─descriptions
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          descriptions.vue
    │  │
    │  ├─echart
    │  │  │  index.ts
    │  │  │
    │  │  ├─data
    │  │  │      china.json
    │  │  │
    │  │  ├─hooks
    │  │  │      use-echart.ts
    │  │  │
    │  │  └─src
    │  │          base-echart.vue
    │  │
    │  ├─editor
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          editor.vue
    │  │
    │  ├─form
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      form.vue
    │  │  │
    │  │  └─types
    │  │          index.ts
    │  │
    │  ├─table
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      table.vue
    │  │  │
    │  │  └─types
    │  │          type.ts
    │  │
    │  └─text-link
    │      │  index.ts
    │      │
    │      └─src
    │              text-link.vue
    │
    ├─components
    │  ├─nav-header
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          nav-header.vue
    │  │          user-info.vue
    │  │
    │  ├─nav-menu
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          nav-menu.vue
    │  │
    │  ├─page-content
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          page-content.vue
    │  │
    │  ├─page-echarts
    │  │  │  index.ts
    │  │  │
    │  │  ├─src
    │  │  │      bar-echart.vue
    │  │  │      line-echart.vue
    │  │  │      map-echart.vue
    │  │  │      pie-echart.vue
    │  │  │      rose-echart.vue
    │  │  │
    │  │  ├─types
    │  │  │      index.ts
    │  │  │
    │  │  └─utils
    │  │          convert-data.ts
    │  │          coordinate-data.ts
    │  │
    │  ├─page-modal
    │  │  │  index.ts
    │  │  │
    │  │  └─src
    │  │          page-modal.vue
    │  │
    │  └─page-search
    │      │  index.ts
    │      │
    │      └─src
    │              page-search.vue
    │
    ├─constants
    │      cache_keys.ts
    │
    ├─global
    │      index.ts
    │      register-element.ts
    │      register-icons.ts
    │      register-properties.ts
    │
    ├─hooks
    │      use-page-modal.ts
    │      use-page-search.ts
    │      use-permission.ts
    │
    ├─router
    │  │  index.ts
    │  │
    │  └─main
    │      ├─analysis
    │      │  ├─dashboard
    │      │  │      dashboard.ts
    │      │  │
    │      │  └─overview
    │      │          overview.ts
    │      │
    │      ├─product
    │      │  ├─category
    │      │  │      category.ts
    │      │  │
    │      │  └─goods
    │      │          goods.ts
    │      │
    │      ├─story
    │      │  ├─chat
    │      │  │      chat.ts
    │      │  │
    │      │  └─list
    │      │          list.ts
    │      │
    │      └─system
    │          ├─department
    │          │      department.ts
    │          │
    │          ├─menu
    │          │      menu.ts
    │          │
    │          ├─role
    │          │      role.ts
    │          │
    │          └─user
    │                  user.ts
    │
    ├─service
    │  │  index.ts
    │  │  types.ts
    │  │
    │  ├─login
    │  │      login.ts
    │  │      types.ts
    │  │
    │  ├─main
    │  │  ├─analysis
    │  │  │      dashboard.ts
    │  │  │
    │  │  └─system
    │  │          system.ts
    │  │
    │  └─request
    │          config.ts
    │          index.ts
    │          types.ts
    │
    ├─store
    │  │  index.ts
    │  │
    │  └─modules
    │          analysis.ts
    │          main.ts
    │          user.ts
    │
    ├─utils
    │      cache.ts
    │      date-format.ts
    │      map-menus.ts
    │
    └─views
        ├─error-page
        │      error-page.vue
        │
        ├─login
        │  │  login.vue
        │  │
        │  ├─config
        │  │      account-config.ts
        │  │      phone-config.ts
        │  │
        │  └─cpns
        │          login-account.vue
        │          login-panel.vue
        │          login-phone.vue
        │
        ├─main
        │  │  main.vue
        │  │
        │  ├─analysis
        │  │  ├─dashboard
        │  │  │      dashboard.vue
        │  │  │
        │  │  └─overview
        │  │      │  overview.vue
        │  │      │
        │  │      └─config
        │  │              desc-data.ts
        │  │              tech-stacks.ts
        │  │
        │  ├─product
        │  │  ├─category
        │  │  │  │  category.vue
        │  │  │  │
        │  │  │  └─config
        │  │  │          content.config.ts
        │  │  │          modal.config.ts
        │  │  │          search.config.ts
        │  │  │
        │  │  └─goods
        │  │      │  goods.vue
        │  │      │
        │  │      └─config
        │  │              content.config.ts
        │  │              modal.config.ts
        │  │              search.config.ts
        │  │
        │  ├─story
        │  │  ├─chat
        │  │  │      chat.vue
        │  │  │
        │  │  └─list
        │  │      │  list.vue
        │  │      │
        │  │      └─config
        │  │              content.config.ts
        │  │
        │  └─system
        │      ├─department
        │      │  │  department.vue
        │      │  │
        │      │  └─config
        │      │          content.config.ts
        │      │          modal.config.ts
        │      │          search.config.ts
        │      │
        │      ├─menu
        │      │  │  menu.vue
        │      │  │
        │      │  └─config
        │      │          content.config.ts
        │      │          modal.config.ts
        │      │
        │      ├─role
        │      │  │  role.vue
        │      │  │
        │      │  └─config
        │      │          content.config.ts
        │      │          modal.config.ts
        │      │          search.config.ts
        │      │
        │      └─user
        │          │  user.vue
        │          │
        │          └─config
        │                  content.config.ts
        │                  modal.config.ts
        │                  search.config.ts
        │
        └─not-found
                not-found.vue
`
