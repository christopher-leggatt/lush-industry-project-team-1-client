import "./_Chip.scss";
import { formatName } from "../../utils";

const Chip = ({ label }) => {
    
  return <div className="chip">{formatName(label)}</div>;
};

export default Chip;
