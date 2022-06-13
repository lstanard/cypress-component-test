import { mount } from 'cypress/react'
import App from '../../src/App';
import useTestHook from '../../src/useTestHook';

describe('<App>', () => {
  beforeEach(() => {
    cy.stub(useTestHook).returns('Goodbye, World!');
  });

  it('mounts', () => {
    mount(<App />);
  })
})
