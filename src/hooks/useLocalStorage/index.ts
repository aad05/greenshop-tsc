type ReturnType<T> = T | undefined;

const getter = <T>({ key }: { key: string }): ReturnType<T> => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : undefined;
};

const setter = <T>({ key, setValue }: { key: string; setValue: T }) => {
  localStorage.setItem(key, JSON.stringify(setValue));
};

export { getter, setter };
