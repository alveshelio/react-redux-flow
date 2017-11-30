import * as React from 'react';

// export default (WrappedComponent, className) => props => (<div className={className}><WrappedComponent {...props} /></div>);

export default (WrappedComponent, className) => {
  return class extends React.Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
}