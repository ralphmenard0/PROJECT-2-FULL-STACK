// https://www.npmjs.com/package/testcafe#getting-started

import { Selector } from 'testcafe';

const BASE_URL = 'http://localhost:3001/';
const LOGIN_PATH_NAME = '/login';
const LOGIN_URL = `${BASE_URL}login`;
const USER_LANDING_URL = `${BASE_URL}userlanding`;

const btnSignIn = Selector('a').withExactText('Sign In');
const btnSignUp = Selector('a').withExactText('Sign Up');
const btnSignOut = Selector('a').withExactText('Sign Out');

const txtLoginEmail = Selector('input#email-login');
const txtLoginPassword = Selector('input#password-login');
const btnSubmitSignIn = Selector('button')
  .withAttribute('type', 'submit')
  .withText('Sign In');

const sectionAddGift = Selector('section#btn-add-gift');

fixture `Login Tests`
  .page(BASE_URL);

test('Login as karen@small.com and log back out', async t => {
  let url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(BASE_URL);

  // https://stackoverflow.com/questions/47359687/testcafe-how-to-check-if-a-web-element-exists-or-does-not-exist-without-failin
  await t.expect(btnSignIn.exists).ok();
  await t.expect(btnSignUp.exists).ok();
  await t.expect(btnSignOut.exists).notOk();
  await t.click(btnSignIn);

  url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(LOGIN_URL);
  await t.typeText(txtLoginEmail, 'karen@small.com');
  await t.typeText(txtLoginPassword, '1password');
  // The Add Gift section should not be showing yet ...
  await t.expect(sectionAddGift.exists).notOk();
  await t.click(btnSubmitSignIn);

  url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(USER_LANDING_URL);
  // Now the Add Gift section should be showing ...
  await t.expect(sectionAddGift.exists).ok();

  await t.expect(btnSignIn.exists).notOk();
  await t.expect(btnSignUp.exists).notOk();
  await t.expect(btnSignOut.exists).ok();

  await t.click(btnSignOut);

  url = await t.eval(() => document.documentURI);
  await t.expect(url).eql(BASE_URL);

  await t.expect(btnSignIn.exists).ok();
  await t.expect(btnSignUp.exists).ok();
  await t.expect(btnSignOut.exists).notOk();
  await t.expect(sectionAddGift.exists).notOk();
});