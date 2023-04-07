declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module 'react-dom' {
  export const render: (element: React.ReactNode, container: Element | null) => void;
  // 其他 react-dom API 的聲明
}
