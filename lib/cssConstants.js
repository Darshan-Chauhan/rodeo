export const textareStyle = {
  control: {
    backgroundColor: "#fff",
    fontWeight: "normal",
    borderRadius: "5px",
    color: "#333"
  },
  input: {
    margin: 0
  },
  "&singleLine": {
    control: {
      fontFamily: "inherit",
      border: "1px solid #ddd",
      overflow: "scroll"
    },
    highlighter: {
      padding: 9
    },
    input: {
      padding: 9,
      minHeight: 30,
      outline: 0,
      border: 0
    }
  },
  "&multiLine": {
    control: {
      fontFamily: "inherit",
      border: "1px solid #ddd"
    },
    highlighter: {
      padding: 9
    },
    input: {
      padding: 9,
      outline: 0,
      border: 0,
      height: "2.3rem"
    }
  }
};
