import React from "react";
import Avatar from "../misc/Avatar";
import Handle from "../misc/Handle";
import { STYLE } from "../misc/constant";

const Tooltip = ({ profileId }) => {
  const [user, setUser] = React.useState(null);
  const [status, setStatus] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.profile);
        setStatus("idle");
      })
      .catch(() => setStatus("error"));
  }, [profileId]);

  return (
    <>
      {status === "idle" && (
        <div>
          <Avatar avatarSrc={user.avatarSrc} />
          <p style={{ fontWeight: "bold" }}>{user.displayName}</p>
          <p style={{ marginBottom: `${STYLE.marginBottom}` }}>
            <Handle username={user.handle} />
          </p>
          <p>{user.bio}</p>
        </div>
      )}
    </>
  );
};

export default Tooltip;
