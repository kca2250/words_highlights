import { User } from "../types";

export const Card: React.FC<User> = (user) => {
  return (
    <div style={styles.card}>
      <h1 style={styles.h1}>
        {user.name}
        <span style={styles.span}>({user.username})</span>
      </h1>
      <p style={styles.p}>website: {user.website}</p>

      <div>
        <small>mail: {user.email}</small> / <small>phone: {user.phone}</small>
      </div>

      <div style={styles.info_area}>
        <div style={styles.subcard}>
          <h2 style={styles.h2}>ADRESS</h2>
          <p style={styles.p}>{user.address.zipcode}</p>
          <p style={styles.p}>
            geo: {user.address.geo.lat} / {user.address.geo.lng}
          </p>
          <p
            style={styles.p}
          >{`${user.address.city} ${user.address.street} ${user.address.suite}`}</p>
        </div>

        <div style={styles.subcard}>
          <h2 style={styles.h2}>COMPANY</h2>
          <p style={styles.p}>Name: {user.company.name}</p>
          <p style={styles.p}>CatchPhrase: {user.company.catchPhrase}</p>
          <p style={styles.p}>BS: {user.company.bs}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #dbdbdb",
    padding: "12px 10px",
    margin: "10px",
    fontSize: "16px",
    color: "#333333",
  },
  h1: {
    fontSize: "20px",
    margin: "0",
    padding: "0",
  },
  h2: {
    fontSize: "18px",
    margin: "0",
    padding: "0",
  },
  p: {
    margin: "5px 0px",
    padding: "0",
  },
  span: {
    fontSize: "18px",
    fontWeight: "normal",
    paddingLeft: "8px",
  },
  subcard: {
    marginTop: "10px",
  },
  info_area: {
    display: "flex",
    justifyContent: "flext-start",
    gap: "50px",
  },
};
