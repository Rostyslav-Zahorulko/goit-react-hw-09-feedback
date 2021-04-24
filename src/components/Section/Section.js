import './Section.scss';

const Section = ({ title, children }) => (
  <section>
    <b className="section-title">{title}</b>
    {children}
  </section>
);

export default Section;
