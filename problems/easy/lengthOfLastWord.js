// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/description/
// Easy
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const trimmedString = s.trim();
  const words = trimmedString.split(" ");

  return words.at(-1).length;
};
