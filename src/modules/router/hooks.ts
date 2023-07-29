export const useRouter = () => {
  const push = (path: string) => {
    history.pushState(null, '', path);
    const popStateEvent = new PopStateEvent('popstate');
    dispatchEvent(popStateEvent);
  };
  return { push };
};
