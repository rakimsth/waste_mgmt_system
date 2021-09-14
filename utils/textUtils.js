/*
 - Propercase converter
 - Fullname splitter
 - Sentence santizer
 - Escape character remover
 - Slug Generator
 
 */
const textUtils = {
  // Propercase converter
  properCase(name) {
    return name.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) {
      return $1.toUpperCase();
    });
  },

  // Full name Splitter
  fullNameSplitter(fullname) {
    const firstName = fullname.split(' ').slice(0, -1).join(' ');
    const lastName = fullname.split(' ').slice(-1).join(' ');
    return { firstName, lastName };
  },

  // Sentence santizer
  sentenceSantizer(sentence) {
    const cleanSentence = sentence.replace(/[\/\\#+()$~%:*<>{}]/g, ' ');
    return cleanSentence.replace(/\s+/g, ' ').trim();
  },
  // Escape character remover
  escapeCharacterRemover(text) {
    return text.replace(/[^a-zA-Z0-9]/g, '');
  },

  //  Slug Generator
  slugGenerator(name) {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '');
  }
};

module.exports = { textUtils };
