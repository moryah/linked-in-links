import React from 'react';
import App from '../src/app';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from '../src/utils/chai';
import LinksContainer from '../src/components/containers/linksContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  const APP = shallow(<App />);

  it('should render App', () => {
    expect(APP).be.present();
  });

  it('should have descendent', () => {
    expect(APP).to.have.tagName('div');
  })

  it('should have descendent', () => {
    expect(APP).to.have.descendants(LinksContainer);
  })
})

