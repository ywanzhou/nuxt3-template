module.exports = {
  /* 继承某些已有的规则 */
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
  ],
  overrides: [
    // 扫描 .vue/html 文件中的<style>标签内的样式
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'string-quotes': 'double', // 指定字符串使用单引号或双引号
    'color-hex-case': 'lower', // 16 进制颜色全小写
    'color-hex-length': 'long', // 禁止16禁止颜色小写
    'rule-empty-line-before': 'always', // 在规则之前的空行必须始终有一个空行
    'block-opening-brace-space-before': 'always', // 在块的开大括号之前必须有一个空格
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'layer',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
  },
}
