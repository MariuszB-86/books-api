const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

    it('should return  "fullName" with correct formatting', () => {
        expect(formatFullname('john doe')).to.equal('John Doe');
        expect(formatFullname('jOHn doE')).to.equal('John Doe');
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('jOHN dOE')).to.equal('John Doe');
    });

    it('should return an error if "fullName" arg length is 0', () => {
        expect(formatFullname('')).to.equal('Error');
    });

    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });

    it('should return an error if "fullName" has a word count other than 2', () => {
        expect(formatFullname('John Doe Test')).to.equal('Error');
        expect(formatFullname('John')).to.equal('Error');
    });

  });