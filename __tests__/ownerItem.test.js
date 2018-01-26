import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from '../src/utils/chai';
import OwnerItem from '../src/components/containers/ownerItem';
import LinkItem from '../src/components/containers/linkItem';


Enzyme.configure({ adapter: new Adapter() });

const FAKE_DATA = {
  owner: 'moises',
  bookmarks: [
    {
      link: 'https://github.com/moryah/linked-in-links',
      bookmark: 'linked-in-link',
      tags: ['github', 'repository'],
    },
  ],
}

describe('OwnerItem', () => {

  const OWNER_ITEM = shallow(<OwnerItem linkData = {FAKE_DATA} />);

  it('should render OwnerItem', () => {
    expect(OWNER_ITEM).be.present()
  });

  it('should have a div', () => {
    expect(OWNER_ITEM).to.have.tagName('div')
  });

  it('should have descendent', () => {
    expect(OWNER_ITEM).to.have.descendants(LinkItem)
  });
});
