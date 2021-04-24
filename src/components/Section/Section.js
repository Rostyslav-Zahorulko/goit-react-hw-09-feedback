import PropTypes from 'prop-types';

import './Section.css';

const Section = ({ title, children }) => (
  <section>
    <b className="section-title">{title}</b>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
