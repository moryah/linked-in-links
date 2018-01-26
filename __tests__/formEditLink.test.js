import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from '../src/utils/chai';
import FormEditLink from '../src/components/containers/formEditLink';


Enzyme.configure({ adapter: new Adapter() });

const FAKE_DATA = {
  link: 'https://github.com/moryah/linked-in-links',
  bookmark: 'linked-in-link',
  tags: ['github', 'repository'],
}

describe('FormEditLink', () => {

  const FORM_EDIT_LINK = shallow(<FormEditLink linkData = {FAKE_DATA} />);

  it('should render FormEditLink', () => {
    expect(FORM_EDIT_LINK).be.present()
  });

  it('should have a form', () => {
    expect(FORM_EDIT_LINK).to.have.tagName('form')
  });

  it('should have a imput', () => {
    expect(FORM_EDIT_LINK).to.have.descendants('input')
  });
});
