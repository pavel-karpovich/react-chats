import React from 'react';

interface CatchErrorState {
  hasError: boolean,
}

class CatchErrors extends React.Component<{}, CatchErrorState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error | null, errorInfo: object) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }
    return this.props.children;
  }
}

export default CatchErrors;
