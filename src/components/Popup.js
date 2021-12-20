import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useAppContext } from "../Hooks/Context";
const Popup = function () {
  const { message, setShowPopUp } = useAppContext();
  return (
    <div className="a-popUp">
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert
          onClose={() => {
            setShowPopUp(false);
          }}
        >
          {message}
        </Alert>
      </Stack>
    </div>
  );
};

export default Popup;
