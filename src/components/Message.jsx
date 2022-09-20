import { Chip } from "@mui/material";
import { Typography } from "@mui/material";
const dateTimeFormat = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

export default function Message({ createdAt, text, displayName }) {
  return (
    <div>
      <br />
      <Chip
        label={<Typography style={{ whiteSpace: 'normal' }}>{createdAt?.seconds ? (
          <span size="small">{dateTimeFormat.format(new Date(createdAt.seconds * 1000))}</span>
        ) : null}<br/><strong>{displayName}</strong><br />{text}</Typography>}
        style={{ height: "100%" }}
      />
    </div>
  );
}
