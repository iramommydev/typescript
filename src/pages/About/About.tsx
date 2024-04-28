// * Hooks
import useTitle from "../../hooks/use-title.hook";

const About = () => {
  useTitle({ title: 'About'});
  return (
    <>
      <h1>Про нас</h1>
      <p>Інформація про Київ....</p>
    </>
  );
};

export default About;