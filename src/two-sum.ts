/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums: number[], target: number) {
  if (!Array.isArray(nums) || nums.length < 2 || isNaN(target)) {
    return [];
  }
  let m = {};
  let loop = 0;
  while (loop < nums.length) {
    let dis = target - nums[loop];
    if (m[dis] !== undefined) {
      return [m[dis], loop];
    }
    m[nums[loop]] = loop;
    loop++;
  }
  return [];
};

let nums = [-3, 4, 3, 90];
let target = 0;
console.log(twoSum(nums, target));