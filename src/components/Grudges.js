import React from 'react';
import GrudgeContainer from '../containers/GrudgeContainer';

const Grudges = ({ grudges }) => {
  return (
    <section className="Grudges">
      <h2>Grudges ({grudges.length})</h2>
      {grudges.map((grudge) => (
        <GrudgeContainer key={grudge.id} grudge={grudge} />
      ))}
    </section>
  );
};

export default Grudges;
