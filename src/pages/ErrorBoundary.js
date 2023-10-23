import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong </h2>
          <div>Error: {this.state.error.toString()}</div>
          <div>Details: {this.state.errorInfo.componentStack}</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
