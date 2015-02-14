'use strict';

/**
 * @ngInject
 */

 // mimic of a real api call

function FakeBackend($rootScope, $httpBackend) {
  var user = {
    "email": "demo_user@debijenkorf.nl",
    "password": "1234567890",
    "firstName": "Demo",
    "lastName": "User",
    "address": {
      "street": "Dam",
      "number": "1",
      "postcode": "1012JS",
      "city": "Amsterdam"
    },
    "telephone": "0612345678",
    "basket": [],
    "wishlistItems": [
      {
      "sku": "203209001900000",
      "brand": "Alveare",
      "name": "Alassio jas in donkerblauw met ritssluiting",
      "qty": "1",
      "size": "M",
      "color": "Donkerblauw",
      "price": "220.50",
      "image": "http://cdn.debijenkorf.nl/INTERSHOP/static/WFS/dbk-shop-Site/-/dbk-shop/nl_NL/product-images/044/580/10_0445807001386048_pro_mod_frt_01_1108_1528_680835.jpg"
      },
      {
      "sku": "203209001900020",
      "brand": "HUGO",
      "name": "Skinny fit stretch jeans in donkerblauw",
      "qty": "2",
      "size": "W29/L30",
      "color": "Donkerblauw",
      "price": "129.99",
      "image": "http://cdn.debijenkorf.nl/INTERSHOP/static/WFS/dbk-shop-Site/-/dbk-shop/nl_NL/product-images/045/310/10_0453103729400000_pro_mod_frt_01_1108_1528_1026743.jpg"
      },
      {
      "sku": "203209001900455",
      "brand": "Diesel",
      "name": "Belther regular slim-tapered jeans 0839G stretch",
      "qty": "1",
      "size": "W29/L30",
      "color": "Denim",
      "price": "89.00",
      "image": "http://cdn.debijenkorf.nl/INTERSHOP/static/WFS/dbk-shop-Site/-/dbk-shop/nl_NL/product-images/068/980/10_0689803656000000_pro_mod_frt_01_1108_1528_1021616.jpg"
      },
      {
      "sku": "203209004400020",
      "brand": "McGregor Distinction",
      "name": "Silvio Prato tailored fit colbert in blauw",
      "qty": "1",
      "size": "46",
      "color": "Blauw",
      "price": "349.99",
      "image": "http://cdn.debijenkorf.nl/INTERSHOP/static/WFS/dbk-shop-Site/-/dbk-shop/nl_NL/product-images/045/080/10_0450801000985048_pro_mod_frt_01_1108_1528_1014747.jpg"
      },
      {
      "sku": "203209001900020",
      "brand": "Antony Morato",
      "name": "Fijngebreid T-shirt met skull",
      "qty": "1",
      "size": "M",
      "color": "Wit",
      "price": "29.50",
      "image": "http://cdn.debijenkorf.nl/INTERSHOP/static/WFS/dbk-shop-Site/-/dbk-shop/nl_NL/product-images/043/390/10_0433901000611002_pro_mod_frt_01_1108_1528_1025318.jpg"
      },
    ]
  };

  $httpBackend.whenGET('/user').respond(function(method,url,data) {
    console.log("Getting user data");
    return [200, user, {}];
  });
  
  $httpBackend.whenPOST('/update').respond(function(method,url,data) {
    console.log("Saving user data");
    return [200, user, {}];
  });
}

module.exports = FakeBackend;
