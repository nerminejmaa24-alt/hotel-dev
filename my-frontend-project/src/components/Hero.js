import React from "react";

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>Find Your Perfect Stay</h1>
        <p style={styles.subtitle}>Discover luxury hotels and resorts worldwide</p>

        <form style={styles.form}>
          <input
            type="text"
            placeholder="Where to?"
            style={styles.input}
          />
          <input
            type="date"
            style={styles.input}
          />
          <input
            type="date"
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Guests"
            min="1"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Search Hotels</button>
        </form>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    background: "#1e40af",
    color: "white",
    padding: "80px 20px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    maxWidth: "800px",
    width: "100%",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center",
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },
  input: {
    flex: "1 1 150px",
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "12px 25px",
    background: "#1e40af",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  buttonHover: {
    background: "#1a3a9a",
  },
};

export default Hero;