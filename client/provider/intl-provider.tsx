import * as React from 'react';
import * as i18n from 'i18n';

const intlContext = React.createContext(i18n.zh);

const { Provider, Consumer } = intlContext;

export { Provider, Consumer };
