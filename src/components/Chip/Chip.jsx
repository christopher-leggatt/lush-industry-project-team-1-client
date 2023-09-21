import "./_Chip.scss";
import { formatName } from "../../utils";

const Chip = ({ label }) => {
  return (
    <div className="chip">
      <span className="chip__label">{formatName(label)}</span>
    </div>
  );
};

export default Chip;
