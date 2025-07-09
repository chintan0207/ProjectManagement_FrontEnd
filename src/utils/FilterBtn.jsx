import { Button } from "../components/ui/button";
import { FaFilter, FaAngleUp, FaAngleDown } from "react-icons/fa";

function FilterBtn({ showFilters, onClick, label = "Filters" }) {
  return (
    <Button onClick={onClick} className="h-10">
      <FaFilter className="text-base" />
      {label}
      {showFilters ? (
        <FaAngleUp className="h-4 w-4 transition-transform" />
      ) : (
        <FaAngleDown className="h-4 w-4 transition-transform" />
      )}
    </Button>
  );
}

export default FilterBtn;
