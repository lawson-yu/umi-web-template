module.exports = {
  '*.{less,md,json}': 'prettier --write',
  '*.{js,jsx}': ['prettier --write', 'umi lint --fix'],
  '*.ts?(x)': ['prettier --parser=typescript --write', 'umi lint --fix'],
};
