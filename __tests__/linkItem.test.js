import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from '../src/utils/chai';
import LinkItem from '../src/components/containers/linkItem';

Enzyme.configure({ adapter: new Adapter() });
const FAKE_DATA = {
  link: 'https://github.com/moryah/linked-in-links',
  bookmark: 'linked-in-link',
  tags: ['github', 'repository'],
}

describe('LinkItem', () => {

  const LINK_ITEM = shallow(<LinkItem linkData = {FAKE_DATA} />);

  it('should render LinkItem', () => {
    expect(LINK_ITEM).be.present()
  });

  it('should have a div', () => {
    expect(LINK_ITEM).to.have.tagName('div')
  });

  it('should have a a', () => {
    expect(LINK_ITEM.find('a')).to.have.tagName('a')
  });

  //it('should have a i', () => {
  //  expect(LINK_ITEM.find('i').first()).to.have.tagName('i')
  //});

  it('should have descendent', () => {
    expect(LINK_ITEM).to.have.descendants('i')
  });
});
