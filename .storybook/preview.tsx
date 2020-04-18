import * as React from 'react';
import { addDecorator } from '@storybook/react';
import '../src/styles/common/global.scss';
import './stories.scss';

addDecorator((story) => <div className="stories-container">{story()}</div>);
