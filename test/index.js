import { assert } from 'chai';
import stripHtml from '../src';

describe('stripHtml', () => {
  it('should test default awesome function', () => {
    const htmlString= "<div>Foo</div>";
    const expectedVal = 'Foo';
    assert(stripHtml(htmlString) === expectedVal,
    `Exected ${stripHtml(htmlString)} to equal ${expectedVal}`
    );
  });
  it('should convert encoded entities', () => {
    const htmlString= "&#169";
    const expectedVal = '©';
    assert(stripHtml(htmlString) === expectedVal,
    `Exected ${stripHtml(htmlString)} to equal ${expectedVal}`
    );
  });
  it('both remove tags and convert html entities', () => {
    const htmlString= "<div>\n <h1>Hello World</h1>\n <p>This is the text that we should get.</p>\n <p>Our Code World &#169; 2017</p>\n </div>";
    const expectedVal = '\n Hello World\n This is the text that we should get.\n Our Code World © 2017\n ';
    assert(stripHtml(htmlString) === expectedVal,
    `Exected ${stripHtml(htmlString)} to equal ${expectedVal}`
    );
  });
});
