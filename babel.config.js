module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }], // 현재 Node 버전에 맞게 JS 변환
    '@babel/preset-typescript',  // TypeScript 지원
  ],
}; 