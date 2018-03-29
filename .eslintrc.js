// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // 'no-param-reassign': ['error', {
    //   props: true,
    //   ignorePropertyModificationsFor: [
    //     'state', // for vuex state
    //     'acc', // for reduce accumulators
    //     'e' // for e.returnvalue
    //   ]
    // }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-absolute-path': 0, // 允许 绝对路径引用
    'semi': ['warn', 'never'], // 不允许 ;
    'comma-dangle': ['warn', 'never'], // 不允许 多余 ,
    'arrow-parens': ['error', 'as-needed'], // 箭头函数单参数时允许省略括号
    'no-console': 0, // 允许console
    'eqeqeq': 0, // 允许 ==
    'consistent-return': 0,
    'linebreak-style': 0,
    'no-trailing-spaces': 0, // 允许多余尾空格
    'import/prefer-default-export': 0, // export const
    'no-underscore-dangle': 0, // 允许_开头命名
    'no-unused-vars': 'warn',
    'no-param-reassign': 0,
    'no-plusplus': 0, // 允许使用 ++
    'curly': 0, // 允许省略 {}
    'no-use-before-define': 0 // 运行函数 定义前使用
  }
}
