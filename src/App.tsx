// import components
import CalcButtons from "./components/CalcButtons";
import Inputs from "./components/Inputs";
import NavHeader from "./components/NavHeader";

function App() {
  return (
    <div>
      <header>
        {/* NavHeader */}
        <NavHeader />

        {/* CalcButtons */}
        <CalcButtons />

        {/* Inputs */}
        <Inputs />
      </header>
    </div>
  );
}

export default App;
