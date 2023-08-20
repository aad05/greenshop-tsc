type ReturnType<T> = T | any;

const getter = <T>({ key }: { key: string }): ReturnType<T> => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : [];
};

const setter = <T>({ key, setValue }: { key: string; setValue: T }) => {
  localStorage.setItem(key, JSON.stringify(setValue));
};

const deletter = ({ key }: { key: string }) => {
  localStorage.removeItem(key);
};

export { getter, setter, deletter };
