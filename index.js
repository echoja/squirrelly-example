import * as Sqrl from 'squirrelly';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 필터 설정
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

export default function App() {
  return (
    <div>
      <p>
        context 있음:{' '}
        {Sqrl.render(
          template,
          { context: { username: '김태훈' } },
          { useWith: true }
        )}
      </p>
      <p>
        context 없음:{' '}
        {Sqrl.render(template, { context: {} }, { useWith: true })}
      </p>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
