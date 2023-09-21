import "./AccessibilityPage.scss";
import closeIcon from "../../assets/accessibility-icons/exit.png";
import eyeIcon from "../../assets/accessibility-icons/eye.png";
import showIcon from "../../assets/accessibility-icons/show.png";
import earIcon from "../../assets/accessibility-icons/ear.png";
import blinkBlockIcon from "../../assets/accessibility-icons/Group.png";
import soundIcon from "../../assets/accessibility-icons/sound.png";
import voiceIcon from "../../assets/accessibility-icons/material-symbols_voice-selection.png";
import darkContrast from "../../assets/accessibility-icons/contrast.png";
import brightContrast from "../../assets/accessibility-icons/light.png";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { useNavigate, useParams } from "react-router-dom";

const AccessibilityPage = () => {
  //VARIABLES
  let navigate = useNavigate();
  const hide = { display: "none" };
  const show = { display: "flex" };

  //ON AND OF SWITCH CONFIG
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  const returnHandle = () => {
    navigate("/");
  };

  return (
    <div className="accessibilityPage">
      {/* HEADER */}
      <header className="accessibilityPage__header">
        {" "}
        <img
          onClick={returnHandle}
          className="accessibilityPage__icon"
          src={closeIcon}
        ></img>
        <h1>Accessibility</h1>
        <img className="accessibilityPage__icon" src={eyeIcon}></img>
      </header>

      {/* //LIST WRAPPER */}
      <main className="accessibilityPage__main">
        {/* PROFILES WRAPPER */}
        <section>
          <h2>Accessibility Profiles</h2>
          <ul>
            <li className="accessibilityPage__list-item">
              <img className="accessibilityPage__icon" src={showIcon}></img>
              Blindness{" "}
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Off</Typography>
                <AntSwitch inputProps={{ "aria-label": "ant design" }} />
                <Typography>On</Typography>
              </Stack>
            </li>
            <li className="accessibilityPage__list-item">
              <img className="accessibilityPage__icon" src={showIcon}></img>
              Motor Skills Disorders
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Off</Typography>
                <AntSwitch inputProps={{ "aria-label": "ant design" }} />
                <Typography>On</Typography>
              </Stack>
            </li>
            <li className="accessibilityPage__list-item">
              <img className="accessibilityPage__icon" src={showIcon}></img>
              Color Blindness
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Off</Typography>
                <AntSwitch inputProps={{ "aria-label": "ant design" }} />
                <Typography>On</Typography>
              </Stack>
            </li>
            <li className="accessibilityPage__list-item">
              <img className="accessibilityPage__icon" src={showIcon}></img>
              Visually Impaired
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Off</Typography>
                <AntSwitch inputProps={{ "aria-label": "ant design" }} />
                <Typography>On</Typography>
              </Stack>
            </li>
            <li className="accessibilityPage__list-item">
              <img className="accessibilityPage__icon" src={showIcon}></img>
              Epilepsy
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Off</Typography>
                <AntSwitch inputProps={{ "aria-label": "ant design" }} />
                <Typography>On</Typography>
              </Stack>
            </li>
            <li className="accessibilityPage__list-item">
              <img className="accessibilityPage__icon" src={showIcon}></img>
              Learning
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Off</Typography>
                <AntSwitch inputProps={{ "aria-label": "ant design" }} />
                <Typography>On</Typography>
              </Stack>
            </li>
            <li className="accessibilityPage__list-item">
              <img className="accessibilityPage__icon" src={showIcon}></img>
              Elder
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Off</Typography>
                <AntSwitch inputProps={{ "aria-label": "ant design" }} />
                <Typography>On</Typography>
              </Stack>
            </li>
          </ul>
        </section>

        {/* NAVIGATION WRAPPER */}
        <section>
          <h2>Navigation Adjustment</h2>
          <ul className="accessibilityPage__container-nav">
            <div className="accessibilityPage__div">
              {" "}
              <li className="accessibilityPage__container-adj">
                <img
                  className="accessibilityPage__icon-box"
                  src={earIcon}
                ></img>
                <p>Screen Reader Adjustment</p>
              </li>
              <li className="accessibilityPage__container-adj">
                <img
                  className="accessibilityPage__icon-box"
                  src={blinkBlockIcon}
                ></img>{" "}
                <p>Blinks Blocking</p>
              </li>
              <li className="accessibilityPage__container-adj">
                <img
                  className="accessibilityPage__icon-box"
                  src={soundIcon}
                ></img>
                <p>Text Reader</p>
              </li>
            </div>

            <div>
              {" "}
              <li className="accessibilityPage__container-adj">
                <img
                  className="accessibilityPage__icon-box"
                  src={voiceIcon}
                ></img>
                <p>Voice Commands</p>
              </li>
              <li className="accessibilityPage__container-adj">
                <img
                  className="accessibilityPage__icon-box"
                  src={darkContrast}
                ></img>{" "}
                <p>Dark High-Contrast</p>
              </li>
              <li className="accessibilityPage__container-adj">
                <img
                  className="accessibilityPage__icon-box"
                  src={brightContrast}
                ></img>
                <p>Bright High-Contrast</p>
              </li>
            </div>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AccessibilityPage;
