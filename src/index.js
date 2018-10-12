import he from 'he';

export default htmlString =>
  he.decode(htmlString.replace(/<[^>]+>/g, ''));
