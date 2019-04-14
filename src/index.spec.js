import { assert } from "chai";
import {
  add,
  subtract,
  divide,
  multiply,
  areSameLength,
  areEqual,
  isEven,
  isOdd,
  roundNumber
} from "./index";

describe("Math Functions", () => {
  describe("add", () => {
    //The following tests all pass great!
    it("should be a function", () => {
      assert.isFunction(add);
    });
    it("should return a number", () => {
      assert.isNumber(add(2, 3));
    });
    it("should properly add two numbers", () => {
      assert.equal(add(2, 3), 5);
    });
  });

  describe("subtract", () => {
    it("should be a function", () => {
        assert.isFunction(subtract);
    });
    it("should properly subtract two numbers", () => {
      assert.isAbove(subtract(6, 2), 3);
    });
  });

  describe("divide", () => {
    it("should be a function", () => {      
        assert.isFunction(divide);
    });
    it("should return Infinity if we divide by 0", () => {
      assert.isNumber(divide(5, 0));
    });
  });

  describe("multiply", () => {
    it("should be a function", () => {
        assert.isFunction(multiply);
    });
  });

  describe("areSameLength", () => {
    it("should be a function", () => {
      assert.isFunction(areSameLength);
    });
    it("should return a boolean", () => {
      assert.isBoolean(areSameLength("hello", "world"),"number");
    });
    it("should return true if both strings are the same length", () => {
      assert.isTrue(areSameLength("hello", "world"));
    });
    it("should return false if strings have different lengths", () => {
      assert.isFalse(areSameLength("hello", "goodbye"));
    });
  });

  describe("areEqual", () => {
    it("should be a function", () => {
      assert.isFunction(areEqual);
    });
    it("should return a boolean", () => {
      assert.isBoolean(areEqual("hello", "world"), "number");
    });
    it("should return true if both numbers are the same", () => {
      assert.isTrue(areEqual(2, 2));
    });
    it("should return false if the numbers are different", () => {
      assert.isFalse(areEqual(1, 2));
    });
  });

  describe("isEven", () => {
    it("should be a function", () => {
     assert.isFunction(isEven);
    });
    it("should return a boolean", () => {
      assert.isBoolean(areEqual("hello", "world"), "number");
    });
    it("should return true if number is even", () => {
      assert.isTrue(isEven(4));
    });
  });

    describe("isOdd", () => {
        it("should be a function", () => {
        assert.isFunction(isOdd);
        });
        it("should return a boolean", () => {
        assert.isBoolean(isOdd("hello", "world"));
        });
        it("should return false if the number is even", () => {
        assert.isFalse(isEven(5));
        });
    });

    describe("roundNumber", () => {
            it("should be a function", () => {
            assert.isFunction(roundNumber);
            });
            it("should round up when needed", () => {
            assert.isNumber(roundNumber(1), 2);           
            });
            it("should round down when needed", () => {
                assert.isNumber(roundNumber(0.4), 1);          
            });
    });
});
