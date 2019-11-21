import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as showcases from 'components/showcases';

class ComponentPresenter extends PureComponent {
    static propTypes = {
      match: PropTypes.shape({
        params: PropTypes.shape({
          componentName: PropTypes.string,
        }).isRequired,
      }).isRequired,
    }

    render() {
      const { match: { params: { componentName }}} = this.props;

      // eslint-disable-next-line import/namespace
      const ShowcaseComponent = showcases[componentName];

      return (
        <div id="ComponentPresenter" key="ComponentPresenter">
          <h3>Showcase for {`<${componentName} />`}</h3>
          {!!ShowcaseComponent && <ShowcaseComponent {...this.props} /> || <div>Showcase not defined.</div>}
        </div>
      );
    }
}

export default ComponentPresenter;
