// src/components/Inputs/Inputs.tsx

// import css
import Deductions from './Deductions';
import './Inputs.css';
import MarginalTax from './MarginalTax';
import Summary from './Summary';

//? Inputs component
const Inputs = () => {
  return (
    <>
      {/* Marginal Tax */}
      <MarginalTax />

      {/* Deductions */}
      <Deductions />

      {/* Summary */}
      <Summary />
    </>
  );
};

// export default component
export default Inputs;
