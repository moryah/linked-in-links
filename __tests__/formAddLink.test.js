import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from '../src/utils/chai';
import FormAddLink from '../src/components/containers/formAddLink';


Enzyme.configure({ adapter: new Adapter() });

describe('FormAddLink', () => {

  const FORM_ADD_LINK = shallow(<FormAddLink />);

  it('should render FormAddLink', () => {
    expect(FORM_ADD_LINK).be.present()
  });

  it('should have a form', () => {
    expect(FORM_ADD_LINK).to.have.tagName('form')
  });


  it('should have a imput', () => {
    expect(FORM_ADD_LINK).to.have.exactly(6).descendants('input')
  });
});
