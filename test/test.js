var assert = require("assert");
var Audacity = require('../index.js');

const intro_chapter = {
  start: 1200,
  title: "Intro"
};

describe('Audacity', function () {
    describe('#parse()', function() {

        it('should return empty list for invalid strings', function() {
          assert.deepEqual([], Audacity.parse("abc"));
        });

        it('should return json with start and title', function() {
          assert.deepEqual([intro_chapter], Audacity.parse("1.200000    1.200000    Intro"));
        });

        it('should accept comma as separator', function() {
          assert.deepEqual([intro_chapter], Audacity.parse("1,200000    1,200000    Intro"));
        });

        it('should ignore trailing and leading whitespace in file', function() {
          assert.deepEqual([intro_chapter], Audacity.parse(" 1.2 1.2 Intro "));
        });

        it('should ignore trailing and leading whitespace around chapter', function() {
          assert.deepEqual([intro_chapter], Audacity.parse(" 1.2 1.2   Intro   \n Blorg"));
        });
    
        it('should skip invalid chapters', function() {
          assert.deepEqual([intro_chapter], Audacity.parse("1.2 1.2 Intro\nBlorg"));
        });

        it('should skip chapters with invalid timecode', function() {
          assert.deepEqual([], Audacity.parse("1.2.3.4.5 1.2.3.4.5 Intro"));
        });

        it('should keep intro at 0 milliseconds', function() {
          assert.deepEqual([{ start: 0, title: "Intro" }], Audacity.parse("0.0 0.0 Intro"));
        });

        it('should read time above a minute', function() {
            assert.deepEqual([{ start: 200500, title: "Hello" }], Audacity.parse("200.500 200.500 Hello"));
        });

        it('should read multiple lines', function() {
            assert.deepEqual([intro_chapter, { start: 200500, title: "Hello" }], Audacity.parse("1.200000    1.200000    Intro\n200.500 200.500 Hello"));
        });

    });
});
