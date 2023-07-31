import { useRouter } from 'modules/router/hooks/useRouter';

const About = () => {
  const { push } = useRouter();
  const onClick = () => push('/');

  return (
    <div>
      <h2>About</h2>
      <button onClick={onClick}>go main</button>
    </div>
  );
};

export default About;
