import * as Sqrl from 'squirrelly';

Sqrl.filters.define('default', (str, defaultStr) => {
  if (str) {
    return str;
  }
  return defaultStr;
});

const template = `{{ context.username | default("고객") }}님 안녕하세요?`;

const data = {
  context: {
    username: '김태훈',
  },
};

console.log('1', Sqrl.render(template, data, { useWith: true }));
console.log('2', Sqrl.render(template, { context: {} }, { useWith: true }));
