//66
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// describe("Sample test", () => {
//    it("Should pass sample tests", () => {
//      assert.equal(domainName("http://google.com"), "google");
//      assert.equal(domainName("http://google.co.jp"), "google");
//      assert.equal(domainName("www.xakep.ru"), "xakep");
//      assert.equal(domainName("https://youtube.com"), "youtube");
//    })
//  })

const find = url => {
   let short = '';

   if (!url.startsWith('h') && !url.startsWith('w')) {
      const indexFDot = url.indexOf('.');

      short = url.slice(0, indexFDot);
   }

   if (url.startsWith('h')) {
      const indexSlash = url.indexOf('/');
      if (url[indexSlash + 2] === 'w') {
         console.log(indexSlash + 2);
         const indexFDot = url.indexOf('.');
         const indexSDot = url.indexOf('.', indexFDot + 1);
         console.log(indexFDot, indexSDot);
         short = url.slice(indexFDot + 1, indexSDot);
         console.log(short);
      } else {
         const indexDot = url.indexOf('.');
         console.log(indexDot);

         short = url.slice(indexSlash + 2, indexDot);
      }
   } else if (url.startsWith('w')) {
      const indexFDot = url.indexOf('.');
      const indexSDot = url.indexOf('.', indexFDot + 1);
      console.log(indexFDot, indexSDot);

      short = url.slice(indexFDot + 1, indexSDot);
   }
   return short;
};
//74

// function domainName(url){
//    url = url.replace("https://", '');
//    url = url.replace("http://", '');
//    url = url.replace("www.", '');
//    return url.split('.')[0];
//  };
//  http://www.p3v4yble3801zwyotp83oxq4e.io
console.log(find('http://github.com/carbonfive/raygun'));
console.log(find('http://google.com'));
console.log(find('https://youtube.com'));
console.log(find('www.xakep.ru'));
console.log(find('http://www.p3v4yble3801zwyotp83oxq4e.io'));
console.log(find('taon7oq1xh.co.za'));
