describe("Shop", function() {

  describe("Illegal Inputs", function() {

    it("should return -1 if argument has lowercase letters", function() {
      var shop = new Shop("aBc");
      expect(shop.checkout()).toEqual(-1);
    });

    it("should return -1 if argument has a dash", function() {
      var shop = new Shop("-");
      expect(shop.checkout()).toEqual(-1);
    });

    it("should return -1 if argument has integers in string", function() {
      var shop = new Shop("98")
      expect(shop.checkout()).toEqual(-1);
    });

    it("should return -1 if argument is an integer", function() {
      var shop = new Shop(11);
      expect(shop.checkout()).toEqual(-1);
    });
  });

  describe("Legal inputs", function() {

    it("should return 100 for AA", function() {
      var shop = new Shop("AA");
      expect(shop.checkout()).toEqual(100)
    });

    it("should return 115 for ABCD", function() {
      var shop = new Shop("ABCD");
      expect(shop.checkout()).toEqual(115)
    });

    it("should return 130 for AAA", function() {
      var shop = new Shop("AAA");
      expect(shop.checkout()).toEqual(130)
    });

    it("should return 260 for AAAAAA", function() {
      var shop = new Shop("AAAAAA");
      expect(shop.checkout()).toEqual(260)
    });

    it("should return 260 for AAABB", function() {
      var shop = new Shop("AAABB");
      expect(shop.checkout()).toEqual(175)
    });
  });
});
