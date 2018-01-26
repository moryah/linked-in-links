import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from '../src/utils/chai';
import LinksContainer from '../src/components/containers/linksContainer';
import OwnerItem from '../src/components/containers/ownerItem';


Enzyme.configure({ adapter: new Adapter() });

describe('LinksContainer', () => {
  const LINKS_CONTAINER = shallow(<LinksContainer />);

  it('should render LinksContainer', () => {
    expect(LINKS_CONTAINER).be.present()
  });

  it('should have a div', () => {
    expect(LINKS_CONTAINER).to.have.tagName('div')
  });

  it('should have a h3', () => {
    expect(LINKS_CONTAINER.find('h3')).to.have.tagName('h3')
  });

  it('should have a text', () => {
    expect(LINKS_CONTAINER.find('h3')).to.contain.text(' Linked In Links ')
  });

  it('should have descendent', () => {
    expect(LINKS_CONTAINER).to.have.descendants(OwnerItem)
  });
});
