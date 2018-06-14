import * as React from 'react';
import SampleDumbComponent from '../components/sampleDumbComponent';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<SampleDumbComponent foo={"bar"} bar={"baz"} />).toJSON();
  expect(rendered).toBeTruthy();
});

test('matches snapshot', () => {
  const rendered = renderer.create(<SampleDumbComponent foo={"bar"} bar={"baz"} />).toJSON();
  expect(rendered).toMatchSnapshot();
});
