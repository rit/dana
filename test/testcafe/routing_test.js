import { Selector } from 'testcafe'


fixture `Collection List`
  .page('http://localhost:8080/#collections/2011m30')

test('link to object details', async t => {
  const heading = Selector('h1')
  const series1 = Selector('span').withText(/Series I.$/)
  const iconography = Selector('a').withText('Iconography (1959)')
  const imageViewer = Selector('h4').withText('Image Viewer Placeholder')
  const locationInCollection = Selector('h4').withText('Location in Collection')
  const metadata = Selector('#object-home dl')
  await t
    .expect(heading.innerText).contains('Szeemann')
    .click(series1)
    .click(iconography)
    .expect(metadata.exists).ok()
    .expect(imageViewer.exists).ok()
    .expect(locationInCollection.exists).ok()
});
