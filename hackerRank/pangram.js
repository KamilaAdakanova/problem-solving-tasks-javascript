//https://www.hackerrank.com/challenges/one-month-preparation-kit-pangrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

// const testStr = 'We promptly judged antique ivory buckles for the next prize';
// function pangrams(s) {
//   let str = s.toLowerCase();
//   const hash = {};
//   for (let i = 0; i < str.length; i++) {
//     //console.log(s[i]);
//     if (!hash[str[i]]) {
//       hash[str[i]] = 1;
//     } else hash[str[i]]++;
//   }
//   console.log(hash);

//   for (let key in hash) {
//     // console.log(Object.keys(hash).length);
//     if (Object.keys(hash).length === 27) {
//       return 'pangram';
//     } else {
//       return 'not pangram';
//     }
//   }
// }
// res = pangrams(testStr);
// console.log(res);

class CreateUserProfile {
  static beforeCreate(email) {
    var profiles = SocialMediaProfiles.fetchSocialProfiles(email);

    var result = SocialMediaProfiles.saveProfiles(profiles);

    return result.success;
  }
}
console.log(CreateUserProfile.beforeCreate('uihifk@jhj.com'));
