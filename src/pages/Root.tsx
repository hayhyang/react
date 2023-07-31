import { useRouter } from 'modules/router/hooks/useRouter';

const Root = () => {
  const { push } = useRouter();
  const onClick = () => push('/about');

  return (
    <div>
      <h2>Root</h2>
      <button onClick={onClick}>about</button>
    </div>
  );
};

export default Root;
