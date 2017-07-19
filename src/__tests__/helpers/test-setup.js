
import expectHelper from 'expect';
import enzymify from 'expect-enzyme';
import expectJSX from 'expect-jsx';

expectHelper.extend(expectJSX);
expectHelper.extend(enzymify);

export test from 'ava';
export { shallow, mount } from 'enzyme';
export const expect = expectHelper;
export { spyOn, createSpy } from 'expect';
