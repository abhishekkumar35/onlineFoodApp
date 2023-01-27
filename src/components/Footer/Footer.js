const Footer = () => {
  const styles = {
    footer__main: {
      backgroundColor: "yellow",
      width: "100%",
      padding: "4px",
      border: "1px solid gray",
      borderRadius: "5px",
    },
    footer__card: {
      display: "flex",
      justifyContent: "center",
    },
  };
  return (
    <div style={styles.footer__card}>
      <div>
        <marquee style={styles.footer__main}>Created By Abhishek Kumar</marquee>
      </div>
    </div>
  );
};

export default Footer;
