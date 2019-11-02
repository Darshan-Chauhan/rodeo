import React from 'react';
import GlobalStyle from "./GlobalStyles";

class Page extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        {this.props.children}
      </>
    );
  }
}

export default Page;
