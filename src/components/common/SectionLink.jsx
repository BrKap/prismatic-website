import React from 'react';
import { Link } from 'react-router-dom';

export default function SectionLink({ to, title, description }) {
  return (
    <Link className="section-link" to={to}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}
