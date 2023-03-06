// src/components/CalcButtons/CalcButtons.tsx

// import css
import './CalcButtons';

//? CalcButtons component
const CalcButtons = () => {
  return (
    <>
      {/* calculate button */}
      <button
        id="calculate"
        className="calc-buttons"
      >
        Calculate
      </button>

      {/* view report */}
      <button
        id="view-report"
        className="calc-buttons"
      >
        View Report
      </button>
    </>
  );
};

// export default component
export default CalcButtons;
